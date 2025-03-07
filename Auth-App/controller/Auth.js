const bcrypt = require('bcrypt');
const User = require('../model/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password || !role) {
            return res.status(400).json({
                success: false,
                message: "Details missing"
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User Already Exists"
            });
        }

        const hashPass = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashPass,
            role
        });

        res.status(200).json({
            success: true,
            user: user,
            message: "User registered successfully!"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Signup Failed, Try again Later"
        });
    }
};

exports.login = async (req, res) => {
    try {

        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Details missing"
            });
        }
        const existingOrNot = await User.findOne({ email })
        if (!existingOrNot) {
            return res.status(401).json({
                success: false,
                message: "User not found"
            });
        }
        const payload = {
            email: existingOrNot.email,
            id: existingOrNot._id,
            role: existingOrNot.role
        }
        if (await bcrypt.compare(password, existingOrNot.password)) {
            let token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" });
            // existingOrNot = existingOrNot.toObject();
            existingOrNot.token = token
            existingOrNot.password = undefined

            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            }
             res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user: existingOrNot,
                message: "User Logged in successfully"
            });

        } 
        else {
            return res.status(403).json({
                success: false,
                message: "Password mismatched or Incorrect"
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Login Failed, Try again Later"
        });
    }
}

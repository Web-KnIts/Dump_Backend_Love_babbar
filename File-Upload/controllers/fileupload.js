const File = require('../models/file')
const cloudinary = require('cloudinary').v2

exports.localFileUpload = async(req,res)=>{
    try{
        // fetch file from req.body
        const file = req.files.file
        console.log(file)

        // where ou want to store your file on server (Path)
        let path = __dirname + "/files"+ Date.now()+ `${file.name.split('.')[1]}`

        file.mv(path,(err)=>{
            console.log(err)
        })
        res.json({
            success:true,
            message:'Local file Uploaded Successfully'
        })
    }catch(err)
    {
        res.json({
            success:false,
            message:'faild to upload file '
        })
        console.log(err)
    }
}

function isfileTypeSupported(type,supported)
{
    return supported.includes(type)
}
async function uploadFiletoCloudinary(file,folder,quality)
{
    const options = {folder}
    if(quality){
        options.quality = quality;
    }
    options.resource_type = "auto"
    return await cloudinary.uploader.upload(file.tempFilePath,options)
}

exports.imageUpload = async(req,res)=>{
    try{
        const {name,tags,email} = req.body;
        console.log(name,tags,email)

        // req.files.[file Name  of  req body]
        const file = req.files.imageFile
        console.log(file)

        // validation 
        const supportedTypes = ['jpg','jpeg','png'];
        const fileType = file.name.split('.')[1].toLowerCase()
        if(! isfileTypeSupported(fileType,supportedTypes))
        {
            return res.status(400).json({
                success:false,
                message:"Files format Not supported , \n Suported -> jpg, jpeg, png"
            })
        }
        const response = await uploadFiletoCloudinary(file,"Practice")

        // saving entry in nosql Db
        const fileData = await File.create({
            name,tags,email,imageUrl:response.secure_url
        })

        res.json({
            success:true,
            message:"Image Successfully Uploaded"
        })
    }
    catch(err)
    {
        res.json({
            success:false,
            message:'faild to upload Image file '
        })
        console.log(err)
    }
}

exports.videoUpload = async(req,res)=>{
    try{
        const {name,tags,email} = req.body;
        console.log(name,tags,email)
        const file = req.files.videoFile;
        console.log(file)

        const supportedTypes = ['mov','mp4'];
        const fileType = file.name.split('.')[1].toLowerCase()
        if(! isfileTypeSupported(fileType,supportedTypes))
        {
            return res.status(400).json({
                success:false,
                message:"Files format Not supported , \n Suported -> jpg, jpeg, png"
            })
        }
        const response = await uploadFiletoCloudinary(file,"Practice")
        // saving entry in nosql Db
        const fileData = await File.create({
            name,tags,email,imageUrl:response.secure_url
        })

        res.json({
            success:true,
            message:"video Successfully Uploaded"
        })
    }
    catch(err)
    {
        res.json({
            success:false,
            message:'faild to upload video file '
        })
        console.log(err)
    }
}

exports.imageSizeReducer = async(req,res)=>{
    try{
        const {name,tags,email} = req.body;
        console.log(name,tags,email)

        // req.files.[file Name  of  req body]
        const file = req.files.imageFile
        console.log(file)

        // validation 
        const supportedTypes = ['jpg','jpeg','png'];
        const fileType = file.name.split('.')[1].toLowerCase()
        if(! isfileTypeSupported(fileType,supportedTypes))
        {
            return res.status(400).json({
                success:false,
                message:"Files format Not supported , \n Suported -> jpg, jpeg, png"
            })
        }
        const response = await uploadFiletoCloudinary(file,"Practice")

        // saving entry in nosql Db
        const fileData = await File.create({
            name,tags,email,imageUrl:response.secure_url
        })

        res.json({
            success:true,
            message:"Image Successfully Uploaded"
        })
    }
    catch(err)
    {
        res.json({
            success:false,
            message:'faild to upload video file '
        })
        console.log(err)
    }
}
const cloudinary = require('cloudinary').v2;

const cloudinaryConnect = () =>{
    try{
        cloudinary.config({
            cloud_name:process.env.CLOUD_NAME,
            api_key:process.env.API_KEY,
            api_secret:process.env.API_SECRET
        })
    }catch(err)
    {
        console.log('Cloudinary failed to make connection , Try Again')
        console.error(err)
        console.log(err.message)
        process.exit(1)
    }
}

module.exports = cloudinaryConnect
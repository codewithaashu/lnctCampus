const cloudinary = require("cloudinary").v2;

exports.uploadImageToCloudinary = async(file, folder, height, weight) => {
    const options = {folder};

    if(height){
        options.height = height
    }

    if(weight){
        options.weight = weight
    }

    options.resource_type = "auto";

    return await cloudinary.uploader.upload(file.tempFilePath, options)
}
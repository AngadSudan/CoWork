import { v2 as cloudinary} from "cloudinary";
import fs from 'fs';


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,  
});

const uploadCloudData= async(localfilepath)=>{
    try {
        if(!localpath){
            res.status(419).send('No File Found');
        }else{

            const clouddata= await cloudinary.uploader.upload(localfilepath,{
                resource_type: "auto",
            });
            res.send('file has been uploaded',clouddata.url);
        }
    } catch (error) {
        fs.unlinkSync(localfilepath);
        return null;
    }
}

export default  uploadCloudData;

import {Router} from 'express';
import {upload} from '../middleware/multer.middleware.js';
const FileUploadRotuer=Router();

FileUploadRotuer.post('/',upload.single('file'),(req,res)=>{
    console.log(req.file);
    res.send('file has been uploaded');
})

export default FileUploadRotuer;
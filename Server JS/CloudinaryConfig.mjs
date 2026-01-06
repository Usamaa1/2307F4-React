import {v2 as cloudinary} from 'cloudinary'
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer'
 

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
})


 
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'xyz',
    allowed_formats: ['png','jpg','jpeg','gif'], // supports promises as well
   
  },
});
 
export const parser = multer({ storage: storage });
 

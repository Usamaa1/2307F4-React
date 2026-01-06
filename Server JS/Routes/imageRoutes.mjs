import express from 'express'
import { parser } from '../CloudinaryConfig.mjs';

const imageRoutes = express.Router();



imageRoutes.post('/upload', parser.array('image',12), function (req, res) {
  res.json(req.file);
});

export default imageRoutes;
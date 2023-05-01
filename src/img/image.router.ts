import express from 'express';
import type { Request, Response } from 'express';


import * as ImageService from './image.service';

export const imageRouter = express.Router();

// GET: get all the images
imageRouter.get('/', async (req: Request, res: Response) => {
    try {
        const images = await ImageService.AllImages();
        return res.status(200).json(images)
    } catch (err: any) {
        return res.status(500).json(err.message);
    }
})
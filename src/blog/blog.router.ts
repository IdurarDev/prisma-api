import express from 'express';
import type { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

import * as BlogService from './blog.service';

export const blogRouter = express.Router();

// GET: List all blog
blogRouter.get('/', async (req: Request, res: Response) => {
    try {
        const blogs = await BlogService.listBlogs()
        return res.status(200).json(blogs)
    } catch (err: any) {
        return res.status(500).json(err.message)
    }
});

// GET: An blog based on his id
blogRouter.get('/:id', async (req: Request, res: Response) => {
    const id: string = req.params.id;
    try {
        const blog = await BlogService.getBlog(id)
        if (blog) {
            return res.status(200).json(blog);
        }
    } catch (err: any) {
        return res.status(500).json(err.message);
    }
})
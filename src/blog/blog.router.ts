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

// POST: Create a new blog.
// Params: title, description, datePublished, userId
blogRouter.post('/',
    body("title").isString(),
    body("description").isString(),
    body("userId").isString(),
    body("datePublished").isISO8601().toDate(),
    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const blog = req.body;
            const newBlog = await BlogService.createBlog(blog)
            res.status(200).json(newBlog);
        } catch (err: any) {
            return res.status(500).json(err.message);
        }
    }
)

// PUT: Update a blog
// Params: title, description, userId, datePublished
blogRouter.put('/:id',
    body('title').isString(),
    body('description').isString(),
    body('userId').isString(),
    body('datePublished').isString(),
    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const id: string = req.params.id;
        try {
            const blog = req.body;
            const updatedBlog = await BlogService.updateBlog(blog, id);
            return res.status(201).json(updatedBlog);
        } catch (err: any) {
            res.status(500).json(err.message);
        }
    }
)

// DELETE a blog based on its id
blogRouter.delete('/:id', async (req: Request, res: Response) => {
    const id: string = req.params.id;
    try {
        await BlogService.deleteBlog(id);
        return res.status(204).json('this blog has been deleted');
    } catch (err: any) {
        return res.status(500).json(err.message);
    }
})
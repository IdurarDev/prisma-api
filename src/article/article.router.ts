import express from 'express';
import type { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

import * as ArticleService from './article.service';

export const articleRouter = express.Router();

// GET: List all the articles
articleRouter.get('/', async (req: Request, res: Response) => {
    try {
        const articles = await ArticleService.ListArticles()
        return res.status(200).json(articles)
    } catch (err: any) {
        return res.status(500).json(err.message)
    }
});

// GET: An article based on the id
articleRouter.get('/:id', async (req: Request, res: Response) => {
    const id: string = req.params.id;
    try {
        const article = await ArticleService.getArticle(id);
        if (article) {
            return res.status(200).json(article);
        }
    } catch (err: any) {
        return res.status(500).json(err.message);
    }
})

// POST: Create a new article.
// Params: title, description, datePublished, userId.
articleRouter.post('/',
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
            const article = req.body;
            const newArticle = await ArticleService.createArticle(article);
            return res.status(200).json(newArticle);
        } catch (err: any) {
            return res.status(500).json(err.message);
        }
    }
)

// PUT: Update article
// Params: title, description, userId, datePublished
articleRouter.put('/:id',
    body("title").isString(),
    body("description").isString(),
    body("userId").isString(),
    body("datePublished").isISO8601().toDate(),
    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const id: string = req.params.id;
        try {
            const article = req.body;
            const updatedArticle = await ArticleService.updateArticle(article, id);
            return res.status(201).json(updatedArticle);
        } catch (err: any) {
            res.status(500).json(err.message);
        }
    }
)

// DELETE an article based on id
articleRouter.delete('/:id', async (req: Request, res: Response) => {
    const id: string = req.params.id;
    try {
        await ArticleService.deleteArticle(id);
        return res.status(200).json("Article has been deleted successfully");
    } catch (err: any) {
        return res.status(500).json(err.message);
    }
})
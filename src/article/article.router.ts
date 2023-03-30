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

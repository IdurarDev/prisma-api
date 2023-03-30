import { db } from '../utils/db.server';
import type { User } from '../user/user.service';

type Article = {
    id: string;
    title: string;
    description: string;
    datePublished: Date;
    user: User;
    // userId: string;
}

type ArticleNew = {
    title: string;
    datePublished: Date;
    description: string;
    userId: string;
}

export const ListArticles = async (): Promise<Article[]> => {
    return db.article.findMany({
        select: {
            id: true,
            title: true,
            description: true,
            datePublished: true,
            user: {
                select: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    email: true,
                }
            }
            // userId: true,
        }
    })
}

export const getArticle = async (id: string): Promise<Article | null> => {
    return db.article.findUnique({
        where: { id, },
        select: {
            id: true,
            title: true,
            description: true,
            datePublished: true,
            user: {
                select: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    email: true,
                }
            }
        }
    })
}

export const createArticle = async (article: ArticleNew): Promise<Article> => {
    const { title, userId, description, datePublished } = article;
    const parsedDate: Date = new Date(datePublished);

    return db.article.create({
        data: {
            title,
            description,
            userId,
            datePublished: parsedDate,
        },
        select: {
            id: true,
            title: true,
            description: true,
            datePublished: true,
            user: {
                select: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    email: true,
                }
            }
        }
    })
}

export const updateArticle = async (article: ArticleNew, id: string): Promise<Article> => {
    const { title, description, userId, datePublished } = article;
    return db.article.update({
        where: { id, },
        data: {
            title,
            description,
            datePublished,
            userId,
        },
        select: {
            id: true,
            title: true,
            description: true,
            datePublished: true,
            user: {
                select: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    email: true,
                }
            }
        }
    })
}
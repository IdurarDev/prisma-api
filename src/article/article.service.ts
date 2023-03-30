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
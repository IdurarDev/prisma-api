import { db } from '../utils/db.server';
import type { User } from '../user/user.service';

type Blog = {
    id: string;
    title: string;
    description: string;
    datePublished: Date;
    user: User;
}

export const listBlogs = async (): Promise<Blog[]> => {
    return db.blog.findMany({
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

export const getBlog = async (id: string): Promise<Blog | null> => {
    return db.blog.findUnique({
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
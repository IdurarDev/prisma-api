import { db } from '../utils/db.server';
import type { User } from '../user/user.service';

type Blog = {
    id: string;
    title: string;
    description: string;
    datePublished: Date;
    user: User;
}

type NewBlog = {
    title: string;
    datePublished: Date;
    description: string;
    userId: string;
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

export const createBlog = async (blog: NewBlog): Promise<Blog> => {
    const { title, userId, description, datePublished } = blog;
    const parsedDate: Date = new Date(datePublished);

    return db.blog.create({
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

export const updateBlog = async (blog: NewBlog, id: string): Promise<Blog> => {
    const { title, userId, description, datePublished } = blog;
    return db.blog.update({
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

export const deleteBlog = async (id: string): Promise<void> => {
    await db.blog.delete({
        where: { id, },
    })
}
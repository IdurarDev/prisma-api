import { db } from '../utils/db.server';

type User = {
    id: string;
    firstname: string;
    lastname: string;
}

export const listUsers = async (): Promise<User[]> => {
    return db.user.findMany({
        select: {
            id: true,
            firstname: true,
            lastname: true,
        }
    })
}

export const getUser = async (id: string): Promise<User | null> => {
    return db.user.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            firstname: true,
            lastname: true,
        }
    })
}
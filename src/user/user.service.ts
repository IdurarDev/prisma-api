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
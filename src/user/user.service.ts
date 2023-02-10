import { db } from '../utils/db.server';

type User = {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
}

export const listUsers = async (): Promise<User[]> => {
    return db.user.findMany({
        select: {
            id: true,
            firstname: true,
            lastname: true,
            email: true,
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
            email: true,
        }
    })
}

export const createUser = async (user: Omit<User, "id">): Promise<User> => {
    const { firstname, lastname, email } = user
    return db.user.create({
        data: {
            firstname,
            lastname,
            email,
        },
        select: {
            id: true,
            firstname: true,
            lastname: true,
            email: true,
        }
    })
}

export const updateUser = async (user: Omit<User, "id">, id: string): Promise<User> => {
    const { firstname, lastname, email } = user;
    return db.user.update({
        where: {
            id,
        },
        data: {
            firstname,
            lastname,
            email,
        },
        select: {
            id: true,
            firstname: true,
            lastname: true,
            email: true,
        }
    })

}


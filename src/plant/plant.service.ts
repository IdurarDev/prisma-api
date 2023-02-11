import { db } from "../utils/db.server";
import type { User } from '../user/user.service'

type Plant = {
    id: string;
    title: string;
    description: string;
    datePublished: Date;
    user: User;
    // userId: string;
};

export const listPlants = async (): Promise<Plant[]> => {
    return db.plant.findMany({
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

export const getPlant = async (id: string): Promise<Plant | null> => {
    return db.plant.findUnique({
        where: {
            id,
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
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

type PlantNew = {
    title: string;
    datePublished: Date;
    description: string;
    userId: string;
}

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

export const createPlant = async (plant: PlantNew): Promise<Plant> => {
    const { title, description, datePublished, userId } = plant;
    const parsedDate: Date = new Date(datePublished);

    return db.plant.create({
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
            // userId: true,
            user: {
                select: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    email: true,
                }
            }
        },
    })
}

export const updatePlant = async (plant: PlantNew, id: string): Promise<Plant> => {
    const { title, description, datePublished, userId } = plant;
    return db.plant.update({
        where: {
            id,
        },
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
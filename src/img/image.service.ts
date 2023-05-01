import { db } from "../utils/db.server";

export type Image = {
    id: string;
    title: string;
}

export const AllImages = async (): Promise<Image[]> => {
    return db.image.findMany({
        select: {
            id: true,
            title: true,
        }
    })
}
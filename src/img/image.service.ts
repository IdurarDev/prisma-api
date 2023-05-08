import { db } from "../utils/db.server";

export type Image = {
    id: string;
    title: string;
    data: Buffer;
}

export const AllImages = async (): Promise<Image[]> => {
    return db.image.findMany({
        select: {
            id: true,
            title: true,
            data: true,
        }
    })
}
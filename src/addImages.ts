import { Pool } from "pg";
// import * as dotenv from "dotenv";

// dotenv.config();

const pool = new Pool({
    user: process.env.DATABASE_USERNAME,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE,
    password: process.env.DATABASE_PASSWORD,
    port: 5432,
})

const arrayImages = [
    '../src/images/plant-product-1',
    '../src/images/plant-product-2',
    '../src/images/plant-product-3',
    '../src/images/plant-product-4',
    '../src/images/plant-product-5',
    '../src/images/plant-product-6',
    '../src/images/plant-product-7',
    '../src/images/plant-product-8',
    '../src/images/plant-product-9',
    '../src/images/plant-product-10'
]

async function addImages() {
    const client = await pool.connect();
    try {
        await client.query('BEGIN'); // begin transaction
        for (const image of arrayImages) {
            const data = await readFile(image) // read image
            // await client.query('INSERT INTO Image (id, title, data) VALUES (?, ?, ?)', [image, data])
            await client.query('INSERT INTO Image (id, title, "plantId", "createdAt", "data", "updatedAt") VALUES(?, ?, ?, CURRENT_TIMESTAMP, ?, ?)', [image, data])
        }
        await client.query('COMMIT'); // end transaction
        console.log('Les images ont bien été enregistrés dans la base de données')
    } catch (err: any) {
        await client.query('ROLLBACK'); // cancel transaction if error occurred
        console.error("Ereur lors de l'enregistrement des images: ", err.message)
    } finally {
        client.release();
    }
}

async function readFile(path: string) {
    const fs = require('fs');
    return await fs.promise.readFile(path);
}

addImages();
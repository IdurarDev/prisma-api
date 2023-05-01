import { Pool } from "pg";
// import * as dotenv from "dotenv";
import multer from "multer";
import express from "express";
import { Request, Response } from "express";

const app = express();

// dotenv.config();

const pool = new Pool({
    user: process.env.DATABASE_USERNAME,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE,
    password: process.env.DATABASE_PASSWORD,
    port: 5432,
})

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), async (req: Request, res: Response) => {
    const client = await pool.connect();
    try {
        const filetitle = req.file?.originalname;
        const data = req.file?.buffer;

        const query = 'INSERT INTO image (filetitle, data) VALUES (?, ?) RETURNING id';
        const values = [filetitle, data];

        const result = await client.query(query, values);

        res.json({ id: result.rows[0].id });
    } finally {
        client.release();
    }
})



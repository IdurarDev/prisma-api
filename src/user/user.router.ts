import express, { response } from 'express';
import type { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

import * as UserService from './user.service';

export const userRouter = express.Router();

// GET: List of all Users 
userRouter.get("/", async (req: Request, res: Response) => {
    try {
        const users = await UserService.listUsers()
        return res.status(200).json(users)
    } catch (err) {
        return res.status(500).json(err.message)
    }
})

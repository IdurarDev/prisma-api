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
    } catch (err: any) {
        return res.status(500).json(err.message)
    }
})

// GET: A single user by Id
userRouter.get("/:id", async (req, res) => {
    const id: string = req.params.id
    try {
        const user = await UserService.getUser(id)
        if (user) {
            return res.status(200).json(user)
        }
        return res.status(404).json("User not found")
    } catch (err: any) {
        return res.status(500).json(err.message)
    }
})

// POST: Create a User 
// Params: fistname, lastname, email
userRouter.post("/",
    body("firstname").isString(),
    body("lastname").isString(),
    body("email").isString(),
    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const user = req.body;
            const newUser = await UserService.createUser(user);
            return res.status(201).json(newUser);
        } catch (err: any) {
            return res.status(500).json(err.message)
        }
    }
)
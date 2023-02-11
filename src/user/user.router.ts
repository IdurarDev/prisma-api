import express from 'express';
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

// GET: A Single User by Id
userRouter.get("/:id", async (req: Request, res: Response) => {
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

// POST: Create an User 
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

// PUT: Update an User 
// Params: fistname, lastname, email
userRouter.put("/:id",
    body("firstname").isString(),
    body("lastname").isString(),
    body("email").isString(),
    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const id: string = req.params.id
        try {
            const user = req.body;
            const updatedUser = await UserService.updateUser(user, id);
            return res.status(200).json(updatedUser);
        } catch (err: any) {
            return res.status(500).json(err.message)
        }
    }
)

// DELETE: Delete an User based on the id
userRouter.delete("/:id", async (req: Request, res: Response) => {
    const id: string = req.params.id;
    try {
        await UserService.deleteUser(id);
        return res.status(204).json("User has been deleted successfully");
    } catch (err: any) {
        return res.status(500).json(err.message);
    }
})
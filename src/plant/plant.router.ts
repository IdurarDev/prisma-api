import express from 'express';
import type { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

import * as PlantService from './plant.service';

export const plantRouter = express.Router();

// GET: List all the plants
plantRouter.get('/', async (req: Request, res: Response) => {
    try {
        const plants = await PlantService.listPlants()
        return res.status(200).json(plants);
    } catch (err: any) {
        return res.status(500).json(err.message);
    }
});

// GET: A plant based on the id
plantRouter.get('/:id', async (req: Request, res: Response) => {
    const id: string = req.params.id;
    try {
        const plant = await PlantService.getPlant(id);
        if (plant) {
            return res.status(200).json(plant);
        }
    } catch (err: any) {
        return res.status(500).json(err.message);
    }
});

// POST: Create a new plant
// Params: title, description, datePublished, userId
plantRouter.post('/',
    body("title").isString(),
    body("description").isString,
    body("userId").isString(),
    body("datePublished").isDate().toDate(),
    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const plant = req.body;
            const newPlant = await PlantService.createPlant(plant);
            return res.status(201).json(newPlant);
        } catch (err: any) {
            return res.status(500).json(err.message);
        }
    }
);

// PUT: Update plant
// Params: title, description, userId, datePublished
plantRouter.put('/:id',
    body("title").isString(),
    body("description").isString,
    body("userId").isString(),
    body("datePublished").isDate(),
    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const id: string = req.params.id;
        try {
            const plant = req.body;
            const updatedPlant = await PlantService.updatePlant(plant, id);
            return res.status(201).json(updatedPlant);
        } catch (err: any) {
            return res.status(500).json(err.message);
        }
    }
);

plantRouter.delete('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        await PlantService.deletePlant(id);
        return res.status(204).json("Plant has been deleted successfully");
    } catch (err: any) {
        return res.status(500).json(err.message);
    }
})
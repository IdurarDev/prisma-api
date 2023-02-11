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
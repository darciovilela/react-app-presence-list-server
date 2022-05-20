import express from 'express';
import { SubmitPresenceUseCase } from './use-cases/submit-presence-use-case';
import { PrismaPresenceRepository } from './repositories/prisma/prisma-presence-repository';


export const routes = express.Router();

routes.post('/', async (req, res) => {
    const {name, time} = req.body

    const prismaPresenceRepository = new PrismaPresenceRepository()
    
    const submitPresenceUseCase = new SubmitPresenceUseCase(
      prismaPresenceRepository)
      

    await submitPresenceUseCase.execute({
      name,
      time,
    })
    
    return res.status(201).send();
});


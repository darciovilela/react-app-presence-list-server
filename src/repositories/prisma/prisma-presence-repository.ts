import { PresenceCreateData, PresenceRepository } from "../presence-repository";
import { prisma } from "../../prisma";

export class PrismaPresenceRepository implements PresenceRepository {
    async create({name, time}: PresenceCreateData) {
        await prisma.presence.create({
            data: {
                name,
                time,
            }
        })

    }
}
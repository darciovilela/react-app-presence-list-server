import { PresenceRepository } from "../repositories/presence-repository";

interface SubmitPresenceUseCaseRequest {
    name: string;
    time: string;
    
}

export class SubmitPresenceUseCase {
    constructor(
        private presenceRepository: PresenceRepository,
        
    ) {}



    async execute(request: SubmitPresenceUseCaseRequest) {
        const { name, time } = request;

        await this.presenceRepository.create({
            name,
            time,
           
        })

        
    }
}
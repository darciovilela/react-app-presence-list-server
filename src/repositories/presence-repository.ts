export interface PresenceCreateData {
    name: string
    time: string
    
}

export interface PresenceRepository {
    create: (data: PresenceCreateData) => Promise<void>;
}
import { FreightItem, FreightRepository } from "../domain/freight";

export class FreightService {
    constructor(private readonly freightRepository: FreightRepository) { }

    async getAllFreight(): Promise<FreightItem[]> {
        return this.freightRepository.findAll();
    }
}

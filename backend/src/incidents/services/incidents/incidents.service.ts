import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateIncidentDto } from 'src/incidents/dtos/CreateIncident.dto';
import { FilterIncidentDto } from 'src/incidents/dtos/FilterIncident.dto';
import { Incident } from 'src/incidents/entities/incidents.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IncidentsService {
    constructor(
        @InjectRepository(Incident) private incidentRepository: Repository<Incident>
    ){}

    getIncidents(filter: FilterIncidentDto) {
        return this.incidentRepository.find({where: filter});
    }

    createIncident(incidentsDetails: CreateIncidentDto) {
        const newIncident = this.incidentRepository.create({
            ...incidentsDetails,
            date: new Date(),
        })
        return this.incidentRepository.save(newIncident);
    }
}

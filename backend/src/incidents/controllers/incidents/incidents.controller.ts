import { Body, Controller, Post, Get, Query } from '@nestjs/common';
import { CreateIncidentDto } from 'src/incidents/dtos/CreateIncident.dto';
import { FilterIncidentDto } from 'src/incidents/dtos/FilterIncident.dto';
import { IncidentsService } from 'src/incidents/services/incidents/incidents.service';

@Controller('incidents')
export class IncidentsController {
    constructor(private incidentService: IncidentsService) {}

    @Post('create')
    createIncident(@Body() createIncidentDto: CreateIncidentDto){
        return this.incidentService.createIncident(createIncidentDto);
    }

    @Get()
    getIncidents(@Query() filter: FilterIncidentDto){
        return this.incidentService.getIncidents(filter);
    }
}

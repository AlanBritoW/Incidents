import { IsOptional } from "class-validator";
import { IncidentStatus } from "../entities/incidents.entity";

export class FilterIncidentDto{
    @IsOptional()
    status?: IncidentStatus;
    @IsOptional()
    team_id?: string;
}
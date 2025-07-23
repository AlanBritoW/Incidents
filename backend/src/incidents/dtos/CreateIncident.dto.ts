import { IsNotEmpty, IsString } from "class-validator";
import { IncidentStatus } from "../entities/incidents.entity";

export class CreateIncidentDto {
    @IsString()
    @IsNotEmpty()
    description: string;
    @IsString()
    @IsNotEmpty()
    team_id: string;
    @IsNotEmpty()
    status: IncidentStatus;
}
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


export type IncidentStatus = 'abierto' | 'en_progreso' | 'cerrado'


@Entity({name: 'incidents'})
export class Incident {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'date'})
    date: Date;

    @Column()
    description: string;

    @Column()
    team_id: string;

    @Column({type: 'varchar'})
    status: IncidentStatus;


}
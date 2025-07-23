export type IncidentStatus = 'abierto' | 'en_progreso' | 'cerrado';

export interface Incident {
  id: string;
  date: Date;
  description: string;
  team_id: string;
  status: IncidentStatus;
}

export interface NewIncident{
    description: string;
    team_id: string;
    status: IncidentStatus;
}
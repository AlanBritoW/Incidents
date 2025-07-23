import axios from 'axios';
import type { Incident, IncidentStatus, NewIncident } from '../interfaces/Incident';

const API_URL = 'http://localhost:3000/incidents';

export const fetchIncidents = async (filters: {
  status?: IncidentStatus;
  team_id?: string;
}): Promise<Incident[]> => {
  const response = await axios.get(API_URL, { params: filters });
  return response.data;
};

export const createIncident = async (data: NewIncident) => {
  const response = await axios.post(`${API_URL}/create`, data);
  return response.data;
};
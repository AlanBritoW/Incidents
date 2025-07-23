import { useEffect, useState } from 'react';
import IncidentForm from './components/IncidentForm';
import IncidentList from './components/IncidentsList';
import { fetchIncidents } from './services/api';
import type { Incident, IncidentStatus } from './interfaces/Incident';

function App() {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [status, setStatus] = useState<IncidentStatus | undefined>(undefined);
  const [teamID, setTeamID] = useState("");

  const loadIncidents = async () => {
    const filters: { status?: IncidentStatus; team_id?: string } = {}
    if (status) filters.status = status;
    if (teamID) filters.team_id = teamID;

    const data = await fetchIncidents(filters);
    setIncidents(data);
  };

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setTeamID(e.target.value);
  };

  useEffect(() => {
    loadIncidents();
  }, [status, teamID]);

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>Registro de Incidentes</h1>
          <IncidentForm onSubmit={loadIncidents} />
          <div className="d-flex gap-2 mb-3">
            <input
              name="team_id"
              className="form-control"
              placeholder="Equipo ID"
              value={teamID}
              onChange={handleFilter}
            />
            <select name="status" className="form-control" value={status} onChange={(e) => setStatus(e.target.value as IncidentStatus)}>
              <option value="">Todos</option>
              <option value="abierto">Abierto</option>
              <option value="en_progreso">En progreso</option>
              <option value="cerrado">Cerrado</option>
            </select>
          </div>
          <IncidentList incidents={incidents} />
        </div>
      </div>
    </div>
  );
}

export default App

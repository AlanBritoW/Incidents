import { useState } from 'react';
import { createIncident } from '../services/api';
import type { IncidentStatus } from '../interfaces/Incident';

const IncidentForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const [form, setForm] = useState({
    description: '',
    team_id: '',
    status: 'abierto' as IncidentStatus,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createIncident(form);
    onSubmit();
    setForm({ description: '', team_id: '', status: 'abierto' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <input
          name="description"
          className="form-control"
          placeholder="Descripción"
          value={form.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-2">
        <input
          name="team_id"
          className="form-control"
          placeholder="ID del equipo"
          value={form.team_id}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-2">
        <select name="status" className="form-control" value={form.status} onChange={handleChange}>
          <option value="abierto">Abierto</option>
          <option value="en_progreso">En progreso</option>
          <option value="cerrado">Cerrado</option>
        </select>
      </div>
      <button className="btn btn-primary" type="submit">Registrar Incidente</button>
    </form>
  );
};

export default IncidentForm;
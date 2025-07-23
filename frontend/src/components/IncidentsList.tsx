import type { Incident } from '../interfaces/Incident';

const IncidentList = ({ incidents }: { incidents: Incident[] }) => (
  <table className="table table-bordered">
    <thead>
      <tr>
        <th>Fecha</th>
        <th>Descripción</th>
        <th>Equipo</th>
        <th>Estado</th>
      </tr>
    </thead>
    <tbody>
      {incidents.map((i) => (
        <tr key={i.id}>
          <td>{i.date.toString()}</td>
          <td>{i.description}</td>
          <td>{i.team_id}</td>
          <td>{i.status}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default IncidentList;
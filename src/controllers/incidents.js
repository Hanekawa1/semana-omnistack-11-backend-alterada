/* eslint-disable camelcase */
import { IncidentServices } from '../services';

const index = async (req, res) => {
  const { page = 1 } = req.query;

  const count = await IncidentServices.countIncidents();

  const incidents = await IncidentServices.getAllIncidents(page);

  res.header('X-Total-Count', count);
  return res.json(incidents);
};

const create = async (req, res) => {
  const { title, description, value } = req.body;
  const ong_id = req.headers.authorization;

  const incident = {
    title,
    description,
    value,
    ong_id,
  };

  const id = await IncidentServices.insertIncident(incident);

  return res.json({ id });
};

const deleteIncident = async (req, res) => {
  const { id } = req.params;
  const ong_id = req.headers.authorization;

  const incident = IncidentServices.deleteIncidents(id, ong_id);

  if (incident === 0) {
    return res.status(401).json({ error: 'Operation not permitted' });
  }

  return res.status(204).send();
};

export default { index, create, deleteIncident };

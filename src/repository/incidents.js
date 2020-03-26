/* eslint-disable camelcase */
import conn from '../database/connection';

const getAllIncidents = async (page) => {
  const incidents = await conn('incidents')
    .join('ongs', 'ong_id', '=', 'incidents.ong_id')
    .limit(5)
    .offset((page - 1) * 5)
    .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);

  return incidents;
};

const countIncidents = async () => {
  const [count] = await conn('incidents').count();

  return count['count(*)'];
};

const insertIncident = async (incident) => {
  const { title, description, value, ong_id } = incident;

  const [id] = await conn('incidents').insert({
    title,
    description,
    value,
    ong_id,
  });

  return id;
};

const deleteIncident = async (id, ong_id) => {
  const incident = await conn('incidents').where('id', id).select('ong_id').first();

  if (incident.ong_id !== ong_id) {
    return 0;
  }

  await conn('incidents').where('id', id).delete();

  return 1;
};

export default { getAllIncidents, insertIncident, countIncidents, deleteIncident };

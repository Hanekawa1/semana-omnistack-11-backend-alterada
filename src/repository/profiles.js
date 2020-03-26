/* eslint-disable camelcase */
import conn from '../database/connection';

const getIncidentsByOng = async (ong_id) => {
  const incidents = await conn('incidents').where('ong_id', ong_id).select('*');

  return incidents;
};

export default { getIncidentsByOng };

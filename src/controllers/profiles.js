/* eslint-disable camelcase */
import { ProfileServices } from '../services';

const index = async (req, res) => {
  const ong_id = req.headers.authorization;

  const incidents = ProfileServices.getIncidentsByOng(ong_id);

  return res.json(incidents);
};

export default { index };

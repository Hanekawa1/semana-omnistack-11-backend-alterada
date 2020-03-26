/* eslint-disable camelcase */
import { ProfilesRepository } from '../repository';

const getIncidentsByOng = async (ong_id) => {
  return ProfilesRepository.getIncidentsByOng(ong_id);
};

export default { getIncidentsByOng };

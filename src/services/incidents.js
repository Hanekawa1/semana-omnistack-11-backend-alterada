/* eslint-disable camelcase */
import { IncidentsRepository } from '../repository';

const getAllIncidents = async (page) => {
  return IncidentsRepository.getAllIncidents(page);
};

const countIncidents = async (page) => {
  return IncidentsRepository.countIncidents(page);
};

const insertIncident = async (incident) => {
  return IncidentsRepository.insertIncident(incident);
};

const deleteIncidents = async (id, ong_id) => {
  return IncidentsRepository.deleteIncident(id, ong_id);
};

export default { getAllIncidents, insertIncident, countIncidents, deleteIncidents };

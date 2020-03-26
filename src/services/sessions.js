import { SessionsRepository } from '../repository';

const getLoggedOng = async (id) => {
  return SessionsRepository.getLoggedOng(id);
};

export default { getLoggedOng };

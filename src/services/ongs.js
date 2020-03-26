import { OngsRepository } from '../repository';

const getAllOngs = async () => {
  return OngsRepository.getAllOngs();
};

const insertOng = async (ong) => {
  return OngsRepository.insertOng(ong);
};

export default { getAllOngs, insertOng };

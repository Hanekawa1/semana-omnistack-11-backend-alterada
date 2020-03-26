import conn from '../database/connection';

const getLoggedOng = async (id) => {
  const ong = await conn('ongs').where('id', id).select('name').first();

  if (!ong) {
    return 0;
  }

  return ong;
};

export default { getLoggedOng };

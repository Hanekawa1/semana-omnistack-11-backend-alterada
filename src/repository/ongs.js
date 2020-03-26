import conn from '../database/connection';

const getAllOngs = async () => {
  const ongs = await conn('ongs').select('*');

  return ongs;
};

const insertOng = async (ong) => {
  const { id, name, email, whatsapp, city, uf } = ong;

  await conn('ongs').insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf,
  });

  return id;
};

export default { getAllOngs, insertOng };

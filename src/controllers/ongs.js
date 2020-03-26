import crypto from 'crypto';
import { OngServices } from '../services';

const index = async (req, res) => {
  const ongs = await OngServices.getAllOngs();

  return res.json(ongs);
};

const create = async (req, res) => {
  const { name, email, whatsapp, city, uf } = req.body;

  const id = crypto.randomBytes(4).toString('HEX');

  const ong = {
    id,
    name,
    email,
    whatsapp,
    city,
    uf,
  };

  await OngServices.insertOng(ong);
  return res.json({ id });
};

export default { index, create };

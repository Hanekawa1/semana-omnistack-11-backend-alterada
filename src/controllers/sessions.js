import { SessionServices } from '../services';

const create = async (req, res) => {
  const { id } = req.body;

  const ong = SessionServices.getLoggedOng(id);

  if (ong === 0) {
    return res.status(400).json({ error: 'No ONG found with this ID' });
  }

  return res.json(ong);
};

export default { create };

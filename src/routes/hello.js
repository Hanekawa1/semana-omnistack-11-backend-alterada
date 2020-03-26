import express from 'express';

const router = express.Router();

router.get('/', (request, response) => {
  return response.json({
    evento: 'Hello Semana Omnistack 11',
  });
});

export default router;

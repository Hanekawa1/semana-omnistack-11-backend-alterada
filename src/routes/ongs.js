import express from 'express';
import { OngsController } from '../controllers';

const router = express.Router();

router.get('/ongs', OngsController.index);
router.post('/ongs', OngsController.create);

export default router;

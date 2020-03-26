import express from 'express';
import { SessionsController } from '../controllers';

const router = express.Router();

router.post('/sessions', SessionsController.create);

export default router;

import express from 'express';
import { ProfilesController } from '../controllers';

const router = express.Router();

router.get('/profile', ProfilesController.index);

export default router;

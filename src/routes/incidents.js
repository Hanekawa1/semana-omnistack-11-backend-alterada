import express from 'express';
import { IncidentsController } from '../controllers';

const router = express.Router();

router.get('/incidents', IncidentsController.index);
router.post('/incidents', IncidentsController.create);
router.delete('/incidents/:id', IncidentsController.deleteIncident);

export default router;

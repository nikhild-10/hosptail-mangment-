import { Router } from 'express';
import { createAppointment, getMyAppointments } from '../controllers/appointment.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.post('/', authenticate, createAppointment);
router.get('/my', authenticate, getMyAppointments);

export default router;

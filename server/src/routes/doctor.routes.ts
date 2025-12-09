import { Router } from 'express';
import { getAllDoctors } from '../controllers/doctor.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', authenticate, getAllDoctors);

export default router;

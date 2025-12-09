import express from 'express';
import { getAllDoctors, getDoctorStats } from '../controllers/doctor.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = express.Router();

router.get('/', getAllDoctors);
router.get('/stats', authenticate, getDoctorStats);

export default router;

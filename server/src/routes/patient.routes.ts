import { Router } from 'express';
import { getMyProfile, updateProfile, getHistory } from '../controllers/patient.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.get('/me', authenticate, getMyProfile);
router.patch('/me', authenticate, updateProfile);
router.get('/history', authenticate, getHistory);

export default router;

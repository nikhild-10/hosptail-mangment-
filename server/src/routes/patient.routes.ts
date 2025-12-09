import { Router } from 'express';
import { getMyProfile, updateProfile } from '../controllers/patient.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.get('/me', authenticate, getMyProfile);
router.patch('/me', authenticate, updateProfile);

export default router;

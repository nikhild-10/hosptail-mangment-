import express from 'express';
import { getRequests, createRequest, registerDonor } from '../controllers/donation.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = express.Router();

router.get('/requests', getRequests);
router.post('/request', authenticate, createRequest);
router.post('/register', authenticate, registerDonor);

export default router;

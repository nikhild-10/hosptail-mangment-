import { Router } from 'express';
import { createBill, getMyBills } from '../controllers/billing.controller';
import { authenticate, authorize } from '../middlewares/auth.middleware';

const router = Router();

// Only admin or doctor (or staff) can create bills usually, but for simplicity let's say ADMIN/DOCTOR
router.post('/', authenticate, authorize(['ADMIN', 'DOCTOR', 'receptionist']), createBill);

// Patients can view their own bills
router.get('/my', authenticate, getMyBills);

export default router;

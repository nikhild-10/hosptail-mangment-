import express from 'express';
import { getMyNotifications, markAsRead } from '../controllers/notification.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = express.Router();

router.get('/', authenticate, getMyNotifications);
router.put('/:id/read', authenticate, markAsRead);

export default router;

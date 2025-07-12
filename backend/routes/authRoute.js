import express from 'express';
import { signup, login, logout, emailVerification, forgotPassword, resetPassword, checkAuth } from '../controllers/authController.js';
import { verifyToken } from '../middleware/verifyToken.js';
const router = express.Router();



router.get('/AuthVerification', verifyToken, checkAuth);

router.post('/signup', signup);

router.post('/login', login);

router.post('/logout', logout);

router.post('/EmailVerification', emailVerification);

router.post('/forgotPassword', forgotPassword);

router.post('/resetPassword/:token', resetPassword);

export default router;
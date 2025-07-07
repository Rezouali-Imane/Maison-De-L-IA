import express from 'express';
import { signup, login, logout, emailVerification } from '../controllers/authController.js';
const router = express.Router();

router.post('/signup', signup);

router.post('/login', login);

router.post('/logout', logout);

router.post('/EmailVerification', emailVerification);
export default router;
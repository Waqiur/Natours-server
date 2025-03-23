import express from 'express';
import {
  getOverview,
  getTour,
  getLoinForm,
  getAccount,
} from '../controllers/viewsController.js';
import { isLoggedIn, protect } from '../controllers/authController.js';

const router = express.Router();
router.use(isLoggedIn);
router.get('/', isLoggedIn, getOverview);
router.get('/tour/:slug', isLoggedIn, getTour);
router.get('/login', isLoggedIn, getLoinForm);
router.get('/me', protect, getAccount);
export default router;

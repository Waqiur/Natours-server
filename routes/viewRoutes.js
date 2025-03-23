import express from 'express';
import {
  getOverview,
  getTour,
  getLoinForm,
  getAccount,
  updateUserData,
  getMyTours,
} from '../controllers/viewsController.js';
import { isLoggedIn, protect } from '../controllers/authController.js';
import { createBookingCheckout } from '../controllers/bookingController.js';

const router = express.Router();
router.use(isLoggedIn);
router.get('/', isLoggedIn, getOverview);
router.get('/tour/:slug', isLoggedIn, getTour);
router.get('/login', isLoggedIn, getLoinForm);
router.get('/me', protect, getAccount);
router.get('/my-tours', createBookingCheckout, protect, getMyTours);
router.post('/submit-user-data', protect, updateUserData);
export default router;

import axios from 'axios';
import { showAlert } from './alert';
const stripe = Stripe(
  'pk_test_51R5pnzSI5C3ay7zvF4L8bwscDlcf1nil5Css133IRG7zo5kd973MYXdjySXIyfgrNo2I8IBtHLYkBvaoGD9SRpGZ00yu0qnp9c'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({ sessionId: session.data.session.id });
  } catch (err) {
    showAlert('error', err);
  }
};

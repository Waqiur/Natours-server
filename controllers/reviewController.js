import Review from '../models/reviewModel.js';
import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from './handlerFactory.js';

export const getAllReviews = getAll(Review);

export const setTourUserIds = (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

export const getReview = getOne(Review);
export const createReview = createOne(Review);

export const deleteReview = deleteOne(Review);

export const updateReview = updateOne(Review);

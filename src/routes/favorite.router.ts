import express from 'express';
import { FavoriteApi } from '../controllers';
import { handleValidation, validateId } from '../validators';

const favoriteApi = express.Router();

favoriteApi.get('/', FavoriteApi.getAll);
favoriteApi.get(
  '/:profile_id',
  validateId,
  handleValidation,
  FavoriteApi.getByProfile
);

export default favoriteApi;

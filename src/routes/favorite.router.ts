import express from 'express';
import { FavoriteApi } from '../controllers';

const favoriteApi = express.Router();

favoriteApi.get('/', FavoriteApi.getAll);
favoriteApi.get('/:profile_id', FavoriteApi.getByProfile);

export default favoriteApi;

import express from 'express';
import { ProfileApi } from '../controllers';

const profileApi = express.Router();

profileApi.get('/', ProfileApi.getAll);
profileApi.post('/', ProfileApi.create);

export default profileApi;

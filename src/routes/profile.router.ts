import express from 'express';
import { ProfileApi } from '../controllers';
import { handleValidation, validateProfile } from '../validators';

const profileApi = express.Router();

profileApi.get('/', ProfileApi.getAll);
profileApi.post('/', validateProfile, handleValidation, ProfileApi.create);

export default profileApi;

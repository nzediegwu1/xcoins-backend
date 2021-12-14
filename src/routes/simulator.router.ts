import express from 'express';
import { SimulatorApi } from '../controllers';
import { handleValidation, validateId, validateSimulator } from '../validators';

const simulatorApi = express.Router();

simulatorApi.get('/', SimulatorApi.getAll);
simulatorApi.get(
  '/:profile_id',
  validateId,
  handleValidation,
  SimulatorApi.getByProfile
);
simulatorApi.post(
  '/:profile_id',
  validateSimulator,
  handleValidation,
  SimulatorApi.create
);

export default simulatorApi;

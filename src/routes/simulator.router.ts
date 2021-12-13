import express from 'express';
import { SimulatorApi } from '../controllers';

const simulatorApi = express.Router();

simulatorApi.get('/', SimulatorApi.getAll);
simulatorApi.get('/:profile_id', SimulatorApi.getByProfile);
simulatorApi.post('/:profile_id', SimulatorApi.create);

export default simulatorApi;

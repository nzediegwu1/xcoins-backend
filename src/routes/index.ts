import express from 'express';
import favoriteApi from './favorite.router';
import profileApi from './profile.router';
import simulatorApi from './simulator.router';

const app = express.Router();

app.use('/favorite', favoriteApi);
app.use('/simulator', profileApi);
app.use('/profile', simulatorApi);

export default app;

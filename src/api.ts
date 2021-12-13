import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { DBURL, CORS_ORIGINS } from './config';
import mongoose from 'mongoose';
import routes from './routes';

mongoose
  .connect(`${DBURL}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Connected to DB ${DBURL}`);
  });

const app = express();
// Log requests to the console.
app.use(morgan('combined'));
app.use(cors({ origin: CORS_ORIGINS }));
// parse request body content
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

// Setup a default catch-all route.
app.get('*', (_, res) => res.status(404).json({ message: 'Page not found' }));

export default app;

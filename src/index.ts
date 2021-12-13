import HTTP from 'http';
import app from './api';
import { PORT } from './config';

export const http = HTTP.createServer(app);

http.listen(PORT, () =>
  console.log(`✅  Ready on port http://localhost:${PORT}`)
);

import express from 'express';
import 'dotenv/config';
import { logger, unknownEndpoint } from './middleware';

const PORT = process.env.PORT; 
const server = express();

server.use(logger);

server.get('/', (_req, res) => {
  res.status(200).send('Hello from backend');
})

server.use(unknownEndpoint);

server.listen(PORT, ()  => {
  console.log(`Listening on port ${PORT}`);
})

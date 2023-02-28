import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';

import cookieParser from 'cookie-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to mongoDB.');
  } catch (error) {
    throw error;
  }
};

//optional
mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected!');
});

mongoose.connection.on('connected', () => {
  console.log('mongoDB connected!');
});
//

//middlewares
app.use(cookieParser());
app.use(express.json()); //to send json objects to express server in postman
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);

//comment
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public') + '/index.html');
});

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong!';

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log('Connected to backend.');
});

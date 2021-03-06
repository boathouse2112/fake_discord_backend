import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import cookieParser from 'cookie-parser';
import express from 'express';
import logger from 'morgan';
import path from 'path';

import chatRouter from './routes/chat.js';
import usersRouter from './routes/user.js';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/chat', chatRouter);
app.use('/users', usersRouter);

export default app;

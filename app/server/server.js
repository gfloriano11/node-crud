import express from 'express';
import cors from 'cors';
import router from '../router/home.js';
import userRouter from '../router/users.js'

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', router);
app.use('/users', userRouter);

app.listen(8000);
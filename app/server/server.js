import express from 'express';
import cors from 'cors';
import userRouter from '../router/users.js'

const app = express();

app.use(express.json());
app.use(cors());

app.use('/users', userRouter);

app.listen(8000);
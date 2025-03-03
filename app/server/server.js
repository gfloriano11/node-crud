import express from 'express';
import cors from 'cors';
import router from '../router/users.js'

const app = express();

app.use(express.json());
app.use(cors());

app.use('/users', router)

app.listen(8000);
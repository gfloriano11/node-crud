import express from 'express';
import { homePage } from '../model/home.js';

const router = express.Router();

router.get('/', homePage);

export default router;
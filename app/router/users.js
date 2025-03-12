import express from 'express';
import { getUsers } from '../model/users.js';
import { createUser } from '../model/users.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);

export default router;
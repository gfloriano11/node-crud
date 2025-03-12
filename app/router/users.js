import express from 'express';
import { getUsers } from '../model/users.js';
import { createUser, createUser, updateUser, deleteUser } from '../model/users.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router;
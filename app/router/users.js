const express = require('express');
import { getUsers } from '../model/users';

const router = express.Router();

router.get('/users', getUsers);

export default router;
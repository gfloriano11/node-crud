import { connection } from '../connection/connection.js';

export const getUsers = (req, res) => {
    const q = 'SELECT * FROM users';

    connection.query(q, (error, data) => {
        if(error){
            return res.json(error);
        }
        return res.status(200).json(data);
    })
}

export const createUser = (req, res) => {
    const q = 'INSERT INTO users SET ?';
}
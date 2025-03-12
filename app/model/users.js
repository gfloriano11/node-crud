import { connection } from '../connection/connection.js';

export const getUsers = (req, res) => {
    const query = 'SELECT * FROM users';

    connection.query(query, (error, data) => {
        if(error){
            return res.json(error);
        }
        return res.status(200).json(data);
    })
}

export const createUser = (req, res) => {
    const query = 'INSERT INTO users (full_name, email, phone_number, birthdate) VALUES (?)';

    const values = [
        req.body.name,
        req.body.email,
        req.body.number,
        req.body.birthdate
    ]

    connection.query(query, values, (error, data) => {
        if(error){
            return res.json(error);
        }
        return res.status(200).json('Created user successfully');
    })
}

export const updateUser = (req, res) => {
    const query = 'UPDATE users SET full_name = ?, email = ?, phone_number = ?, birthdate = ? WHERE id = ?';

    const values = [
        req.body.name,
        req.body.email,
        req.body.number,
        req.body.birthdate,
        req.params.id
    ]

    connection.query(query, values, (error, data) => {
        if(error){
            return res.json(error);
        }
        return res.status(200).json('Updated user successfully');
    })
}
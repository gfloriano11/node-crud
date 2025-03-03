import connection from '../connection/connection.js';

export const getUsers = (req, res) => {
    const query = 'SELECT * FROM users';

    connection.query(query, (error, data) => {
        if(error){
            return res.json(error);
        }
        return res.status(200).json(data);
    })
}
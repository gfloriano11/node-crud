const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_crud'
});

connection.connect(error => {
    if(error){
        console.log('Connection error: ', error);
        return;
    }
})

app.listen(8000)
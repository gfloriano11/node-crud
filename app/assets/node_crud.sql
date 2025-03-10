DROP DATABASE IF EXISTS node_crud;

CREATE DATABASE node_crud;

USE node_crud;

CREATE TABLE users(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(11) NOT NULL,
    birthdate DATE NOT NULL
);
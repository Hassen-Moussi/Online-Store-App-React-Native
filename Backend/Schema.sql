CREATE DATABASE shopdatabase;
USE shopdatabase;

CREATE TABLE users(id integer PRIMARY KEY AUTO_INCREMENT, Username VARCHAR(20) NOT NULL , Email VARCHAR(50) NOT NULL, password VARCHAR(20) NOT NULL);
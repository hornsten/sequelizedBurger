-- Database Schema
CREATE DATABASE burgers_db;
USE burgers_db;

-- This is the one recommended by tutorial
CREATE TABLE burgers (
id INT AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(255) NOT NULL,
devoured BOOLEAN NOT NULL DEFAULT 0,
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
)

-- This is the one I used during development
CREATE TABLE burgers 
(
id INT AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(255) NOT NULL,
devoured BOOLEAN NOT NULL DEFAULT 0,
date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);
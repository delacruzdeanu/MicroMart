-- scripts/postgres/init-user-db.sql
CREATE DATABASE userdb;

\c userdb;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  role VARCHAR(20) DEFAULT 'customer',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create an index on email for faster lookups
CREATE INDEX idx_users_email ON users(email);

-- Add a test admin user (password is 'admin123' in this example)
INSERT INTO users (email, password, first_name, last_name, role) 
VALUES ('admin@micromart.com', '$2b$10$3euPcmQFCiblsZeEu5s7p.9MUZWj3bcZI3dEgGhGl6IknC0s0vz.G', 'Admin', 'User', 'admin');
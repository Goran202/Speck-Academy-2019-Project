CREATE TABLE halls(
    hall_id uuid NOT NULL PRIMARY KEY,
    name VARCHAR(100), 
    address VARCHAR(100),
    capacity INTEGER NOT NULL, 
    image BYTEA, 
    date_created TIMESTAMP DEFAULT NOW(),
    date_updated TIMESTAMP DEFAULT NOW()  
    );

CREATE TABLE users(
    user_id uuid NOT NULL PRIMARY KEY,
    user_type VARCHAR(50),
    username VARCHAR(50),
    email VARCHAR(50),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    pasword_hash VARCHAR(100),
    date_created TIMESTAMP DEFAULT NOW(),
    date_updated TIMESTAMP DEFAULT NOW()  
    );

CREATE TABLE reservations(
    reservation_status INTEGER,
    reserved_from TIMESTAMP, 
    reserved_until TIMESTAMP,
    hall_id uuid REFERENCES halls(hall_id)
    );

CREATE TABLE sessions(
    log_id uuid NOT NULL PRIMARY KEY,
    logged_in_y_n VARCHAR(10), 
    logged_in_time TIMESTAMP,
    logged_out_time TIMESTAMP,
    date_created TIMESTAMP DEFAULT NOW(),
    date_updated TIMESTAMP DEFAULT NOW(),
    user_id uuid REFERENCES users(user_id)
    );


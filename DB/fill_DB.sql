INSERT INTO halls (hall_id, name, address, capacity)
    VALUES 
    ('e150df09-aa40-4466-944b-56989539e29a', 'OŠ Ljudevita Modeca Križevci', 'Potočka ul. 27, Križevci', 10000);
    ('b2aa69a6-0d07-48b1-a7e8-5cb32a972bbc', 'OŠ Vladimir Nazor', 'Ul. bana Josipa Jelačića 23, Križevci', 1000),
    ('50e7f0c4-b4a5-4e50-a299-d977a4c8ab9d', 'Gimnazija I.Z.D.', 'Ul. Milislava Demerca 8, Križevci', 3000)

INSERT INTO reservations (reservation_status, reserved_from, reserved_until, hall_id)
    VALUES 
    (0, '2017-07-23 13:10:11', '2017-07-23 18:10:11', 'e150df09-aa40-4466-944b-56989539e29a'),
    (1, '2017-07-23 13:10:11', '2017-07-24 13:10:11', 'b2aa69a6-0d07-48b1-a7e8-5cb32a972bbc'),
    (2, '2017-08-23 13:10:11', '2017-08-23 13:10:11', '50e7f0c4-b4a5-4e50-a299-d977a4c8ab9d')

INSERT INTO users (user_id, user_type, username, email, first_name, last_name, pasword_hash)
    VALUES 
    ('8c0a39c2-4ea0-406b-89cf-5529f80fa2ca', 'user', 'leUsers', 'le@User', 'John', 'Wayne', 'ldskhfjklsktnm'),
    ('a6f8b331-7675-49cc-8a64-9cac7e18fbf4', 'user', 'Userski', 'User@ski', 'Simba', 'Lion', 'dhjtuo4z5983z9th'),
    ('a2272369-0a9c-42f2-825e-8f5c500373a2', 'admin', 'USSSR', 'U@SSSR', 'Vasilij', 'Trocki', 'jwef9304ut90wugj')

INSERT INTO sessions (log_id, logged_in_y_n, logged_in_time, logged_out_time, user_id)
    VALUES 
    ('92d1718d-86aa-41bf-8a7e-1800c714e335', 'n', '2017-07-23 13:10:11', '2017-07-23 18:10:11', '8c0a39c2-4ea0-406b-89cf-5529f80fa2ca'),
    ('4cf2bcd9-dd52-4edb-b32f-38cf4695720f', 'n', '2017-07-24 13:10:11', '2017-07-24 18:10:11', 'a6f8b331-7675-49cc-8a64-9cac7e18fbf4'),
    ('92622e22-ce6e-4514-86ab-c2dc793c5053', 'n', '2017-07-25 13:10:11', '2017-07-25 18:10:11', 'a2272369-0a9c-42f2-825e-8f5c500373a2')


INSERT INTO department (name)
VALUES 
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES 
    ('Lead Engineer', 140000, 1),
    ('Software Engineer', 120000, 1),
    ('Manager of Accounts', 45000, 2),
    ('Accountant', 120000, 2),
    ('Legal Team Lead', 230000, 3),
    ('Lawyer', 150000, 3),
    ('Sales Lead', 75000, 4),
    ('Salesperson', 50000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Mark', 'Spade', 1, null),
    ('Saul', 'Monet', 2, 1),
    ('Tiffany', 'Searcy', 2, 1),
    ('Daniel', 'Cho', 3, null),
    ('David', 'Stanotis', 4, 4),
    ('Robert', 'Finkle', 4, 4),
    ('Tamera', 'Washington', 5, null),
    ('Zoe', 'Kensington', 6, 7),
    ('Said', 'Halimi', 6, 7),
    ('Ava', 'Chmielewski', 7, null),
    ('Louie', 'Andrews', 8, 10),
    ('Noemi', 'Dale', 8, 10),
    ('Henry', 'Oyama', 8, 10),
    ('William', 'Howell', 8, 10);
    
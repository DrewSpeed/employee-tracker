
INSERT INTO department (department)
VALUES 
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES 
    ('Lead Engineer', 140000, 1),
    ('Software Engineer', 120000, 1),
    ('Manager of Accounts', 120000, 2),
    ('Accountant', 70000, 2),
    ('Legal Team Lead', 230000, 3),
    ('Lawyer', 150000, 3),
    ('Sales Lead', 75000, 4),
    ('Salesperson', 50000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Mark', 'Spade', 1, null),
    ('Daniel', 'Cho', 3, null),
    ('Tamera', 'Washington', 5, null),
    ('Ava', 'Chmielewski', 7, null);



INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Saul', 'Monet', 2, 1),
    ('Tiffany', 'Searcy', 2, 1),
    ('David', 'Stanotis', 4, 4),
    ('Robert', 'Finkle', 4, 4),
    ('Zoe', 'Kensington', 6, 7),
    ('Said', 'Halimi', 6, 7),
    ('Louie', 'Andrews', 8, 10),
    ('Noemi', 'Dale', 8, 10),
    ('Henry', 'Oyama', 8, 10),
    ('William', 'Howell', 8, 10);
    
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS employees;


CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    department VARCHAR(30) NOT NULL
);

CREATE TABLE roles ( 
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(8, 0),
    department_id INT,
    CONSTRAINT fk_deptid FOREIGN KEY (department_id) References departments(id) ON DELETE SET NULL
);







CREATE TABLE employees ( 
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT NULL
);
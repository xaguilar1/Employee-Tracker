USE employee_trackerDB;

INSERT INTO department (name)
VALUES 
("Sales"), 
("Engineering"), 
("Finance"), 
("Legal");

INSERT INTO role
(title, salary, department_id)

VALUES 
("Sales Lead", 100000, 1), 
('Salesperson', 80000, 1),
("Lead Engineer", 150000, 2), 
("Software Engineer", 120000, 2), 
('Account Manager', 160000, 3),
("Accountant", 125000, 3), 
("Legal Team Lead", 250000, 4);
('Lawyer', 190000, 4);

INSERT INTO employee 
(first_name, last_name, role_id, manager_id)

VALUES 
("Alec", "Simpson", 1, NULL), 
("Ashley", "Durr", 2, 1)
("Erin", "Hughes", 3, NULL), 
("Evan", "Johnson", 4, 3), 
("Paula", "Cortez", 5, NULL), 
("Ava", "Edwards", 6, 5), 
("Ariana", "Nelly", 7, NULL);
("Chelly", "Hernandez", 8, 7), 

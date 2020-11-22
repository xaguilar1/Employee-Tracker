const inquirer = require("inquirer");
const connection = require('./config/connection')
require("console.table");


  //prompting user 
function userInput() {
    inquirer.prompt({
        message: "What would you like to do first?",
        type: "list",
        choices: [
            "add department",
            "add employee",
            "add role",
            "update employee role",
            "view all departments",
            "view all employees",
            "view all roles",
            "QUIT"
        ],
        name: "choice"
    })
    .then(answers => {
        switch (answers.choice) {
            case "add department":
                addDepartment()
                break;

            case "add employee":
                addEmployee()
                break;

            case "add role":
                addRole()
                break;

            case "update employee role":
                updateEmployeeRole();
                break;

            case "view all roles":
                viewRoles()
                break;

            case "view all employees":
                viewEmployees()
                break;

            case "view all departments":
                viewDepartments()
                break;

            default:
                connection.end()
                break;
        }
    })
}

//create dpt

function addDepartment() {
    inquirer.prompt([{
        type: "input",
        name: "department",
        message: "What department would you like to add?"
    }, ])
    
    .then(function(res) {
        connection.query('INSERT INTO department (name) VALUES (?)', [res.department], function(err, data) {
            if (err) throw err;
            console.log(`Inserted ${res.department} into department database. \n`);
           userInput();
        })
    })
}

//adding employee to table

function addEmployee() {
    inquirer.prompt([{
            type: "input",
            name: "firstName",
            message: "Employees first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "Employees last name?"
        },
        {
            type: "number",
            name: "roleId",
            message: "Employees role ID"
        },
        {
            type: "number",
            name: "managerId",
            message: "Employees manager's ID?"
        }
    ]).then(function(res) {
        connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [res.firstName, res.lastName, res.roleId, res.managerId], function(err, data) {
            if (err) throw err;
            console.log(`Inserted ${res.firstName} into employee database. \n`);
            userInput();
        })
    })
}



// adding roles 

function addRole() {
    inquirer.prompt([
        {
            message: "Enter Title:",
            type: "input",
            name: "title"
        }, {
            message: "Enter Salary:",
            type: "number",
            name: "salary"
        }, {
            message: "Enter Department ID:",
            type: "number",
            name: "department_id"
        }
    ]).then(function (res) {
        connection.query("INSERT INTO role (title, salary, department_id) values (?, ?, ?)", [res.title, res.salary, res.department_id], function (err, data) {
            if (err) throw err;
            console.log(`Inserted ${res.title} into role database. \n`);
            userInput();
        })
    })

}


//updating roles of employees

function updateEmployeeRole() {
    inquirer.prompt([
        {
            message: "Employee to update? (enter employees id number)",
            type: "input",
            name: "id"
        }, {
            message: "enter the new role ID:",
            type: "number",
            name: "role_id"
        }
    ]).then(function (response) {
        connection.query("UPDATE employee SET role_id = ? WHERE id = ?", [response.role_id, response.id], function (err, data) {
            if (err) throw err;
            console.table(data);
            userInput();
        })
    })
}



//can view departments/employees/employee roles 

function viewDepartments() {
    connection.query("SELECT * FROM department", function (err, data) {
        if (err) throw err;
        console.log(`\n`);
        console.table(data);
        userInput();
    })
}

function viewEmployees() {
    connection.query("SELECT * FROM employee", function (err, data) {
        if (err) throw err;
        console.log(`\n`);
        console.table(data);
        userInput();
    })
}

function viewRoles() {
    connection.query("SELECT * FROM role", function (err, data) {
        if (err) throw err;
        console.log(`\n`);
        console.table(data);
        userInput();
    })
}
const inquirer = require('inquirer');


var optionPrompt = {
        type: "list",
        name: "main",
        message: "What would you like to do?",
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Update an Employee Role",
            "Exit"
        ],
    };

module.exports = { 
    optionPrompt
}
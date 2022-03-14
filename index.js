// Dependencies
const inquirer = require('inquirer');
const db = require('./config/connection');
const prompts = require('./config/prompts');
const {
    showDepartments,
    showRoles,
    showEmployees,
    addDepartment,
    insertDepartment,
    addRole,
    insertRole,
    addEmployee,
    insertEmployee,
    updateRole,
    changeEmployee
} = require('./config/query-handler');
const cTable = require('console.table');

const promptStart = () => { inquirer.prompt(prompts.optionPrompt)
    .then(input => {
        switch (input.main) {
            case "View All Departments":
                showDepartments()
                .then((departments) => {
                    console.table(departments);
                  })
                  .then(promptStart);
                break;
            case "View All Roles":
                showRoles()
                .then((roles) => {
                    console.table(roles);
                  })
                  .then(promptStart);
                break;
            case "View All Employees":
                showEmployees()
                .then((employees) => {
                    console.table(employees);
                  })
                  .then(promptStart);
                break;
            case "Add a Department":
            addDepartment().then((department) => {
                insertDepartment(department.adddept);
            }).then(promptStart);
            break;
            case "Add a Role":
                showDepartments()
                .then((departments) => {
                     addRole(departments)
                     .then((role) => {
                       insertRole(role).then(promptStart);
                     });
                   });
                  break;
            case "Add an Employee":
            showRoles().then((roles) => {
                showEmployees().then((employees) => {
                  addEmployee(roles, employees).then((employee) => {
                    insertEmployee(employee).then(promptStart);
                  });
                });
              });
              break;
            case "Update an Employee Role":
                showEmployees().then((employees) => {
                    showRoles().then((roles) => {
                      updateRole(employees, roles).then((newEmployeeRole) => {
                        changeEmployee(newEmployeeRole).then(promptStart);
                      });
                    });
                  });
                break;
                case "Exit":
                    console.log("Please press CTRL-C to Exit.");
                    break;
        }
    });
};
promptStart();
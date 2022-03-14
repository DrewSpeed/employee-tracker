const db = require("./connection");
const cTable = require('console.table');
const inquirer = require('inquirer');


showDepartments = async () => {
    let departments;
    await db
      .promise()
      .query(`SELECT * FROM department`)
      .then((result) => {
        departments = result[0];
      });
    return departments;
};

showRoles = async () => {
    let roles;
    await db
      .promise()
      .query(
        `SELECT role.*, department.department
        AS department_id
        FROM role
        LEFT JOIN department
        ON role.department_id = department.id
        ORDER BY title`
      )
      .then((result) => {
        roles = result[0];
      });
    return roles;
  };

const showEmployees = async () => {
    let employees;
    await db
      .promise()
      .query(
        `SELECT employee.*, role.title
        AS role_id
        FROM employee
        LEFT JOIN role
        ON employee.role_id = role.id
        ORDER BY last_name`
      )
      .then((result) => {
        employees = result[0];
      });
    return employees;
  };

  addDepartment = async () => {
      return inquirer.prompt([
          {
          type: "input",
          name: "adddept",
          message: "What is the name of the department?",
          validate: (adddept) => {
              if (adddept) {
                  return true;
              } else {
                  console.log("You must enter a department name.")
                  return false;
              }
            }
          }
      ])
  };

  const insertDepartment = async (newDepartment) => {
    await db
      .promise()
      .query(`INSERT INTO department (department) VALUES (?)`, newDepartment)
      .then(console.log(`New department, ${newDepartment}, added. \n`));
  };

  const addRole = async (departments) => {
    departments = departments.map((x) => x.name);
    return inquirer.prompt([
      {
        type: "input",
        name: "role",
        message: "What is the name of the role?",
        validate: (role) => {
          if (role) {
            return true;
          } else {
            console.log("\n You must enter a role name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "salary",
        message: "What is this role's salary?",
        validate: (salary) => {
          if (isNaN(salary) === false) {
            return true;
          } else {
            console.log("\n Response must be a number. Please re-enter.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "newDept",
        message: "What department does this role fall under?",
      },
    ]);
  };


const insertRole = async ({ role, salary, whichDepartment }) => {
    await db
      .promise()
      .query(
        `INSERT INTO role (title, salary, department_id)
        SELECT '${role}', ${salary}, id
        FROM department
        WHERE department = '${whichDepartment}'`
      )
      .then(console.log(`Added new role, ${role}. \n`));
  };

  const addEmployee = async (roles, employees) => {
    employees = employees.map((x) => `${x.first_name} ${x.last_name}`);
    employees.push("None");
    roles = roles.map((x) => x.title);
  
    return inquirer.prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the employee's first name?",
        validate: (firstName) => {
          if (firstName) {
            return true;
          } else {
            console.log("You must enter a first name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the employee's last name?",
        validate: (lastName) => {
          if (lastName) {
            return true;
          } else {
            console.log("You must enter a last name.");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "whichRole",
        message: "What is their role?",
        choices: roles,
      },
      {
        type: "list",
        name: "manager",
        message: "Who is their manager?",
        choices: employees,
      },
    ]);
  };

  const insertEmployee = async (employee) => {
    console.log(employee);
    await db
      .promise()
      .query(
        `SELECT id FROM role
        WHERE title = '${employee.whichRole}'`
      )
      .then((roleId) => {
        db.promise()
          .query(
            `SELECT id FROM employee
            WHERE first_name = '${employee.manager.split(" ")[0]}'`
          )
          .then((managerId) => {
            db.promise()
              .query(
                `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${employee.firstName}','${employee.lastName}',${roleId[0][0].id},${managerId[0][0].id})`
              )
              .then(
                console.log(
                  `Added employee ${employee.firstName} ${employee.lastName}. \n`
                )
              );
          });
      });
  };

  const updateRole = async (employees, roles) => {
    employees = employees.map((x) => `${x.first_name} ${x.last_name}`);
    roles = roles.map((x) => x.title);
    return inquirer.prompt([
      {
        type: "list",
        name: "whichEmployee",
        message: "Which employee would you like to update?",
        choices: employees,
      },
      {
        type: "list",
        name: "whichRole",
        message: "Which new role will they have?",
        choices: roles,
      },
    ]);
  };

  const changeEmployee = async ({ whichEmployee, whichRole }) => {
    whichEmployee = whichEmployee.split(" ");
    const first = whichEmployee[0];
    const last = whichEmployee[1];
  
    await db
      .promise()
      .query(
        `SELECT id FROM role
        WHERE title = '${whichRole}'`
      )
      .then((roleId) => {
        db.promise()
          .query(
            `UPDATE employee SET role_id = '${roleId[0][0].id}'
        WHERE first_name = '${first}'`
          )
          .then(
            console.log(`Changed ${first} ${last}'s job role to ${whichRole}`)
          );
      });
  };
  


  
  

module.exports = {
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
}
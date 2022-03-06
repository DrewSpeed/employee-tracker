// Dependencies
const inquirer = require('inquirer');
const db = require('./config/connection');
const prompts = require('./config/prompts');
const switchHandler = require('./config/switch-handler');

// db.query(`source db/db.sql`);
// db.query(`source db/schema.sql`);
// db.query(`source db/seeds.sql`);
// 
inquirer.prompt(prompts.optionPrompt)
    .then(input => {
        switch (input.main) {
            case "View All Departments":
                viewDepartments();
                break;
            "View All Roles",
            "View All Employees",
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Update an Employee Role"
        }
});


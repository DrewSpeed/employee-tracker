const inquirer = require('inquirer');
const connection = require('./db/connection');
const prompts = require('./db/prompts');


inquirer.prompt(prompts.optionPrompt);
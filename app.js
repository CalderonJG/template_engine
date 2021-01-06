const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employees = [];


const createProfile = () => {
    inquirer.
        prompt([
            {
                type: 'input',
                message: 'Please enter your name',
                name: 'name',
            },

            {
                type: 'number',
                message: 'Please enter your ID number',
                name: 'id',
            },

            {
                type: 'input',
                message: 'Please enter your email',
                name: 'email',
            },

            {
                type: 'number',
                message: 'Please enter your office number',
                name: 'officeNumber',
            },

            {
                type: 'list',
                message: 'Please select your role',
                choices: ['manager', 'engineer', 'employee', 'intern'],
                name: 'role',
            },
        ])

            switch (role) {
                case 'manager':
                    const officeNumber = inquirer.prompt([
                        {
                        type: 'input',
                        name: 'officeNumber',
                        message: "What is the manager's office number?",
                        }
                    ]);
                    break;

                case 'engineer':
                    const github = inquirer.prompt([
                        {
                        type: 'input',
                        name: 'github',
                        message: "Please enter the engineer's Github username",
                        }
                    ]);
                    break;

                case 'intern':
                    const school = inquirer.prompt([
                        {
                        type: 'input',
                        name: 'school',
                        message: 'What school does the intern attend?',
                        }
                    ]);
                    break;
                }
            },

            
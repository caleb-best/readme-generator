// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email', 
    },
    {
        type: 'input',
        message: 'What is your projects name?',
        name: 'projectid',
    },
    {
        type: 'input',
        message: 'Please provide a short description of your project...',
        name: 'decription',
    },
    {
        type: 'list',
        message: 'What kind of license does your project need?',
        options: ['MIT','APACHE 2.0','GPL 3.0', 'BSD 3', 'Other'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Please name your collaborators...',
        name: 'collaborators',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

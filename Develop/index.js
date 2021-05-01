// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const path = require('path')
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
        message: 'What is the name of your project?',
        name: 'projectid',
    },
    {
        type: 'input',
        message: 'Please provide a short description of your project...',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What technologies were used on this project?',
        name: 'technologies',
    },
    {
        type: 'input',
        message: 'How do you run the application?',
        name: 'runApp',
    },
    {
        type: 'rawlist',
        message: 'What kind of license does your project need?',
        choices: ['MIT','APACHE 2.0','GPL 3.0', 'BSD 3', 'Other'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Please name your collaborators...',
        name: 'collaborators',
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    
    .then((data) => {
        console.log('Generating Markdown...')
        writeToFile('README.md', generateMarkdown({...data}))

    })
    .catch((err) => console.error(err))
    
}

// Function call to initialize app
init();

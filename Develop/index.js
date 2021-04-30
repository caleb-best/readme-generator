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
        message: 'What is the name of your project?',
        name: 'projectid',
    },
    {
        type: 'input',
        message: 'Please provide a short description of your project...',
        name: 'decription',
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
        type: 'choices',
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
function writeToFile(fileName, data) {

    const readMeTemp = `
    # ${data.projectid} #
    
    # Table of contents #
    * [Introduction](#Introduction)
    * [Technologies](#Technologies)
    * [Deploy](#Deploy Application)
    * [Collaborators](#Collaborators)
    * [Contact](#Contact)
    
    ## Introduction ##
    ${data.descpription}

    ## Technologies ##
    ${data.technologies}

    ## Deploy Application ##
    ${data.runApp}

    ## Collaborators ##
    ${data.collaborators}

    ## Contact ##
    ${data.username}
    ${data.email}

    `
    const path = './generated/' + fileName;

    fs.writeFile(path, readMeTemp, (err) => 
    err ? console.error(err) : console.log('Generating Readme...'))

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    
    .then((response) => {
        const filename = `${response.projectid}.md`
        writeToFile(filename, response)
    })

    .catch((err) => console.error(err))
    
}

// Function call to initialize app
init();

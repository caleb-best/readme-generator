// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    if (data.license === 'MIT'){
        data.license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    }
    else if (data.license === 'APACHE 2.0') {
        data.license = '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }
    else if (data.license === 'GPL 3.0') {
        data.license = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    }
    else if (data.license === 'BSD 3') {
        data.license = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    }

    else {
        data.license = ""
    }


return `# ${data.projectid}#
## Table of contents #
* [Introduction](#Introduction)
* [Technologies](#Technologies)
* [Deploy](#Deploy_Application)
* [Collaborators](#Collaborators)
* [Contact](#Contact)
    
## Introduction ##
${data.description}

## Technologies ##
${data.technologies}

## Deploy Application ##
${data.runApp}

## Collaborators ##
${data.collaborators}

## Contact ##
${data.username}

${data.email}

${data.license}
`
}

module.exports = generateMarkdown;

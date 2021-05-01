// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    //if statement checks which license was selected and gets the proper badge for it, empty string if none
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

//returns the markdown file with the updated values
return `# ${data.projectid}#
## Table of contents ##
* [Introduction](#Introduction)
* [Technologies](#Technologies)
* [Deploy](#Deploy_Application)
* [Collaborators](#Collaborators)
* [Contact](#Contact)
* [License](#License)
    
## Introduction ##
${data.description}

## Technologies ##
${data.technologies}

## Deploy Application ##
${data.runApp}

## Collaborators ##
Collaborators on this project include:
${data.collaborators}

## Contact ##
For further information or if you wish to speak to me please contact me here:
GitHub: ${data.username}
Email: ${data.email}

## License ##
${data.license}
`
}
//exports generate Markdown
module.exports = generateMarkdown;

const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
    {
        type: "input",
        name: "title",
        message: "Write a title for your README.md file:",
    },
    {
        type: "input",
        name: "description",
        message: "Write a description of your application:",
    },
    {
        type: "input",
        name: "install",
        message: "How do you install your application?",
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use your application?",
    },
    {
        type: "list",
        name: "license",
        message: "What license will you be using?",
        choices: ["Apache License 2.0","GNU General Public License v3.0", "MIT License", "Boost Software License 1.0"]
    },
    {
        type: "input",
        name: "test",
        message: "Enter test instructions for your user:",
    },
    {
        type: "input",
        name: "github",
        message: "Please provide your GitHub link:",
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your email:",
    }
])
.then((data) => {
    const markdownContent = `
${generateLicense(data.license)}

# ${data.title}

## Description
${data.description}

## Table of Contents

* [Description](#description)
* [Installation](#install)
* [Usage](#usage)
* [License](*license)
* [Test](#test)
* [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## Test Instructions
${data.test}

## Questions
Feel free to contact me below:

- [Github](https://github.com/${data.github})

- [Email Address](mailto:${data.email})
`;
    fs.writeFile(`README.md`, markdownContent, (err) =>
        err ? console.error(err) : console.log('README.md file created!'));
});
function generateLicense(license){
    if (license === "Apache License 2.0"){
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }else if (license === "GNU General Public License v3.0"){
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    }else if (license === "MIT License"){
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }else if (license === "Boost Software License 1.0"){
        return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    }
}




//[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
//[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
//[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
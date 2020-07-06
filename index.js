// Todo: ask user questions specific to what they want in the readme
// Todo: parse results to markdown
// Todo: save this markdown to a readme.md file

const inquirer = require("inquirer");
// const Choice = require("inquirer/lib/objects/choice");
const fs = require("fs");
const util = require("util")

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function promptUser() {
    return inquirer.prompt([ 
    {
        type: "input",
        name: "title",
        message: "What is title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Explain the what, why, and how. What was your motivation? Why did you build this project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use. Include screenshots as needed."
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license that lets other developers know what they can and cannot do with your project.",
        choices: [
            "a [MIT License](https://opensource.org/licenses/MIT).",
            "a [GPL v3 License](https://www.gnu.org/licenses/gpl-3.0).",
            "an [AGPL v3 License](https://www.gnu.org/licenses/agpl-3.0).",
            "an [LGPL v3 License](https://www.gnu.org/licenses/lgpl-3.0).",
            "a [MPL 2.0 License](https://opensource.org/licenses/MPL-2.0).",
            "an [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0).",
            "a [Boost Software License](https://www.boost.org/LICENSE_1_0.txt).",
        ]
    },
    {
        type: "list",
        name: "licenseBadge",
        message: "Choose a badge that corresponds to the type of license you chose in the previous question.",
        choices: [
            "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
            "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
            "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
            "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
            "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
            "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
            "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "If you created an application or package and would like other developers to contribute to it, add guidelines here for how to do so."
    },
    {
        type: "input",
        name: "tests",
        message: "Write tests for your application. Then provide examples on how to run them."
    },
    {
        type: "input",
        name: "githubUsername",
        message: "What is you Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address, so that people can reach you?"
    },
    ]);
}

// function to write README file
function writeToFile(data) {
    return `
# ${data.title}

${data.licenseBadge}

## Description 

${data.description}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contribution)
* [Tests](#tests)
* [Questions](#questions)



## Installation

${data.installation}


## Usage 

${data.usage} 


## License

${data.license}


## Contributing

${data.contributing}


## Tests

${data.tests}


## Questions

Got questions? Feel free to contact me.  
Github username: [${data.githubUsername}](github.com/${data.githubUsername})  
Email address: ${data.email}

---

© 2020, Dominic Parker. All Rights Reserved.

`;
}

// function to initialize program
promptUser() 
    .then(function(data) {
        const readme = writeToFile(data);
        return fs.writeFileSync("README.md", readme);
    })
    .then(function() {
        console.log("successfully wrote to readme.md")
    }) .catch(function(err) {
        console.log(err)
    });

// function call to initialize program
// init();

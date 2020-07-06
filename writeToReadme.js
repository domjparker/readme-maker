// function to write README file with data compiled from inquirer.prompt(questions)
function writeToReadme(data) {
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
Github username: [${data.githubUsername}](https://github.com/${data.githubUsername})  
Email address: ${data.email}

---

© 2020, Dominic Parker. All Rights Reserved.

`;
}

module.exports = writeToReadme;
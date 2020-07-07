// function to write README file with data compiled from inquirer.prompt(questions)
function writeToReadme(data) {
    return `
# ${data.title}

## ${data.descriptionShort}  

${data.licenseBadge}  



## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contribution)
* [Tests](#tests)
* [Questions](#questions)



## Description 

${data.descriptionExtended}  

${data.images}



## Installation

${data.installation}



## Usage 

${data.usage} 



## License

This application is covered under ${data.license}



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
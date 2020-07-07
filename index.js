// * global variables
// inquirer package is required to prompt the user with questions.
const inquirer = require("inquirer");
// file system is required for the application to read/create files.
const fs = require("fs");
// util is required to promisify the writeFile function.
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
// questions file is required because it has the array of question objects that will be prompted to the user.
const questions = require("./questions.js").questions;
// writeToReadme file is required because it contains the markdown template that will be used to structure the created readme file.
const writeToReadme = require("./writeToReadme.js");

// * initiation function
async function init() {
    // after awaiting user being prompted with questions, constant variable 'data' is assigned values from question responses.
    const data = await inquirer.prompt(questions)
    // readme.md markdown template function is populated with data from question responses.
    const readme = writeToReadme(data);
    // new readme.md file is created using populated markdown template.
    await writeFileAsync("README.md", readme);
    // success message is logged to the console to show process is complete.
    console.log("successfully wrote to readme.md")    
}

// * calling of initiation function
init();
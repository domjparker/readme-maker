// Todo: ask user questions specific to what they want in the readme
// Todo: parse results to markdown
// Todo: save this markdown to a readme.md file

const inquirer = require("inquirer");
// const Choice = require("inquirer/lib/objects/choice");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const questions = require("./questions.js").questions;
const writeToReadme = require("./writeToReadme.js");

// initiation function
async function init() {
    // after awaiting user being prompted with questions, constant variable 'data' is assigned values from question responses.
    const data = await inquirer.prompt(questions)
    // 
    const readme = writeToReadme(data);
    await writeFileAsync("README.md", readme);
    console.log("successfully wrote to readme.md")    
}

// calling of initiation function
init();

// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = require("./utils/questions");

// TODO: Create a function to write README file
function writeToFile(markdown) {
  fs.writerFile("readme.md", markdown, (err) =>
    err ? console.log(err) : console.log("Successfully created index.html")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);

    writeToFile(markdown);
  });
}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions");

// function to write the completed README file
function writeToFile(markdown) {
  fs.writerFile("readme.md", markdown, (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
}

// Initialize and run app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);

    writeToFile(markdown);
  });
}

// To Kick off the application
init();

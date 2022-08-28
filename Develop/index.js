const inquirer = require("inquirer");
const fs = require("fs");
const generateReadMe = ({
  title,
  description,
  TOC,
  installation,
  usage,
  license,
  tests,
  contributors,
  github,
}) =>
  `This is an auto generated readme file. My name is ${name}. I speak ${languages}. I prefer to be contaced in ${preferred} language`;
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "title",
    },
    {
      type: "input",
      message: "Description of project: ",
      name: "description",
    },
    {
      type: "input",
      message: "Table of Contents: ",
      name: "TOC",
    },
    {
      type: "input",
      message: "Describe installation instructions: ",
      name: "installation",
    },
    {
      type: "input",
      message: "Describe usage information: ",
      name: "usage",
    },
    {
      type: "input",
      message: "What license is used?",
      name: "license",
    },
    {
      type: "input",
      message: "List Contributors: ",
      name: "contributors",
    },
    {
      type: "input",
      message: "Test instructions: ",
      name: "tests",
    },

    {
      type: "input",
      message: "What is your github username?",
      name: "github",
    },
  ])

  .then((answers) => {
    console.log(answers);
    const readMePageContent = generateReadMe(answers);

    fs.writeFile("README1.md", readMePageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created readme1.md!")
    );
  });

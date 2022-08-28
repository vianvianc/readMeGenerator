const inquirer = require("inquirer");
const fs = require("fs");
const generateReadMe = ({
  title,
  description,
  table,
  installation,
  usage,
  license,
  tests,
  contributors,
  github,
  email,
}) =>
  `This is an auto generated readme file.\n
   Title of this project: ${title}. \n
   License: ${license}\n
   ###Table of Contents:\n
   ** 1. [Description](#description)**\n
   ** 2. [Usage](#usage)**\n
   ** 3. [Installation Instructions](#insallation)**\n
   ** 4. [Test Instructions](#instructions)**\n
   ** 5. [Contributors](#contributors)**\n
   ** 6. [Questions](#questions)**\n

   ## Description
    ${description} \n

    ## Usage 
    ${usage}\n
  
   ## Intallation 
    ${installation}\n

  ## Instructions
   ${tests}\n

  ## Contributors
   ${contributors}\n

   ## Questions 
   GitHub: \n
   https://github.com/${github}\n
   Email me at: \n
   ${email}




   `;
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
      message: "Describe installation instructions: ",
      name: "installation",
    },
    {
      type: "input",
      message: "Describe usage information: ",
      name: "usage",
    },
    {
      type: "list",
      message: "What license is used?",
      choices: ["Apache", "GNU", "MIT"],
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
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
  ])

  .then((answers) => {
    console.log(answers);
    const readMePageContent = generateReadMe(answers);

    fs.writeFile("README1.md", readMePageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created readme1.md!")
    );
  });

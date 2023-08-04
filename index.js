// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');
const generateMarkdown = require("./utils/generatemarkdown");
// TODO: Create an array of questions for user input

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information'
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Provide contribution guidlines'
  },
  {
    type: 'input',
    name: 'testings',
    message: 'Enter testing instructions'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select a license for this project',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None']
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your username'
  },
  {
    type: 'input',
    name: 'email',
    message: 'enter your e-mail address'
  }
]

function writeToFile(filePath, data) {
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Congrats! your README.md has been created')
    }
  })
};

function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    const readmeContent = generateMarkdown(answers);
    const readmeFile = path.resolve(__dirname, 'test-files', 'README.md')
    writeToFile( readmeFile, readmeContent)
  })
}

init();
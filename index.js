const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');
// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your Gitub username?',
  },
  {
    type: 'email', 
    name: 'email',
    message: 'What is your Email address?',
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is your project\'s name?',
  },
  {
    type: 'textarea',
    name: 'description',
    message: 'Please write a short description for your project.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of License your project have',
    default:'None',
    choices:['None', 'MIT', 'GPLv3', 'GPL','CC-0'],
    message: 'Pick your License.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should be run to run test?',
  },
  {
    type: 'textarea',
    name: 'usage',
    message: 'What does user need to know about using the repo?',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What does the user need to know about contributing to the repo',
  },
  
];

const promptUser = () => {
  return inquirer.prompt(questions);
};

const generateREADME = (answers) =>
  `# ${answers.title}
  ${answers.license}

  ## Description
  ${answers.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}
  
  ## License
  ${answers.licence}
  
  ## Contributing
  ${answers.contribution}

  ## Tests
  ${answers.test}

  ## Questions
  Github link :[${answers.github}](https://github.com/${answers.github})

  Reach me with additional questions at: ${answers.email}
 `

const init = () => {
  promptUser()
    .then((answers) =>{
      const license = answers.license;
      answers.license = generateMarkdown(license);
      writeFileAsync('genREADME.md', generateREADME(answers))
    })
    .then(() => console.log('Successfully wrote to genREADME.md'))
    .catch((err) => console.error(err));
};

init();

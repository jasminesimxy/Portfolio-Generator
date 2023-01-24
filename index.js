const inquirer = require('inquirer');

function getData() {

inquirer
  .prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your user name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you located?',
      
    },
    {
        type: 'input',
        name: 'bio',
        message: 'What are your favourite cuisines?',
        
      },
    {
      type: 'input',
      name: 'linkedin url',
      message: 'What is your LinkedIn URL ?',
      
    },
    {
        type: 'input',
        name: 'github url',
        message: 'What is your GitHub URL?',
        
      }

    
    ])
}
getData();
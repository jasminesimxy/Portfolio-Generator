const fs = require('fs');

function createHTMLFile() {
    const filename = "index.html";
    var htmlData = "<!Doctype HTML> \n <html> \n <head> \n <title> Portfolio </title> \n </head> \n <body> \n </body> \n </html>";
    fs.writeFile(filename, htmlData, (err) =>
       err ? console.log(err) : console.log('Success!')
    );

}
createHTMLFile();
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

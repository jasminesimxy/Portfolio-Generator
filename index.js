const fs = require('fs');

function createHTMLFile() {
    const filename = "index.html";
    var htmlData = "<!Doctype HTML> \n <html> \n <head> \n <title> Portfolio </title> \n </head> \n <body> \n </body> \n </html>";
    fs.writeFile(filename, htmlData, (err) =>
       err ? console.log(err) : console.log('Success!')
    );

}
createHTMLFile();
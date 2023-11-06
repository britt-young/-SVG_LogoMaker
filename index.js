//pull in necessary packages
const inquirer = require('inquirer');
const fs = require('fs');
//set variables for shapes
const {Circle, Square, Triangle} = require("./lib/shapes")

//use inquirer package to prompt user with logo criteria
function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Please provide three characters for the logo text:',
      validate: function (input) {
        return input.length <= 3 ? true : 'Please enter up to three characters.';
      }
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Provide a text color (keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Provide a shape color (keyword or hexadecimal number):',
    },
  ]);
}

//create variable from user answers
//initialize logo variable
function generateLogo() {
    promptUser().then(answers => {
      const { text, textColor, shape, shapeColor } = answers;
      let logo;
  
      //switch statement to set logo shape
      switch (shape) {
        case 'circle':
          logo = new Circle();
          break;
        case 'triangle':
          logo = new Triangle();
          break;
        case 'square':
          logo = new Square();
          break;
        default:
          console.log('Invalid shape selection.');
          return;
      }

      //set logo criteria
      logo.setColor(shapeColor);
      logo.setTextColor(textColor);
      logo.setText(text);

      //save new logo and render in specified file folder
      const svg = logo.render();
      const logoPath = './';

      //write logo to file using fs
      fs.writeFile(logoPath, svg, err => {
        if (err) {
          console.error('An error occurred while generating the logo:', err);
        } else {
          console.log('Generated logo.svg');
        }
      });
    });
  }
  
  //call generateLogo function
  generateLogo();
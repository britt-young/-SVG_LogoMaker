const inquirer = require('inquirer');
const fs = require('fs');
const circle = require('./');
const triangle = require('./');
const square = require('./');

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

function generateLogo() {
    promptUser().then(answers => {
      const { text, textColor, shape, shapeColor } = answers;
      let logo;
  
      switch (shape) {
        case 'circle':
          logo = new circle();
          break;
        case 'triangle':
          logo = new triangle();
          break;
        case 'square':
          logo = new square();
          break;
        default:
          console.log('Invalid shape selection.');
          return;
      }

      logo.setColor(shapeColor);
      logo.setTextColor(textColor);
      logo.setText(text);
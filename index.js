// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const {Triangle, Circle, Square} = require('./lib/shapes.js');

// Array of questions for user
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters',
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'Choose your text color: Enter a color keyword or hexadecimal number',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose your shape.',
        choices: [
            'Triangle',
            'Circle',
            'Square'
        ]
    },
    {
        type: 'input',
        name: 'shape-color',
        message: 'Choose your shape color: Enter a color keyword or hexadecimal number',
    }
]

// Write data to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
            console.log('Success! Your svg logo has been generated!')
    });
}

// Initializes app
function init() {

}

// Function call to initialize app
init();
// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Array of questions for user
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Text Color: Enter a color keyword or hexadecimal number',
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
        name: 'shapeColor',
        message: 'Shape Color: Enter a color keyword or hexadecimal number',
    }
]

class svgFile {
    constructor() {
        this.textElement = ``;
        this.shapeElement = ``;
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()
    }
    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
}

// Write data to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log('Generated logo.svg')
    });
}

// Initializes app
function init() {
    let svgText = '';
    let svgLogo = "logo.svg";

    // Prompts questions to user
    inquirer.prompt(questions)
        .then(answers => {
            let userText = answers.text;
            let userTextColor = answers.textColor;
            let userShape = answers.shape;
            let userShapeColor = answers.shapeColor;

            let shapeChoice;
            if (userShape === `Circle`) {
                shapeChoice = new Circle();
            }
            else if (userShape === `Triangle`) {
                shapeChoice = new Triangle();
            }
            else {
                shapeChoice = new Square();
            }
            shapeChoice.setColor(userShapeColor);

            // Create a new SVG instance and add elements
            let logo = new svgFile();
            logo.setTextElement(userText, userTextColor);
            logo.setShapeElement(shapeChoice);
            svgText = logo.render();

            writeToFile(svgLogo, svgText);
        });
}

// Function call to initialize app
init();
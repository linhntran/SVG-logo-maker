// Tests for a render() method that returns a string for the corresponding SVG file with the given shape color.
const { Circle, Triangle, Square } = require("./lib/shapes.js")

// Circle
describe('Circle', () => {
    test('shape renders correctly', () => {
        const shape = new Circle();
        shape.setColor('red');
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="red" />`);
    });
});

// Triangle
describe('Triangle', () => {
    test('shape renders correctly', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="blue" />`);
    });
});

// Square
describe('Square', () => {
    test('shape renders correctly', () => {
        const shape = new Square();
        shape.setColor('yellow');
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="yellow" />`);
    });
});
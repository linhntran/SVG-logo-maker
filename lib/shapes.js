// Exports `Triangle`, `Circle`, and `Square` classes
class Shape {
    // Sets color value
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = (color);
    }
}

// Triangle class that extends Shape and returns a triangle with size and color
class Triangle extends Shape {

}

// Circle class that extends Shape and returns a circle with size and color
class Circle extends Shape {

}

// Square class that extends Shape and returns a square with size and color
class Square extends Shape {

}

module.exports = { Triangle, Circle, Square };
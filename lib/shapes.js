// Exports `Circle`, `Triangle`, and `Square` classes
class Shape {
    // Sets color value
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = (color);
    }
}

// Circle class that extends Shape and returns a circle with size and color
class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}" />`
    }
}

// Triangle class that extends Shape and returns a triangle with size and color
class Triangle extends Shape {
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}" />`
    }
}

// Square class that extends Shape and returns a square with size and color
class Square extends Shape {
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.color}" />`
    }
}

module.exports = {Triangle, Circle, Square};
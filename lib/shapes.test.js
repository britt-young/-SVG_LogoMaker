const {Circle, Square, Triangle} = require("./shapes")

//Jest Test-Circle
describe("Circle", () => {
    test("renders correctly", () => {
        const shape = new Circle();
        var color = ("blue")
        shape.setColor(color);
        expect(shape.render()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>')
    });
});

//Jest Test-Square
describe("Square", () => {
    test("renders correctly", () => {
        const shape = new Square();
        var color = ("red")
        shape.setColor(color);
        expect(shape.render()).toEqual('<rect cx="50%" height="200" width="200" fill="${this.color}"/>')
    });
});

//Jest Test-Triangle
describe("Triangle", () => {
    test("renders correctly", () => {
        const shape = new Triangle();
        var color = ("gray")
        shape.setColor(color);
        expect(shape.render()).toEqual('<polygon height="100%" width="100%" points="150, 18 244, 182 56, 182" fill="${this.color}"/>')
    });
});
const {Circle, Square, Triangle} = require("./shapes")

//Jest Test-Circle: PASSES
describe("Circle", () => {
    test("renders correctly", () => {
        const circle = new Circle();

        const expectedSvg = `
      <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="${circle.radius}" fill="${circle.color}" />
        ${circle.text ? `<text x="150" y="110" text-anchor="middle" fill="${circle.textColor}" font-size="40" alignment-baseline="middle">${circle.text}</text>` : ''}
      </svg>`;

    expect(circle.render()).toEqual(expectedSvg);
    });
});

//Jest Test-Square
describe("Square", () => {
    test("renders correctly", () => {
      const square = new Square();
  
      const expectedSvg = `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: auto;">
        <rect x="50" y="50" width="200" height="100" fill="${square.color}" />
        ${square.text ? `<text x="150" y="105" text-anchor="middle" fill="${square.textColor}" font-size="40" alignment-baseline="middle">${square.text}</text>` : ''}
      </svg>`;
  
      expect(square.render()).toEqual(expectedSvg);
    });
  });


//Jest Test-Triangle
describe("Triangle", () => {
    test("renders correctly", () => {
        const triangle = new Triangle();
  
        const expectedSvg = ` <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 20 280, 180 20, 180" fill="${triangle.color}" />
        ${triangle.text ? `<text x="150" y="125" text-anchor="middle" fill="${triangle.textColor}" font-size="40" alignment-baseline="middle">${triangle.text}</text>` : ''}
      </svg>`;

        expect(triangle.render()).toEqual(expectedSvg);
    });
});
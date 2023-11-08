class Shape {
  constructor() {
    this.color = "";
    this.color = "";
    this.text = "";
    
  }
  setColor(color) {
    this.color = color;
  }
  setTextColor(textColor) {
    this.textColor = textColor;
  }
  setText(text) {
    this.text = text;
  }
}

class Circle extends Shape {
  super(); // Call the constructor of the base class
  constructor() {
    this.radius = 50;
  }
  render() {
    return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: auto;">
      <circle cx="100" cy="100" r="${this.radius}" fill="${this.color}" />
      ${
        this.text
          ? `<text x="100" y="105" text-anchor="middle" fill="${this.textColor}" font-size="20" alignment-baseline="middle">${this.text}</text>`
          : ""
      }
    </svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: auto;">
      <rect x="50" y="50" width="200" height="100" fill="${this.color}" />
      ${
        this.text
          ? `<text x="150" y="105" text-anchor="middle" fill="${this.textColor}" font-size="40" alignment-baseline="middle">${this.text}</text>`
          : ""
      }
    </svg>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150,20 280,180 20,180" fill="${this.color}" />
      ${
        this.text
          ? `<text x="150" y="125" text-anchor="middle" fill="${this.textColor}" font-size="40" alignment-baseline="middle">${this.text}</text>`
          : ""
      }
    </svg>`;
  }
}

module.exports = { Circle, Square, Triangle };

class Shape {
  constructor() {
    this.color = "";
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
  constructor() {
    super();
    this.radius = 50;
  }

  render() {
    const textElement = this.text ? `<text x="150" y="105" text-anchor="middle" fill="${this.textColor}" font-size="40" alignment-baseline="middle">${this.text}</text>` : '';

    return `
      <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />
        ${textElement}
      </svg>
    `;
  }
}

class Square extends Shape {
  render() {
    const textElement = this.text
      ? `<text x="150" y="105" text-anchor="middle" fill="${this.textColor}" font-size="40" alignment-baseline="middle">${this.text}</text>`
      : '';

    return `
      <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: auto;">
        <rect x="50" y="50" width="200" height="100" fill="${this.color}" />
        ${textElement}
      </svg>
    `;
  }
}

class Triangle extends Shape {
  render() {
    const textElement = this.text ? `<text x="150" y="125" text-anchor="middle" fill="${this.textColor}" font-size="40" alignment-baseline="middle">${this.text}</text>` : '';

    return `
      <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 20 280, 180 20, 180" fill="${this.color}" />
        ${textElement}
      </svg>
    `;
    }
  }

module.exports = {Circle, Square, Triangle};
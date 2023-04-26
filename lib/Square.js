const Shape = require('./Shape');

class Square extends Shape {
  constructor(color, sideLength) {
    super('square', color);
    this.sideLength = sideLength;
  }

  render() {
    const { color, sideLength } = this;
    return `<rect width="${sideLength}" height="${sideLength}" fill="${color}" />`;
  }

  setSideLength(sideLength) {
    this.sideLength = sideLength;
  }

  getSideLength() {
    return this.sideLength;
  }
}

module.exports = Square;

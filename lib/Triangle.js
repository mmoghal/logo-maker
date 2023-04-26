const Shape = require('./Shape');

class Triangle extends Shape {
  constructor(color, height) {
    super('triangle', color);
    this.height = height;
  }

  render() {
    const { color, height } = this;
    const width = height * Math.sqrt(3) / 2; // Calculate width of equilateral triangle
    const halfHeight = height / 2;
    return `<polygon points="${width / 2}, ${halfHeight} ${0}, ${height} ${width}, ${height}" fill="${color}" />`;
  }

  setHeight(height) {
    this.height = height;
  }

  getHeight() {
    return this.height;
  }
}

module.exports = Triangle;

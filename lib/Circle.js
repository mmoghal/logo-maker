const Shape = require('./Shape');

class Circle extends Shape {
  constructor(color, radius) {
    super('circle', color);
    this.radius = radius;
  }

  render() {
    const { color, radius } = this;
    return `<circle cx="50%" cy="50%" r="${radius}" fill="${color}" />`;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getRadius() {
    return this.radius;
  }
}

module.exports = Circle;

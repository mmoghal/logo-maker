class Shape {
    constructor(shapeType, color) {
      this.shapeType = shapeType;
      this.color = color;
    }
  
    render() {
      // This method will be overridden in the child classes
    }
  
    setColor(color) {
      this.color = color;
    }
  
    getColor() {
      return this.color;
    }
  
    getShapeType() {
      return this.shapeType;
    }
  }
  
  module.exports = Shape;
  
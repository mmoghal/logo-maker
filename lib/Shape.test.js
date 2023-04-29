const { Circle, Square, Triangle } = require("./Shape.js");

describe("Triangle test", () => {
    test("Unit test to verify rendering of a Triangle with a background color of blue", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });

  describe("Square test", () => {
    test("Unit test to verify rendering of a Square with a background color of purple.", () => {
      const shape = new Square();
      shape.setColor("purple");
      expect(shape.render()).toEqual(
        '<rect x="73" y="40" width="160" height="160" fill="purple" />'
      );
    });
  });

  describe("Circle test", () => {
    test("Unit test to verify rendering of a Circle with a background color of Green", () => {
      const shape = new Circle();
      shape.setColor("green");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="115" r="80" fill="green" />'
      );
    });
  });
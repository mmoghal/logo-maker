const Triangle = require('../lib/Triangle');

describe('Triangle', () => {
  describe('constructor', () => {
    test('creates a triangle with the specified color and height', () => {
      const t = new Triangle('#FF0000', 50);
      expect(t.color).toBe('#FF0000');
      expect(t.height).toBe(50);
    });
  });

  describe('area', () => {
    test('returns the area of the triangle', () => {
      const t = new Triangle('#FF0000', 50);
      expect(t.area()).toBe(1250);
    });
  });

  describe('render', () => {
    test('returns an SVG string of the triangle', () => {
      const t = new Triangle('#FF0000', 50);
      expect(t.render()).toBe(`<polygon points="25,75 50,25 75,75" fill="#FF0000"/>`);
    });
  });
});

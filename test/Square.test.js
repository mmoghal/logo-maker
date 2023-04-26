const Square = require('../lib/Square');

describe('Square', () => {
  describe('constructor', () => {
    test('creates a square with the specified color and side length', () => {
      const s = new Square('#FF0000', 50);
      expect(s.color).toBe('#FF0000');
      expect(s.sideLength).toBe(50);
    });
  });

  describe('area', () => {
    test('returns the area of the square', () => {
      const s = new Square('#FF0000', 50);
      expect(s.area()).toBe(2500);
    });
  });

  describe('render', () => {
    test('returns an SVG string of the square', () => {
      const s = new Square('#FF0000', 50);
      expect(s.render()).toBe(`<rect x="25" y="25" width="50" height="50" fill="#FF0000"/>`);
    });
  });
});

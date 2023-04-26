const Circle = require('../lib/Circle');

describe('Circle', () => {
  describe('constructor', () => {
    test('creates a circle with the specified color and radius', () => {
      const c = new Circle('#FF0000', 50);
      expect(c.color).toBe('#FF0000');
      expect(c.radius).toBe(50);
    });
  });

  describe('area', () => {
    test('returns the area of the circle', () => {
      const c = new Circle('#FF0000', 50);
      expect(c.area()).toBeCloseTo(7853.98);
    });
  });

  describe('render', () => {
    test('returns an SVG string of the circle', () => {
      const c = new Circle('#FF0000', 50);
      expect(c.render()).toBe(`<circle cx="50" cy="50" r="50" fill="#FF0000"/>`);
    });
  });
});

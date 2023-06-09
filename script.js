//complete this code
class Rectangle {}
// Rectangle class
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

class Square extends Animal {}
  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
  }
}

// Square class
class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this._side = side;
  }

  getPerimeter() {
    return 4 * this._side;
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
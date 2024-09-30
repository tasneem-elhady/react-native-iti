//#region task1
function* fibonacciGenerator(n) {
let a = 0;
let b = 1;

for (let i = 0; i < n; i++) {
    yield a;
    [a, b] = [b, a + b];
}
}
  
function* fibonacciGeneratorMax(max) {
let a = 0;
let b = 1;

while (a <= max) {
    yield a;
    [a, b] = [b, a + b];
}
}
let fib = fibonacciGenerator(11);
let value = fib.next().value;
do{
    console.log(value);
    value = fib.next().value;
}while(value!= undefined);

console.log("-----------------------------")

let fibmax = fibonacciGeneratorMax(10);
let valuem = fibmax.next().value;
do{
    console.log(valuem);
    valuem = fibmax.next().value;
}while(valuem != undefined);

console.log("-----------------------------")

//#endregion
//#region task 2
class Shape {
    constructor(width = 0, height = 0) {
      this.height = height;
      this.width = width;
    }
  
    getPerimeter() {
    }
  
    getArea() {
    }

    print(){
        console.log(" the area is: "+this.getArea());
        console.log(" the perimeter is: "+this.getPerimeter());
        console.log("----------------------------------")
    }
  }
  
  class Triangle extends Shape {
    constructor(base) {
      super(base, base*Math.sqrt(3)/2);
    }

    getPerimeter() {
        return 3*this.width;
      }
  
    getArea() {
      return 0.5 * this.height * this.width;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super(radius, radius);
    }
  
    getPerimeter() {
      return 2 * Math.PI * this.height;
    }
  
    getArea() {
      return Math.PI * this.height * this.width;
    }
  }
  
  class Rectangle extends Shape {
    getPerimeter() {
        return 2 * (this.height + this.width);
    }
    
    getArea() {
        return this.height * this.width;
    }
  }
  
  class Square extends Rectangle {
    constructor(side) {
      super(side, side);
    }
  }
  
  // Example usage
  const triangle = new Triangle(3, 4);
  triangle.print();
  
  const circle = new Circle(5);
  circle.print();

  const rectangle = new Rectangle(6, 8);
  rectangle.print();

  const square = new Square(4);
  square.print();
//#endregion
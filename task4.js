const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('circlePerimeter', (radius) => {
  if (radius < 0) {
    console.log("Radius must be +ve");
  } else {
    const perimeter = 2 * 3.14* radius;
    console.log(perimeter);
  }
});

myEmitter.on('squarePerimeter', (side) => {
  if (side < 0) {
    console.log("Side must be +ve");
  } else {
    const perimeter = 4 * side;
    console.log(perimeter);
  }
});


myEmitter.emit('circlePerimeter', 5);  
myEmitter.emit('circlePerimeter', -3); 

myEmitter.emit('squarePerimeter', 4);  
myEmitter.emit('squarePerimeter', -2); 

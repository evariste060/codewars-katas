class Vehicle {
  constructor(name) {
    this.name = name;
  }

  start() {
    console.log(`${this.name} is starting.`);
  }
}

// Car inherits from Vehicle
class Car extends Vehicle {
  constructor(name, wheels) {
    super(name); // Call parent constructor
    this.wheels = wheels;
  }

  drive() {
    console.log(`${this.name} is driving on ${this.wheels} wheels.`);
  }
}

const myCar = new Car("Toyota", 4);
myCar.start();  // Inherited from Vehicle
myCar.drive();  // Defined in Car

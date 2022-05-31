'use strict';

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    calcAccel() {
        return this.speed + 10;
    }
}

const car1 = new Car('BMW', 120)
const car2 = new Car('Mercedes', 95)

console.log(`your car is running at ${car1.calcAccel()} km/h`);
console.log(`Your car is running at ${car2.calcAccel()} km/h`);


class Car2 {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    calcBrake() {
        return this.speed - 5;
    }
}

const car_1 = new Car2('BMW', 120)
const car_2 = new Car2('Mercedes', 95)

console.log(`Your car is running at ${car_1.calcBrake()} km/h`);
console.log(`Your car is running at ${car_2.calcBrake()} km/h`);


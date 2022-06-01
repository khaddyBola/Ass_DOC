'use strict';

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    calcAccel() {
     this.speed += 10;
     console.log(`${this.make} is going at ${this.speed} km/h`)
    }

    calcBrake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }
}


const car1 = new Car('BMW', 120)
car1.calcAccel()
car1.calcAccel()
car1.calcBrake()
car1.calcBrake()
car1.calcAccel()
car1.calcAccel()
car1.calcBrake()
car1.calcBrake()


// 1. Create Class for Account
// 2. 3_params: owner, pin, movemets
// 3. 3_Methods
// Create username
// Deposit
// Withdrawer

// SOLUTION

class Account {
    constructor(owner, pin, movements) {
        this.owner = owner;
        this.pin = pin;
        this.movements = movements;
    }

    userName() {
        
    }

    deposit() {
        this.movements += 10;
        console.log(`${this.owner} is at ${this.movements}`)

    }

    withdrawer() {
        this.movements -= 5;
        console.log(`${this.owner} is at ${this.movements}`)
    }
}

const accOwner = new Account('Jessica Davis', 4444, 150);
accOwner.deposit()
accOwner.deposit()
accOwner.withdrawer()
accOwner.deposit()






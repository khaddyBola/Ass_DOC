'use strict';

// class Car {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }

//     calcAccel() {
//      this.speed += 10;
//      console.log(`${this.make} is going at ${this.speed} km/h`)
//     }

//     calcBrake() {
//         this.speed -= 5;
//         console.log(`${this.make} is going at ${this.speed} km/h`)
//     }
// }


// const car1 = new Car('BMW', 120)
// car1.calcAccel()
// car1.calcAccel()
// car1.calcBrake()
// car1.calcBrake()
// car1.calcAccel()
// car1.calcAccel()
// car1.calcBrake()
// car1.calcBrake()


// 1. Create Class for Account
// 2. 3_params: owner, pin, movemets
// 3. 3_Methods
// Create username
// Deposit
// Withdrawer

// SOLUTION

class Account {
    // 1. Public fields
    locale = navigator.language;
    // 2. Private fields
    #movements = [];
    #pin;
   
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        console.log(`Thank you for banking with us ${this.owner}`)
    }

    // 3. Public method
    userName() {
        return `${this.owner.toUpperCase().split('').slice(0, 2).join('')}${this.#pin.toString().split('').slice(-2).join('')}`
    }

    deposit(value) {
        this.#movements.push(value)
        return this;
    }

    withdrawer(amount) {
        this.#movements.push(-amount)
        return this;
    }

    // 3. Public method
    #approvedLoan() {
        return false;
    }
    
    requestLoan(value) {
        if (this.#approvedLoan()) {
            console.log('Loan approved')
            return this.deposit(value)
        } else {
            console.log('Gettat hah here....! 😛');
        }

        return this;
    }
    

    get getBalance() {
      return this.#movements.reduce((accm, el) => el + accm, 0)
    }

    get getMovement() {
        return this.#movements;
    }
}


const acct1 = new Account('Jessica', 'USD', 2222);
console.log(acct1.userName());
acct1.deposit(250).deposit(1200).deposit(550).withdrawer(2500).withdrawer(600);

acct1.requestLoan(2000)
// console.log(acct1.#movements);
console.log(acct1.getBalance);
console.log(acct1);
console.log(acct1.getMovement)



/////////////////////////////
// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// const bmw = new Car('BMW', 120)
// console.log(bmw);

// const SUV = function(make, speed, charge) {
//     Car.call(this, make, speed);
//     this.charge = charge;
// }

// SUV.prototype.chargeBattery = function(chargeTo) {
//     this.charge = chargeTo;
// }

// SUV.prototype.accelerate = function() {
//     this.speed = this.speed + 20;
//     this.charge = this.charge - 2;

//     console.log(`${this.make} is goint at ${this.speed} with the battery percentage at ${this.charge}%`)
// }

// const bmwSUV = new SUV('BMW SUV', 140, 46);
// console.log(bmwSUV)
// bmwSUV.accelerate()
// bmwSUV.accelerate()
// bmwSUV.accelerate()
// bmwSUV.accelerate()

/**
 * ASSIGNMENT
 * 1. Convert the code above (Function Constructor) to ES6 Class
 * 2. Create another instance of volvoSUV with speed of 130 at charge of 58%
 * 3. Write *brake* method in ES6 👇
 *      a. Speed will reduce by 10
 *      b. Charge will increase by 1
 * 4. Chain these two methods together to see the battery charge percentages
 * 
 * HINT: Don't forget to return *this* from each method...😏
 * 
 * You are FREE to create as many additional instances to the two above as you wish.
 * 
 * Goodluck 🍀
 */

// SOLUTION
class Car {
    constructor(make, speed) {
        this.make
        this.make = make;
    }

}

const bmwA = new Car('BMW SUV', 120)
console.log(bmwA)



class SUV extends Car {
    constructor(make, speed, charge) {
        super(make, speed)
        this.charge = charge;

    }

    accelerate() {
        this.speed += 20;
        this.charge -= 2;

        return console.log(`${this.make} is going at ${this.speed} with the battery percentage at ${this.charge}%`)

    }

    brake() {
        this.speed -= 10;
        this.charge += 1;

     console.log(`${this.make} is going at ${this.speed} with the battery percentage at ${this.charge}%`)
    }
  
}

const bmwSUV = new SUV('BMW', 140, 46)
console.log(bmwA)
bmwSUV.accelerate()
bmwSUV.accelerate()
bmwSUV.accelerate()
bmwSUV.brake()
bmwSUV.brake()
bmwSUV.brake()
bmwSUV.brake()




const volvoSUV = new SUV('Volvo SUV', 130, 58)
console.log(volvoSUV)
volvoSUV.brake()
volvoSUV.brake()
volvoSUV.brake()
volvoSUV.brake()
volvoSUV.accelerate()
volvoSUV.accelerate()
volvoSUV.accelerate()

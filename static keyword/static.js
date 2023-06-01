// static = Property or method along with static belongs to the class itself, not the objects
//          Properties : useful for caches, fixed configurations
//            Methods : useful for utility functions

class Car{

    static noOfCars = 0

    constructor(model){
        this.model = model;
        Car.noOfCars += 1;
    }
    
    static startRace(){
        console.log("3...2...1...GO!");
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");
const car4 = new Car("Ferrari");
const car5 = new Car("Lambo");

console.log(Car.noOfCars);

Car.startRace();
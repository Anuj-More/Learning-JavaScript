class Car{
    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color
    }
}

const car1 = new Car("Mustang", 2022, "Red");
const car2 = new Car("Corvette", 2023, "Blue");
const car3 = new Car("Lambo", 2024, "Yellow");

function displayInfo(car){
    console.log(car.model);
    console.log(car.color);
    console.log(car.year);
}

function changeColor(car, color){
    car.color = color;
}

displayInfo(car1);
displayInfo(car2);

changeColor(car3, "Gold");

displayInfo(car3);
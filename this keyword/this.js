// this = reference to a particular object
//        the object depends on the immediate context

const car1 = {
    model : "Mustang",
    color : "Red",

    drive : function(){
        console.log(`You are driving a ${this.color} ${this.model}`);
    }
}

const car2 = {
    model : "Corvette",
    color : "Blue",

    drive : function(){
        console.log(`You are driving a ${this.color} ${this.model}`);
    }
}

car1.drive();
car2.drive();
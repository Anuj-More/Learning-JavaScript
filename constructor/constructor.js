// constructor = A special method of a class
//               Accepts arguments and assigns proprties

class Student{
    constructor(name, age, gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study(){
        console.log(`${this.name} is studying`);
    }
}

const stud1 = new Student("Spongebob", 17, 3.2);
const stud2 = new Student("Patrick", 18, 1.5);
const stud3 = new Student("Sandy", 17, 4.0);

console.log(stud1.name);
console.log(stud1.age);
console.log(stud1.gpa);
stud1.study();


console.log(stud2.name);
console.log(stud2.age);
console.log(stud2.gpa);
stud2.study();


console.log(stud3.name);
console.log(stud3.age);
console.log(stud3.gpa);
stud3.study();
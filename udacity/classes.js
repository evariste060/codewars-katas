//ES5 version
/*function Person(name,age){
    this.name=name;
    this.age=age;
    this.love = 'fabbiene'
}
Person.prototype.sayHello = function(){
    console.log(`Hi, my name is ${this.name} and I am ${this.age} Years old.`);
}
const Evariste = new Person('Evariste',22);
const Diane = new Person('diane',45)
Diane.sayHello()
*/
//ES6
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
       console.log(`Hi, my name is ${this.name} and I am ${this.age} Years old.`); 
    }
}
const Evariste = new Person('Evariste',22);
Evariste.sayHello()
console.log(typeof Person)

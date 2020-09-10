/* ANIMAL CLASS */
var Animal = function (name, type) {
  this.name = name;
  this.type = type;
};

Animal.prototype.eat = function () {
  console.log(this.type + " " + this.name + " is eating");
};
Animal.prototype.walk = function () {
  console.log(this.type + " " + this.name + " is walking");
};
/* CAT */
function Cat(name, type, character) {
  Animal.call(this, name, type);
  this.character = character;
};
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.hello = function () {
  console.log("Hello, I'm " + this.name + ". I'm a " + this.character + " " + this.type + ".");
};
Cat.prototype.meow = function () {
  console.log(this.name + " says meow");
};
Cat.prototype.purr = function () {
  console.log(this.name + " is purring");
};
/* DOG */
function Dog(name, type, character, size) {
  Animal.call(this, name, type);
  this.character = character;
  this.size = size;
};

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.hello = function () {
  console.log("Hello, I'm " + this.name + ". I'm a " + this.character + " " + this.type + "." + "I'm a " + this.size + " " + this.type + ".");
};
Dog.prototype.woof = function () {
  console.log(this.name + " says woof");
};
Dog.prototype.hungry = function () {
  console.log(this.name + " is hungry");
};


var animal1 = new Cat("Leopold", "cat", "lovely");
animal1.hello();
animal1.walk();
animal1.meow();

var animal2 = new Dog("Bob", "dog", "friendly", "small");
animal2.hello();
animal2.walk();
animal2.hungry();
animal2.woof();
animal2.eat();

/* Check */
console.log(animal1 instanceof Animal);
console.log(animal1 instanceof Cat);
console.log(animal2 instanceof Dog);
console.log(animal2 instanceof Animal);
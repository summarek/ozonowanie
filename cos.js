function Person(name, age, hairColor) {
    this.name = name;
    this.age = age;
    this.hairColor = hairColor;
}
Person.prototype.sayName = function() {
    console.log("my name is " + this.name);
};

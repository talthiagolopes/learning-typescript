class Animal {

    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayMyName(): void {
        console.log(`My name is ${this.name}`);
    }

    getName() {
        return this.name;
    }

}

class Dog extends Animal {

    age: number; 

    constructor(name: string, age: number = 0) {
        super(name);
        this.age = age;
    }
    setName(name: string) {
        this.name = name;
    }

    sayMyName(): void {
        console.log(`My name is ${this.name} and my age is ${this.age}`)
    }
}

const animal: Animal = new Animal('Cat');
const dog: Dog = new Dog('Dog');

console.log(animal.getName());
console.log(dog.getName());
dog.setName('Dog2');
console.log(dog.getName());

console.log(animal.sayMyName());
console.log(dog.sayMyName());
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayMyName() {
        console.log(`Say my name: ${this.name}!`);
    }
}

const person: Person = new Person('Majuzinha');

person.sayMyName();
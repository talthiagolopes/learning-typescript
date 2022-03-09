interface Animal {
    name: string,
    age?: number,
    sayMyName?(): void;
}

const myAnimal: Animal = {
    name: 'My animal name',
    age: 20,
    sayMyName:(() => {console.log('My name is MyAnimal')})
}

const animal: Animal = {
    name: 'Animal name'
}


myAnimal.sayMyName;
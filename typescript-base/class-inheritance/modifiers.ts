class Car {

    static carDefault = 'Tuctuc';
    public readonly CARS: string[] = ['Tuctuc, Batmovel'];

    private name: string;
    public carMessageDinamic: string = 'Say my name';


    constructor(name: string = 'Tuctuc') {
        this.name = name;
    }

    protected sayMyName() {
        console.log(`${this.carMessageDinamic}: ${this.name}!`);
    }

     getName(): string {
        return this.name;
    }

     setName(name: string) {
        this.name = name;
    }
}

const car: Car = new Car('Ferrari');
console.log(car.getName());

Car.carDefault = 'Batmovel';

console.log(Car.carDefault);
//console.log(car.carDefault); // Error because the CAR_DEFAULT not exists for a Car instance

console.log(car.CARS);

car.CARS.push('newCar');
//car.CARS = ['newCar2']; // Error because CARS is a readonly attribute

console.log(car.CARS);

class MyCar extends Car {

    do() {
        console.log(this.sayMyName());
    }
}

const myCar: MyCar = new MyCar();
myCar.carMessageDinamic = 'Say the car name';

myCar.do()




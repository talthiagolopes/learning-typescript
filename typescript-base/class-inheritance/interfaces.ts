interface ICustomer {
    gender: string;
    sayMyGender: () => void;
}

interface ICustomerSayHello {
    sayHello: () => void;
}

class Customer implements ICustomer, ICustomerSayHello {
    
    gender: string;

    constructor(gender: string) {
        this.gender = gender;
    }
    
    sayMyGender(): void {
        console.log(`My gender is ${this.gender}`);
    }

    sayHello(): void {
        console.log('Hellooo hello');
    }

}


const customer: Customer = new Customer('male');

console.log(customer.sayMyGender());
console.log(customer.sayHello());
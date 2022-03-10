let funcValues: Function;
let funcValuesParam: (a: number, b: number) => number;

function add(a: number, b: number): number {
    return a + b;
}

function sayMyName() {
    console.log('My name is Name');
}

var userName = 'Maju'

if (userName === 'Meg') {
    funcValues = add;
    funcValuesParam = add;
}
else {
    funcValues = sayMyName;
    //funcValuesParam = sayMyName; // throws compilation error: No cumple el contrato
}


funcValues(1, 2);
funcValuesParam(2, 3);



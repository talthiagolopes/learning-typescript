function sum(a: number, b: number = 1): number {
    return a + b;
}

function sumOptional(a: number, b?: number): number {
    if (b) {
        return a + b;
    }
    return a;
}

sum(1, 3);
sum(1);

sumOptional(2, 5);
sumOptional(3);
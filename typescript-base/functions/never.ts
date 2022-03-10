function generatorError(message: string): never | boolean  {
    if (message === 'Validate') {
        return true;
    }
    throw new Error(message);
}

const result = generatorError('Validate');
console.log(result);

const result2 = generatorError('Ops! 500 Server down!');
console.log(result);


function rollTheDice (userName: string, maxOfTries: number) {

    let results: string[] = [];
    let MAX_DICE_NUMBER: number = 6;

    if (!userName) {
        throw new Error('Please enter a user name');
    }

    for (let index = 0; index < maxOfTries; index++) {
        
        // The Math.ceil() method rounds a number UPWARDS to the nearest integer, and returns the result.
        const result = Math.ceil(Math.random() * MAX_DICE_NUMBER);

        if (result === MAX_DICE_NUMBER) {
        results.push(`${userName} is a WINNER`);
        } else {
        results.push(`${userName} is a LOSER`);
        }
    }

    return results;
}

const results: string[] = rollTheDice('TypeScript', 2);

console.log(results);


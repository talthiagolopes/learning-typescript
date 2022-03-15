function identity<T>(param: T) {
    return param;
}

const paramString = identity<string>('one');
const paramBoolean = identity<boolean>(true);
const paramNumber = identity<number>(1);

class Generic<A> {
    items: A[] = [];
}

const genericString: Generic<string> = new Generic();
const genericNumber: Generic<number> = new Generic();

genericString.items.push('a');
genericNumber.items.push(1);


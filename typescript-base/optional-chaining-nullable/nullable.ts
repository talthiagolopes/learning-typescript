function getDefinirOrDefault(stringOrNull: string | null): string {
    if (stringOrNull === null) {
        return 'default';
    }
    return stringOrNull;
}

function getDefinirOrDefault2(stringOrNull: string | null): string {
    return stringOrNull ?? 'default';
}

console.log(getDefinirOrDefault(null));
console.log(getDefinirOrDefault('Hi'));

console.log(getDefinirOrDefault2(null));
console.log(getDefinirOrDefault2('Hi'));
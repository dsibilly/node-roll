export default (rolledDice, value) => {
    const result = [],
        sorted = rolledDice.sort((a, b) => b - a);

    for (let i = 0; i < sorted.length && i < (value / 1); i += 1) {
        result.push(sorted[i]);
    }

    return result;
};

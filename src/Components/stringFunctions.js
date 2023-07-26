const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const concatenateString = (stringOne, stringTwo) => {
    return `${stringOne} ${stringTwo}`;
}

const getSecondWord = (string) => {
    const stringWords = string.split(' ');
    if (stringWords.length > 1) {
        return stringWords[1];
    } else {
        throw new Error('No second word in string');
    }
}

export { capitalizeString, concatenateString, getSecondWord };
// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(personName) {
    if (typeof personName === `string`) {
        return `Hello, ${personName}`
    } else if (typeof personName === `boolean`) {
        return "Hello, World"
    } else {
        return "Hello, Matteo!"
    }
}
function isFive(input1) {
    if (input1 === 5 || '5') {
        return true
    }
    return typeof input1 === 'boolean'
}
function isEven(input1) {
    return input1 % 2 === 0;
}
function isVowel(vowel) {
    return !!(vowel === `a` || `e` || `i` || `o` || `u`);
}
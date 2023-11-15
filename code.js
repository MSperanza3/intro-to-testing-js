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
function isFive(inputOfFive) {
    return inputOfFive
}
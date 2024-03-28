//Code your solutions in this file
// 1st function
const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) {
        console.log(i);
    }
}
// fiveToOneHundred(); 

// 2nd function
const multiplesOfThree = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}
// multiplesOfThree();

// 3rd function
const multiplesOfThreeOrFive = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            console.log(i);
        }
    }
}
// multiplesOfThreeOrFive();

// 4th function
const untilNum = (int) => {
    for (let i = 1; i <= int; i++) {
        console.log(i);
    }
}
// untilNum(33);

// 5th function
const multiply = (int1, int2) => {
    return int1 * int2;
}
// console.log(multiply(3, 7.5));

// 6th function
const add = (num1, num2) => {
    if (num1 === num2) {
        return ((num1 + num2) * (3))
    } else {
        return ((num1 + num2));
    }
}
// console.log(add(6, 6));

// 7th function
const isNegative = (int) => {
    if (int < 0) {
        return true;
    } else {
        return false;
    }
}
// console.log(isNegative(Math.PI));

// 8th function

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
const triangleArea = (num1, num2) => {
    return (num1 * num2) / 2;
}
// console.log(triangleArea(5, 7))    //returns 17.5
// console.log(triangleArea(6, 8))   //returns 24

// 9th function
const betweenTwentyAndFourty = (int) => {
    if (int > 20 && int < 40) {
        return true;
    } else {
        return false;
    }
}
// console.log(betweenTwentyAndFourty(40));

// 10th function
const largest = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}
// console.log(largest(4, 6, 8));
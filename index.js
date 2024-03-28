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
untilNum(33);

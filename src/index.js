module.exports = function toReadable(number) {
    const numbersBefore20Arr = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const doubleDigitsArr = [
        "twenty",
        "thirty",
        "fourty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let resultString = "";

    function makeMagicWithNumbersUnder100(num) {
        if (num > 0 && num < 20) {
            return numbersBefore20Arr[num - 1];
        }
        if (num % 10 === 0) {
            return doubleDigitsArr[num / 10 - 2];
        }

        let funcArr = (num / 10).toString().split(".");
        return `${doubleDigitsArr[+funcArr[0] - 2]} ${
            numbersBefore20Arr[funcArr[1] - 1]
        }`;
    }

    if (number < 100) {
        resultString = makeMagicWithNumbersUnder100(number);
    }

    if (number >= 100) {
        let firstNum = Math.floor(number / 100);

        if (number % 100 === 0) {
            return `${numbersBefore20Arr[firstNum - 1]} hundred`;
        }
        let secondsNum = Number(number.toString().split("").splice(1).join(""));
        console.log(`Seconds ${secondsNum}`);
        return `${
            numbersBefore20Arr[firstNum - 1]
        } hundred ${makeMagicWithNumbersUnder100(secondsNum)}`;
    }

    return resultString;
};

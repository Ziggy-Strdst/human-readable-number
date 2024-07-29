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

    function makeMagicWithNumbersUnder100(number) {
        if (number > 0 && number < 20) {
            return numbersBefore20Arr[number - 1];
        }
        if (number % 10 === 0) {
            return doubleDigitsArr[number / 10 - 2];
        }

        let funcArr = (number / 10).toString().split(".");
        return `${doubleDigitsArr[+funcArr[0] - 2]} ${
            numbersBefore20Arr[funcArr[1] - 1]
        }`;
    }

    return resultString;
};

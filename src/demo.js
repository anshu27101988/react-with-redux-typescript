const numbers = [41, 8, 43, 33, 29, 102, 912, 91, 82, 122];
const max = (arr) => {
    // Max number from an array
    /* By Math Method */
    //return Math.max(...arr)

    /* By For Loop */
    // let max = arr[0];
    // for(item of arr) {
    //   if(item > max) {
    //     max = item;
    //   }
    // }
    // return max

    /* By Array Reduce */
    const maxItem = arr.reduce((max, curr) => {
        return max > curr ? max : curr;
    }, arr[0]);
    return maxItem;
};
console.log("Maximum Number ->", max(numbers));

const arraySum = (arr) => {
    let sum = 0;
    arr.reduce((total, curr) => {
        sum += curr;
    });
    return sum;
};

console.log("Sum of array elements ->", arraySum(numbers));

const sentence = "Capgemini is a largest multinational company";
const getLargestStringOfSentence = (str) => {
    const strArray = str.split(" ");
    let largestItem = strArray[0];
    strArray.forEach((item) => {
        if (item.length > largestItem.length) largestItem = item;
    });
    return largestItem;
};
console.log(
    "Largest string of the sring is ",
    getLargestStringOfSentence(sentence)
);

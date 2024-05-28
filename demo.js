// maximum number from an array
const max = (arr, type) => {
    switch (type) {
        case "math":
            console.log("Max Item of Array [math] ->", Math.max(...arr));
            break;
        case "forof":
            const maxItem = arr[0];
            for (item of arr) {
                if (item > max) {
                    maxItem = item;
                }
            }
            console.log("Max Item of Array [forof] ->", maxItem);
            break;
        case "reduce":
            const maxReduce = arr.reduce((max, curr) => {
                return max > curr ? max : curr;
            }, arr[0]);
            console.log("Max Item of Array [reduce] ->", maxReduce);
            break;
    }
};
const numbers = [41, 8, 43, 33, 29, 102, 912, 91, 82, 122];
max(numbers, "math");
max(numbers, "forof");
max(numbers, "reduce");

// sum of array items
const arraySum = (arr) => {
    const sum = arr.reduce((total, curr) => total + curr, 0);
    console.log("Sum of array elements ->", sum);
};
arraySum(numbers);

// largest string from a sentence
const sentence = "Capgemini is a largest multinational company";
const getLargestStringOfSentence = (str) => {
    const strArray = str.split(" ");
    const largest = strArray.reduce((large, item) => {
        return item.length > large.length ? item : large;
    }, strArray[0]);
    console.log("Largest string of the sring is ->", largest);
};
getLargestStringOfSentence(sentence);

// reverse the each letter of the word of the string
const str = "Welcome To React World";
const reverseWord = (str) => {
    const output = str
        .split(" ")
        .map((word) => {
            const reversedWord = word
                .toLowerCase()
                .split("")
                .reverse()
                .join("");
            return reversedWord[0].toUpperCase() + reversedWord.substr(1);
        })
        .join(" ");
    console.log("Reverse of letter of each word of the string is -> ", output);
};
reverseWord(str);

//find missing number
let arr = [1, 2, 4, 5, 7, 10];
const findMissingNumbers = (arr) => {
    const lastitem = arr[arr.length - 1];
    let i = 1;
    const output = [];
    while (i <= lastitem) {
        if (!arr.includes(i)) {
            output.push(i);
        }
        i++;
    }
    console.log("Missing number from Array -> ", output);
};
findMissingNumbers(arr);

// sort the array list by id
const arrayOfObjects = [
    { id: 2, name: "test2" },
    { id: 6, name: "test6" },
    { id: 1, name: "test1" },
    { id: 4, name: "test4" },
    { id: 3, name: "test3" },
    { id: 5, name: "test11" },
];
const sortArrayByProps = (arr, key = "id") => {
    const output = arr.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    console.log("Sorted Array -> ", output);
};
sortArrayByProps(arrayOfObjects);

const inputArray = [12, 23, 25, 34, 45, 67, 78, 90, 37, 47];
//expected output = [[12,23],[25,34],[45,67],[78,90],[37,47]]
const restructureArray = (arr, offset) => {
    const output = [];
    for (let i = 0; i < arr.length - 1; i + offset) {
        output.push(arr.splice(i, i + offset));
    }
    if (arr.length > 0) {
        output.push(arr);
    }
    console.log("Expected Array ->", output);
};
restructureArray(inputArray, 3);

//Example- 1
function reverseString(inputString) {
  let reversedString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }
  return reversedString;
}

// Example usage:
console.log(reverseString("hello world"));

//Example- 2
function sumPositiveNumbers(numbersArray) {
  let sum = 0;
  for (let number of numbersArray) {
    if (number > 0) {
      sum += number;
    }
  }
  return sum;
}

console.log(sumPositiveNumbers([2, -5, 10, -3, 7]));

//Example- 3
function findMostFrequentElement(inputArray) {
  const frequencyMap = {};
  let maxFrequency = 0;
  let mostFrequentElement;

  for (let num of inputArray) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    if (frequencyMap[num] > maxFrequency) {
      maxFrequency = frequencyMap[num];
      mostFrequentElement = num;
    }
  }

  return mostFrequentElement;
}

console.log(findMostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]));

// Example -4
function findTwoNumbersWithSum(sortedArray, target) {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left < right) {
    const sum = sortedArray[left] + sortedArray[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null;
}

console.log(findTwoNumbersWithSum([1, 3, 6, 8, 11, 15], 9));

// Example -5
function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}

console.log(calculate(5, "+", 3));
console.log(calculate(10, "*", 2));

//   Example -6
function generateRandomPassword(length) {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

console.log(generateRandomPassword(12));

// Example -7
function romanToInteger(romanNumeral) {
  const romanNumeralMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < romanNumeral.length; i++) {
    const currentNumeral = romanNumeralMap[romanNumeral[i]];
    const nextNumeral = romanNumeralMap[romanNumeral[i + 1]];
    if (currentNumeral < nextNumeral) {
      result -= currentNumeral;
    } else {
      result += currentNumeral;
    }
  }
  return result;
}

console.log(romanToInteger("IX"));
console.log(romanToInteger("XXI"));

//   Example -8
function findSecondSmallestElement(numbersArray) {
  let smallest = Infinity;
  let secondSmallest = Infinity;
  for (let num of numbersArray) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest) {
      secondSmallest = num;
    }
  }
  return secondSmallest;
}

console.log(findSecondSmallestElement([4, 2, 8, 1, 5, 3]));

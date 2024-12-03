function stringLenght (string, maxLen){
  return string.length <= maxLen;
}

function checkPolindrom (string) {
  const normalized = string.replaceAll(" ", "").toLowerCase();
  return normalized === normalized.split("").reverse().join("");
}

function findNumbers (str) {
  const string = str.toString();
  let numbers = '';
  for (const char of string) {
    const num = parseInt(char, 10);
    if (!Number.isNaN(num)) {
      numbers += num;
    }
  }
  if (numbers === '') {
    return NaN;
  }
  return parseInt(numbers, 10);
}

// console.log(stringLenght('проверяемая строка', 20));
// console.log(stringLenght('проверяемая строка', 18));
// console.log(stringLenght('проверяемая строка', 10));

// console.log(checkPolindrom('топот'));
// console.log(checkPolindrom('ДовОд'));
// console.log(checkPolindrom('Кекс'));
// console.log(checkPolindrom('Лёша на полке клопа нашёл '));

// console.log(findNumbers('2023 год'));
// console.log(findNumbers('ECMAScript 2022'));
// console.log(findNumbers('1 кефир, 0.5 батона'));
// console.log(findNumbers('агент 007'));
// console.log(findNumbers('а я томат'));
// console.log(findNumbers(2023));
// console.log(findNumbers(-1));
// console.log(findNumbers(1.5));

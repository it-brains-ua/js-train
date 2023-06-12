// Завдання 1: Напишіть функцію, яка визначає довжину рядка

function findStringLength(str) {
  // Використовуємо властивість length, щоб знайти довжину рядка str
  return str.length;
}

console.log("Завдання 1 ====================================");
console.log(
  'findStringLength("Hello, world!")',
  findStringLength("Hello, world!")
); // Виведе 13

// Завдання 2: Напишіть функцію, яка генерує рядок з символів на основі їх кодів Unicode

function generateStringFromCharCode(code1, code2, code3, code4, code5) {
  // Використовуємо String.fromCharCode(), щоб створити рядок з символів code1, code2, code3, code4, code5 на основі їх кодів Unicode
  return String.fromCharCode(code1, code2, code3, code4, code5);
}

console.log("Завдання 2 ====================================");
console.log(
  "generateStringFromCharCode(72, 101, 108, 108, 111)",
  generateStringFromCharCode(72, 101, 108, 108, 111)
); // Виведе "Hello"

// Завдання 3: Напишіть функцію, яка генерує рядок з символів на основі їх кодів Unicode

function generateStringFromCodePoint(code1, code2, code3, code4, code5) {
  // Використовуємо String.fromCodePoint(), щоб створити рядок з символів code1, code2, code3, code4, code5 на основі їх кодів Unicode
  return String.fromCodePoint(code1, code2, code3, code4, code5);
}

console.log("Завдання 3 ====================================");
console.log(
  "generateStringFromCodePoint(72, 101, 108, 108, 111)",
  generateStringFromCodePoint(72, 101, 108, 108, 111)
); // Виведе "Hello"

// Завдання 4: Напишіть функцію, яка виводить рядок з використанням String.raw

function rawString() {
  // Використовуємо String.raw, щоб створити рядок "Привіт\u000A!", який ігнорує спеціальні символи
  return String.raw`Привіт\u000A!`;
}

console.log("Завдання 4 ====================================");
console.log("rawString()", rawString()); // Виведе Привіт\u000A!

// Завдання 5: Напишіть функцію, яка об'єднує два рядки

function concatenateStrings(str1, str2) {
  // Використовуємо метод concat(), щоб об'єднати два рядки str1 та str2
  return str1.concat(str2);
}

console.log("Завдання 5 ====================================");
console.log(
  'concatenateStrings("Hello", "World!")',
  concatenateStrings("Hello", "World!")
); // Виведе "HelloWorld!"

// Завдання 6: Напишіть функцію, яка перевіряє, чи входить підрядок в рядок

function checkIfIncludes(mainStr, subStr) {
  // Використовуємо метод includes(), щоб перевірити, чи входить підрядок subStr в рядок mainStr
  return mainStr.includes(subStr);
}

console.log("Завдання 6 ====================================");
console.log(
  'checkIfIncludes("Hello, world!", "world")',
  checkIfIncludes("Hello, world!", "world")
); // Виведе true

// Завдання 7: Напишіть функцію, яка знаходить індекс підрядка в рядку

function findIndexOf(mainStr, subStr) {
  // Використовуємо метод indexOf(), щоб знайти індекс підрядка subStr в рядку mainStr
  return mainStr.indexOf(subStr);
}

console.log("Завдання 7 ====================================");
console.log(
  'findIndexOf("Hello, world!", "world")',
  findIndexOf("Hello, world!", "world")
); // Виведе 7

// Завдання 8: Напишіть функцію, яка знаходить останній індекс підрядка в рядку

function findLastIndexOf(mainStr, subStr) {
  // Використовуємо метод lastIndexOf(), щоб знайти останній індекс підрядка subStr в рядку mainStr
  return mainStr.lastIndexOf(subStr);
}

console.log("Завдання 8 ====================================");
console.log(
  'findLastIndexOf("Hello, world! Hello, universe!", "Hello")',
  findLastIndexOf("Hello, world! Hello, universe!", "Hello")
); // Виведе 14

// Завдання 9: Напишіть функцію, яка перевіряє, чи починається рядок з певного підрядка

function checkIfStartsWith(mainStr, subStr) {
  // Використовуємо метод startsWith(), щоб перевірити, чи починається рядок mainStr з певного підрядка subStr
  return mainStr.startsWith(subStr);
}

console.log("Завдання 9 ====================================");
console.log(
  'checkIfStartsWith("Hello, world!", "Hello")',
  checkIfStartsWith("Hello, world!", "Hello")
); // Виведе true

// Завдання 10: Напишіть функцію, яка перевіряє, чи закінчується рядок певним підрядком

function checkIfEndsWith(mainStr, subStr) {
  // Використовуємо метод endsWith(), щоб перевірити, чи закінчується рядок mainStr певним підрядком subStr
  return mainStr.endsWith(subStr);
}

console.log("Завдання 10 ====================================");
console.log(
  'checkIfEndsWith("Hello, world!", "world!")',
  checkIfEndsWith("Hello, world!", "world!")
); // Виведе true

// Завдання 11: Напишіть функцію, яка отримує символ рядка за індексом

function getCharacterAt(string, index) {
  // Використовуємо метод at(), щоб отримати символ рядка string за індексом index
  return string.at(index);
}

console.log("Завдання 11 ====================================");
console.log(
  'getCharacterAt("Hello, world!", 4)',
  getCharacterAt("Hello, world!", 4)
); // Виведе 'o'

// Завдання 12: Напишіть функцію, яка отримує символ рядка string за індексом використовуючи charAt

function getCharAt(string, index) {
  // Використовуємо метод charAt(), щоб отримати символ рядка string за індексом index
  return string.charAt(index);
}

console.log("Завдання 12 ====================================");
console.log('getCharAt("Hello, world!", 7)', getCharAt("Hello, world!", 7)); // Виведе 'w'

// Завдання 13: Напишіть функцію, яка отримує код символа рядка за індексом

function getCharCodeAt(string, index) {
  // Використовуємо метод charCodeAt(), щоб отримати код символа рядка string за індексом index
  return string.charCodeAt(index);
}

console.log("Завдання 13 ====================================");
console.log(
  'getCharCodeAt("Hello, world!", 0)',
  getCharCodeAt("Hello, world!", 0)
); // Виведе 72

// Завдання 14: Напишіть функцію, яка отримує код символа рядка за індексом використовуючи codePointAt

function getCodePointAt(string, index) {
  // Використовуємо метод codePointAt(), щоб отримати код символа рядка string за індексом index
  return string.codePointAt(index);
}

console.log("Завдання 14 ====================================");
console.log(
  'getCodePointAt("Hello, world!", 0)',
  getCodePointAt("Hello, world!", 0)
); // Виведе 72

// Завдання 15: Напишіть функцію, яка доповнює рядок до певної довжини вставляючи символи на початку

function padStringStart(string, length, padChar) {
  // Використовуємо метод padStart(), щоб доповнити рядок string до певної довжини length, вставляючи символи padChar на початку
  return string.padStart(length, padChar);
}

console.log("Завдання 15 ====================================");
console.log('padStringStart("123", 5, "0")', padStringStart("123", 5, "0")); // Виведе '00123'

// Завдання 16: Напишіть функцію, яка доповнює рядок до певної довжини вставляючи символи в кінець

function padStringEnd(string, length, padChar) {
  // Використовуємо метод padEnd(), щоб доповнити рядок string до певної довжини length, вставляючи символи padChar в кінець
  return string.padEnd(length, padChar);
}

console.log("Завдання 16 ====================================");
console.log('padStringEnd("123", 5, "0")', padStringEnd("123", 5, "0")); // Виведе '12300'

// Завдання 17: Напишіть функцію, яка повторює рядок певну кількість разів

function repeatString(string, times) {
  // Використовуємо метод repeat(), щоб повторити рядок певну кількість разів times
  return string.repeat(times);
}

console.log("Завдання 17 ====================================");
console.log('repeatString("abc", 3)', repeatString("abc", 3)); // Виведе 'abcabcabc'

// Завдання 18: Напишіть функцію, яка видаляє частину рядка між двома індексами

function sliceString(string, startIndex, endIndex) {
  // Використовуємо метод slice(), щоб видалити частину рядка string між двома індексами startIndex та endIndex
  return string.slice(startIndex, endIndex);
}

console.log("Завдання 18 ====================================");
console.log(
  'sliceString("Hello, world!", 0, 5)',
  sliceString("Hello, world!", 0, 5)
); // Виведе 'Hello'

// Завдання 19: Напишіть функцію, яка видаляє частину рядка між двома індексами використовуючи substring

function substringString(string, startIndex, endIndex) {
  // Використовуємо метод substring(), щоб видалити частину рядка string між двома індексами startIndex та endIndex
  return string.substring(startIndex, endIndex);
}

console.log("Завдання 19 ====================================");
console.log(
  'substringString("Hello, world!", 0, 5)',
  substringString("Hello, world!", 0, 5)
); // Виведе 'Hello'

// Завдання 20: Напишіть функцію, яка переводить всі символи рядка в нижній регістр

function convertToLower(string) {
  // Використовуємо метод toLowerCase(), щоб перевести всі символи рядка string в нижній регістр
  return string.toLowerCase();
}

console.log("Завдання 20 ====================================");
console.log('convertToLower("Hello, World!")', convertToLower("Hello, World!")); // Виведе 'hello, world!'

// Завдання 21: Напишіть функцію, яка переводить всі символи рядка в верхній регістр

function convertToUpper(string) {
  // Використовуємо метод toUpperCase(), щоб перевести всі символи рядка string в верхній регістр
  return string.toUpperCase();
}

console.log("Завдання 21 ====================================");
console.log('convertToUpper("Hello, World!")', convertToUpper("Hello, World!")); // Виведе 'HELLO, WORLD!'

// Завдання 22: Напишіть функцію, яка видаляє пробіли на початку та в кінці рядка

function trimString(string) {
  // Використовуємо метод trim(), щоб видалити пробіли на початку та в кінці рядка string
  return string.trim();
}

console.log("Завдання 22 ====================================");
console.log('trimString(" Hello, World! ")', trimString(" Hello, World! ")); // Виведе 'Hello, World!'

// Завдання 23: Напишіть функцію, яка видаляє пробіли на початку рядка

function trimStringStart(string) {
  // Використовуємо метод trimStart(), щоб видалити пробіли на початку рядка string
  return string.trimStart();
}

console.log("Завдання 23 ====================================");
console.log(
  'trimStringStart(" Hello, World!")',
  trimStringStart(" Hello, World!")
); // Виведе 'Hello, World!'

// Завдання 24: Напишіть функцію, яка видаляє пробіли в кінці рядка

function trimStringEnd(string) {
  // Використовуємо метод trimEnd(), щоб видалити пробіли в кінці рядка string
  return string.trimEnd();
}

console.log("Завдання 24 ====================================");
console.log('trimStringEnd("Hello, World! ")', trimStringEnd("Hello, World! ")); // Виведе 'Hello, World!'

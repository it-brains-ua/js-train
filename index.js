// Завдання: 1

/**
 * Функція `findElementGreaterThan` знаходить перший елемент масиву, який є більшим за задане число.
 * @param {Array} arr - вхідний масив, в якому відбувається пошук.
 * @param {number} num - число, яке використовується для порівняння з елементами масиву.
 * @returns {any} foundElement - перший елемент масиву, який є більшим за задане число
 */
function findElementGreaterThan(arr, num) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні повертаємо undefined
  if (!Array.isArray(arr)) {
    // повертаємо undefined
    return undefined;
  }
  // Використовуємо метод find для пошуку першого елементу, який є більшим за задане число num.
  const foundElement = arr.find((element) => element > num);
  // Перевіряємо чи є елемент який задовільняє умову
  if (foundElement) {
    //Якщо так повертаємо елемент
    return foundElement;
  } else {
    // Якщо ні повертаємо рядок Числа яке задовільняе умову не знайдено
    return "Числа яке задовільняе умову не знайдено";
  }
}

console.log("Завдання: 1  ==============================");
console.log(findElementGreaterThan([1, 2, 3, 4, 5], 3)); // Виведе 4

// Завдання: 2

/**
 * Функція `findIndexByProperty` знаходить індекс першого об'єкта в масиві, властивість 'name' якого співпадає з заданим іменем.
 * @param {Array} arr - вхідний масив об'єктів, в якому відбувається пошук.
 * @param {string} name - ім'я, яке використовується для порівняння з властивістю 'name' об'єктів масиву.
 * @returns {number} foundIndex - індекс першого об'єкта, властивість 'name' якого співпадає з заданим іменем.
 * Якщо об'єкт не знайдено, повертає -1.
 */
function findIndexByProperty(arr, name) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні повертаємо -1
  if (!Array.isArray(arr)) {
    return -1;
  }
  // Використовуємо метод findIndex для пошуку індексу об'єкта, властивість 'name' якого співпадає з заданим іменем.
  const foundIndex = arr.findIndex((obj) => obj.name === name);
  // Повертаємо знайдений індекс або -1, якщо об'єкт не знайдено.
  return foundIndex >= 0 ? foundIndex : "Об`єкта з таким іменем не знайдено";
}

console.log("Завдання: 2  ==============================");
console.log(
  findIndexByProperty(
    [
      { name: "Ivan", age: 23 },
      { name: "Petro", age: 30 },
    ],
    "Petro"
  )
); // Виведе 1

// Завдання: 3

/**
 * Функція `findLastEvenNumber` знаходить останнє парне число в масиві.
 * @param {Array} arr - вхідний масив чисел, в якому відбувається пошук.
 * @returns {any} lastEvenNumber - останнє парне число в масиві.
 * Якщо таке число не знайдено, повертає 'Парних чисел не знайдено'.
 */
function findLastEvenNumber(arr) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні повертаємо 'Вхідний параметр має бути масивом'
  if (!Array.isArray(arr)) {
    return "Вхідний параметр має бути масивом";
  }
  // За допомогою метода findLast знаходимо останнє парне число в масиві.
  const lastEvenNumber = arr.findLast((num) => num % 2 === 0);
  // Повертаємо знайдене число або 'Парних чисел не знайдено', якщо таке число не знайдено.
  return lastEvenNumber !== undefined
    ? lastEvenNumber
    : "Парних чисел не знайдено";
}

console.log("Завдання: 3 ==============================");
console.log(findLastEvenNumber([1, 2, 3, 4, 5])); // Виведе 4

// Завдання: 4

/**
 * Функція `getSubArrayAndConvertToString` отримує підмасив від заданого індексу до кінця масиву і конвертує його в рядок.
 * Використовується методи `slice()` і `join()` для реалізації.
 * @param {Array} arr - вхідний масив.
 * @param {number} startIdx - індекс з якого починається підмасив.
 * @returns {string} subArrayString - рядок, отриманий в результаті конвертації підмасиву.
 */
function getSubArrayAndConvertToString(arr, startIdx) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні повертаємо 'Вхідний параметр має бути масивом'
  if (!Array.isArray(arr)) {
    return "Вхідний параметр має бути масивом";
  }
  // За допомогою методу slice() отримуємо підмасив від заданого індексу до кінця масиву.
  const subArray = arr.slice(startIdx);
  // За допомогою методу join() конвертуємо підмасив в рядок.
  const subArrayString = subArray.join(" ");
  // Повертаємо рядок.
  return subArrayString;
}

console.log("Завдання: 4 ==============================");
console.log(
  getSubArrayAndConvertToString(
    ["Я", "люблю", "JavaScript!", "Він", "дуже", "потужний"],
    3
  )
);
// Виведе "Він дуже потужний"

// Завдання: 5

/**
 * Функція `getArrayKeys` отримує ключі масиву.
 * Використовується метод `keys()` для реалізації.
 * @param {Array} arr - вхідний масив.
 * @returns {Array} arrayKeys - масив ключів вхідного масиву.
 */
function getArrayKeys(arr) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні повертаємо 'Вхідний параметр має бути масивом'
  if (!Array.isArray(arr)) {
    return "Вхідний параметр має бути масивом";
  }
  // За допомогою методу keys() отримуємо об'єкт ітератора, який містить ключі масиву.
  const arrayKeysIterator = arr.keys();
  // Конвертуємо ітератор в масив за допомогою методу from.
  const arrayKeys = Array.from(arrayKeysIterator);
  // Повертаємо масив ключів.
  return arrayKeys;
}

console.log("Завдання: 5  ==============================");
console.log(getArrayKeys(["яблуко", "банан", "апельсин"])); // Виведе [0, 1, 2]

// Завдання: 6

/**
 * Функція `getPositiveArrayValues` отримує лише додатні значення з масиву.
 * Використовується методи `values()` і `filter()` для реалізації.
 * @param {Array} arr - вхідний масив.
 * @returns {Array} positiveArrayValues - масив додатніх значень вхідного масиву.
 */
function getPositiveArrayValues(arr) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні повертаємо 'Вхідний параметр має бути масивом'
  if (!Array.isArray(arr)) {
    return "Вхідний параметр має бути масивом";
  }
  // За допомогою методу values() отримуємо об'єкт ітератора, який містить значення масиву.
  const arrayValuesIterator = arr.values();
  // Конвертуємо ітератор в масив.
  const arrayValues = Array.from(arrayValuesIterator);
  // За допомогою методу filter() отримуємо масив лише з додатніми значеннями.
  const positiveArrayValues = arrayValues.filter((value) => value > 0);
  // Повертаємо масив додатніх значень.
  return positiveArrayValues;
}

console.log("Завдання: 6  ==============================");
console.log(getPositiveArrayValues([-2, -1, 0, 1, 2])); // Виведе [1, 2]

// Завдання: 7

/**
 * Функція `removeAndDouble` видаляє елементи з масиву починаючи з заданого індексу і подвоює залишені елементи.
 * Використовується методи `splice()` і `map()` для реалізації.
 * @param {Array} arr - вхідний масив.
 * @param {number} startIdx - індекс з якого починається видалення елементів.
 * @returns {Array} doubledArray - масив подвоєних елементів після видалення.
 */
function removeAndDouble(arr, startIdx) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні повертаємо 'Вхідний параметр має бути масивом'
  if (!Array.isArray(arr)) {
    return "Вхідний параметр має бути масивом";
  }
  // За допомогою методу splice() видаляємо елементи масиву починаючи з заданого індексу.
  arr.splice(startIdx);
  // За допомогою методу map() подвоюємо кожен елемент масиву.
  const doubledArray = arr.map((element) => element * 2);
  // Повертаємо масив подвоєних елементів.
  return doubledArray;
}

console.log("Завдання: 7 ==============================");
console.log(removeAndDouble([1, 2, 3, 4, 5], 2)); // Виведе [6, 8, 10]

// Завдання: 8

/**
 * Функція `sumAndPrint` обчислює суму елементів масиву і виводить кожен елемент на консоль.
 * Використовується методи `reduce()` і `forEach()` для реалізації.
 * @param {Array} arr - вхідний масив.
 * @returns {number} sum - сума елементів масиву.
 */
function sumAndPrint(arr) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні повертаємо 'Вхідний параметр має бути масивом'
  if (!Array.isArray(arr)) {
    return "Вхідний параметр має бути масивом";
  }
  // За допомогою методу reduce() обчислюємо суму елементів масиву.
  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  // За допомогою методу forEach() виводимо кожен елемент масиву на консоль.
  arr.forEach((element) => console.log(element));
  // Повертаємо суму елементів масиву.
  return sum;
}

console.log("Завдання: 8  ==============================");
console.log(sumAndPrint([1, 2, 3, 4, 5])); // Виведе 1 2 3 4 5 та поверне 15

// Завдання: 9

/**
 * Функція `flattenSquareAndFilter` вирівнює масив, підносить кожен елемент до квадрату і фільтрує по заданому порогу.
 * Використовується методи `flat()`, `map()`, і `filter()` для реалізації.
 * @param {Array} arr - вхідний масив.
 * @param {number} threshold - порогове значення для фільтрації.
 * @returns {Array} filteredSquaredArray - вирівняний масив, елементи якого підняті до квадрату і профільтровані.
 */
function flattenSquareAndFilter(arr, threshold) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні повертаємо 'Вхідний параметр має бути масивом'
  if (!Array.isArray(arr)) {
    return "Вхідний параметр має бути масивом";
  }
  // За допомогою методу flat() вирівнюємо масив.
  const flatArray = arr.flat();
  // За допомогою методу map() підносимо кожен елемент масиву до квадрату.
  const squaredArray = flatArray.map((element) => element * element);
  // За допомогою методу filter() фільтруємо елементи, які більше за порогове значення.
  const filteredSquaredArray = squaredArray.filter(
    (element) => element > threshold
  );
  // Повертаємо вирівняний масив, елементи якого підняті до квадрату і профільтровані.
  return filteredSquaredArray;
}

console.log("Завдання: 9 ==============================");
console.log(
  flattenSquareAndFilter(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    10
  )
); // Виведе [16, 25, 36]

// Завдання: 10

/**
 * Функція `getLastElementsSumAndPrint` обчислює суму останніх n елементів масиву і виводить їх на консоль.
 * Використовується методи `reduceRight()`, `slice()` і `forEach()` для реалізації.
 * @param {Array} arr - вхідний масив.
 * @param {number} n - кількість останніх елементів, які необхідно взяти до уваги.
 * @returns {number} sum - сума останніх n елементів масиву.
 */
function getLastElementsSumAndPrint(arr, n) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні повертаємо 'Вхідний параметр має бути масивом'
  if (!Array.isArray(arr)) {
    return "Вхідний параметр має бути масивом";
  }
  // За допомогою методу slice() вибираємо останні n елементів масиву.
  const lastElements = arr.slice(-n);
  // За допомогою методу reduceRight() обчислюємо суму останніх n елементів масиву.
  const sum = lastElements.reduceRight(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  // За допомогою методу forEach() виводимо кожен елемент з останніх n на консоль.
  lastElements.forEach((element) => console.log(element));
  // Повертаємо суму останніх n елементів масиву.
  return sum;
}

console.log("Завдання: 10  ==============================");
console.log(getLastElementsSumAndPrint([1, 2, 3, 4, 5], 2)); // Виведе 4 5 та поверне 9

// Завдання: 11

/**
 * Функція `wordLengths` приймає масив слів та повертає новий масив, де кожний елемент - це довжина відповідного слова.
 * @param {Array} arr - вхідний масив слів.
 * @returns {Array} lengthsArray - новий масив, де кожний елемент - це довжина відповідного слова з вхідного масиву.
 */
function wordLengths(arr) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні, повертаємо 'Вхідний параметр має бути масивом'
  if (!Array.isArray(arr)) {
    return "Вхідний параметр має бути масивом";
  }
  // Використовуємо метод map для створення нового масиву, де кожний елемент - це довжина відповідного слова з вхідного масиву
  const lengthsArray = arr.map((word) => word.length);
  // Повертаємо новий масив
  return lengthsArray;
}

console.log("Завдання: 11 ==============================");
console.log(wordLengths(["apple", "banana", "pineapple", "watermelon"])); // Виведе [5, 6, 9, 10]

// Завдання: 12

/**
 * Функція `insertElementAt` вставляє заданий елемент в масив на задану позицію.
 * Використовується метод `splice()` для реалізації.
 * @param {Array} arr - вхідний масив.
 * @param {number} index - індекс, на якому необхідно вставити елемент.
 * @param {any} element - елемент, який необхідно вставити.
 * @returns {Array} arr - масив з вставленим елементом.
 */
function insertElementAt(arr, index, element) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні повертаємо 'Вхідний параметр має бути масивом'
  if (!Array.isArray(arr)) {
    return "Вхідний параметр має бути масивом";
  }
  // Використовуємо метод splice для вставки елемента на позицію index
  arr.splice(index, 0, element);
  // Повертаємо масив з вставленим елементом
  return arr;
}

console.log("Завдання: 12 ==============================");
console.log(insertElementAt([1, 2, 3, 4, 5], 2, "три")); // Виведе [1, 2, 'три', 3, 4, 5]

// Завдання: 13

/**
 * Функція `flattenArray` приймає масив (вкладені масиви допустимі) і повертає новий одновимірний масив з усіма елементами.
 * @param {Array} arr - вхідний масив, який може містити вкладені масиви.
 * @returns {Array} flattenedArray - одновимірний масив з усіма елементами вхідного масиву.
 */
function flattenArray(arr) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні повертаємо 'Вхідний параметр має бути масивом'
  if (!Array.isArray(arr)) {
    return "Вхідний параметр має бути масивом";
  }
  // Використовуємо метод flat з параметром Infinity, щоб "випрямити" масив на будь-яку глибину вкладеності
  const flattenedArray = arr.flat(Infinity);
  // Повертаємо "випрямлений" масив
  return flattenedArray;
}

console.log("Завдання: 13 ==============================");
console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Виведе [1, 2, 3, 4, 5]

// Завдання: 14

/**
 * Функція `expandArrayByN` приймає масив чисел і число n, та повертає новий масив, де кожне число з початкового масиву повторюється n разів.
 * @param {Array} arr - вхідний масив чисел.
 * @param {number} n - кількість разів, скільки кожне число повторюється в новому масиві.
 * @returns {Array} expandedArray - новий масив, де кожне число повторюється n разів.
 */
function expandArrayByN(arr, n) {
  // Перевіряємо, чи вхідні параметри є масивом та числом відповідно, якщо ні повертаємо 'Перший вхідний параметр має бути масивом, другий - числом'
  if (!Array.isArray(arr) || typeof n !== "number") {
    return "Перший вхідний параметр має бути масивом, другий - числом";
  }
  // Використовуємо метод flatMap для створення нового масиву, де кожне число повторюється n разів
  const expandedArray = arr.flatMap((num) => Array(n).fill(num));
  // Повертаємо розширений масив
  return expandedArray;
}

console.log("Завдання: 14 ==============================");
console.log(expandArrayByN([1, 2, 3], 3)); // Виведе [1, 1, 1, 2, 2, 2, 3, 3, 3]

// Завдання: 15

/**
  
  Функція findLongestWord приймає масив слів і повертає найдовше слово.
  Використовується метод reduce() для реалізації.
  @param {Array} arr - вхідний масив слів.
  @returns {string} longestWord - найдовше слово.
  */
function findLongestWord(arr) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні, повертаємо пустий рядок
  if (!Array.isArray(arr)) {
    return "";
  }
  // Використовуємо метод reduce() для знаходження найдовшого слова
  const longestWord = arr.reduce((longest, word) => {
    // Порівнюємо довжину поточного слова з довжиною найдовшого слова
    if (word.length > longest.length) {
      return word;
    }
    // Інакше повертаємо попереднє найдовше слово без змін
    return longest;
  }, "");
  // Повертаємо найдовше слово
  return longestWord;
}
console.log("Завдання: 15 ==============================");
console.log(findLongestWord(["apple", "banana", "pineapple", "watermelon"])); // Виведе 'watermelon'

// Завдання: 16

/**

Функція findDuplicateElements приймає масив чисел і повертає новий масив, в якому лише дубльовані елементи.
Використовується методи filter(), indexOf() та lastIndexOf() для реалізації.
@param {Array} arr - вхідний масив чисел.
@returns {Array} duplicateElements - новий масив, в якому лише дубльовані елементи.
*/
function findDuplicateElements(arr) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні, повертаємо пустий масив
  if (!Array.isArray(arr)) {
    return [];
  }
  // Використовуємо метод filter() для вибірки лише дубльованих елементів
  const duplicateElements = arr.filter((num, index) => {
    // Перевіряємо, чи є індекс поточного елемента відмінним від індексу першого входження елемента
    return arr.indexOf(num) !== index;
  });
  // Повертаємо новий масив з дубльованими елементами
  return duplicateElements;
}
console.log("Завдання: 16 ==============================");
console.log(findDuplicateElements([1, 2, 3, 4, 2, 5, 6, 3, 5])); // Виведе [2, 3, 5]

// Завдання: 17

/**

Функція capitalizeWords приймає масив рядків і повертає новий масив, де кожне слово має першу літеру у верхньому регістрі.
Використовується метод map(), рядкові методи та логіка для реалізації.
@param {Array} arr - вхідний масив рядків.
@returns {Array} capitalizedArray - новий масив, де кожне слово має першу літеру у верхньому регістрі.
*/
function capitalizeWords(arr) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні, повертаємо пустий масив
  if (!Array.isArray(arr)) {
    return [];
  }
  // Використовуємо метод map() для перетворення кожного слова в рядку з першою великою літерою
  const capitalizedArray = arr.map((word) => {
    // Перетворюємо першу літеру слова у верхній регістр да додамо до неї всі символи слова крім першого
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    //Повертаємо слово
    return capitalizedWord;
  });
  // Повертаємо новий масив зі словами, у яких перша літера у верхньому регістрі
  return capitalizedArray;
}
console.log("Завдання: 17 ==============================");
console.log(capitalizeWords(["apple", "banana", "orange"])); // Виведе ['Apple', 'Banana', 'Orange']

// Завдання: 18

/**
  
  Функція calculateTotalPrice приймає масив об'єктів товарів і повертає загальну ціну всіх товарів.
  Кожен об'єкт товару має властивість price - ціна товару.
  Використовується метод reduce() для реалізації.
  @param {Array} arr - вхідний масив об'єктів товарів.
  @returns {number} totalPrice - загальна ціна всіх товарів.
  */
function calculateTotalPrice(arr) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні, повертаємо 0
  if (!Array.isArray(arr)) {
    return 0;
  }
  // Використовуємо метод reduce() для обчислення загальної ціни
  const totalPrice = arr.reduce((total, product) => {
    // Додаємо ціну товару до загальної суми
    return total + product.price;
  }, 0);
  // Повертаємо загальну ціну всіх товарів
  return totalPrice;
}
console.log("Завдання: 18 ==============================");
console.log(
  calculateTotalPrice([
    { name: "apple", price: 1 },
    { name: "banana", price: 2 },
    { name: "orange", price: 3 },
  ])
); // Виведе 6

// Завдання: 19

/**

Функція findLastNegativeNumberIndex приймає масив чисел і повертає індекс останнього від'ємного числа.
Використовується метод findLastIndex() для реалізації.
@param {Array} arr - вхідний масив чисел.
@returns {number} lastIndex - індекс останнього від'ємного числа.
*/
function findLastNegativeNumberIndex(arr) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні, повертаємо -1
  if (!Array.isArray(arr)) {
    return -1;
  }
  // Використовуємо метод findLastIndex() для знаходження індексу останнього входження від'ємного числа
  const lastIndex = arr.findLastIndex((num) => num < 0);
  // Повертаємо індекс останнього від'ємного числа
  return lastIndex;
}
console.log("Завдання: 19 ==============================");
console.log(findLastNegativeNumberIndex([1, 2, -3, 4, -5, 6, -7])); // Виведе 6

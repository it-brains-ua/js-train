// Завдання 1
// В даному завданні створимо функцію, яка використовує метод `Array.from` для створення масиву зі списку користувачів з бази даних.

/**
 * Функція `getUsersFromDatabase` отримує дані користувачів та використовує метод `Array.from` для створення масиву користувачів зі списку.
 * array - Вхідний масив
 * Повертає: Масив користувачів.
 */
function getUsersFromDatabase(array) {
  // Використовуємо метод `Array.from` для створення масиву користувачів зі списку
  const users = Array.from(array, (record) => {
    //повертаємо об'єкт який міститись id який дорівнює id користувача,firstName який дорівнює firstName користувача в верхньому регістрі та years який дорівнює age користувача
    return {
      id: record.id,
      firstName: record.name.toUpperCase(),
      years: record.age,
    };
  });

  // Повертаємо масив користувачів
  return users;
}

// Приклад використання функції getUsersFromDatabase
const userRecords = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 28 },
  { id: 3, name: "Mike", age: 32 },
];
console.log("Завдання: 1 ==============================");

console.log(getUsersFromDatabase(userRecords));
// Виведе
// [
//   { id: 1, firstName: 'JOHN', years: 30 },
//   { id: 2, firstName: 'JANE', years: 28 },
//   { id: 3, firstName: 'MIKE', years: 32 }
// ]

// Завдання:2 - Видалення останнього елементу з масиву

/**
 * Функція `removeLastElement` видаляє останній елемент з масиву, використовуючи метод `pop`.
 * Якщо масив порожній, повертає `undefined`.
 *  arr - Вхідний масив, з якого буде видалений останній елемент.
 * Повертає Видалений останній елемент або `undefined`, якщо масив порожній.
 */
function removeLastElement(arr) {
  // Перевіряємо, чи масив не є порожнім
  if (arr.length === 0) {
    console.log("Масив порожній");
    return undefined;
  }

  // Використовуємо метод `pop` для видалення останнього елементу з масиву
  arr.pop();

  // Повертаємо оновлений масив
  return arr;
}

// Приклад використання функції removeLastElement
console.log("Завдання: 2 ==============================");

console.log(removeLastElement([1, 2, 3, 4, 5])); // Виведе [1, 2, 3, 4]

// Завдання: 3 - Фільтрація масиву за певною умовою

/**
 * Функція `filterByCondition` фільтрує вхідний масив за певною умовою, використовуючи метод `filter`.
 *  arr - Вхідний масив, який буде фільтруватись.
 * condition - Функція-умова, яка визначає, чи задовольняє елемент умові.
 * Повертає: Новий масив, який містить елементи, що задовольняють умову.
 */
function filterByCondition(arr, condition) {
  // Використовуємо метод `filter` для фільтрації масиву
  const filteredArray = arr.filter((item) => condition(item));

  // Повертаємо відфільтрований масив
  return filteredArray;
}

// Приклад використання функції filterByCondition

let condition = (item) => item % 2 === 0; // Фільтруємо парні числа
console.log("Завдання: 3 ==============================");
console.log(filterByCondition([1, 2, 3, 4, 5], condition)); // Виведе [2, 4]

// Завдання: 4

/**
 * Функція `checkArray` перевіряє, чи є вхідний об'єкт масивом, використовуючи метод `Array.isArray`.
 *  obj - Вхідний об'єкт, який буде перевірятись.
 *Повертає: `true`, якщо об'єкт є масивом, `false` - у протилежному випадку.
 */
function checkArray(obj) {
  // Перевіряємо, чи є об'єкт не null і не undefined
  if (obj !== null && obj !== undefined) {
    // Використовуємо метод `Array.isArray` для перевірки, чи є об'єкт масивом
    const isArray = Array.isArray(obj);
    // Повертаємо результат перевірки
    return isArray;
  } else {
    // Якщо об'єкт є null або undefined, виводимо повідомлення про помилку Помилка: Вхідний об'єкт є null або undefined.
    console.log("Помилка: Вхідний об'єкт є null або undefined.");
    //Повертаємо false
    return false;
  }
}

// Приклад використання функції checkArray
console.log("Завдання:4 ==============================");
console.log(checkArray([1, 2, 3, 4, 5])); // Виведе true

// Завдання:5 - Створення нового масиву з переданих елементів

/**
 * Функція `createArray` створює новий масив з переданих елементів, використовуючи метод `Array.of`.
 * Повертає: elements - Елементи, з яких буде створений новий масив.
 * Повертає: Новий масив з переданих елементів.
 */
function createArray(...elements) {
  // Перевіряємо, чи кількість переданих елементів більше нуля
  if (elements.length > 0) {
    // Використовуємо метод `Array.of` для створення нового масиву з переданих елементів
    const newArray = Array.of(...elements);

    // Повертаємо створений масив

    return newArray;
  } else {
    // Якщо не передано жодного елементу, виводимо повідомлення про помилку
    console.log("Помилка: Не передано жодного елементу.");
    //Повертаємо пустий масив
    return [];
  }
}

// Приклад використання функції createArray
console.log("Завдання:5 ==============================");
console.log(createArray(1, 2, 3, 4, 5)); // Виведе [1, 2, 3, 4, 5]

// Завдання: 6 - Отримання елементу масиву за заданим індексом

/**
 * Функція `getElementAtIndex` отримує елемент з масиву за заданим індексом, використовуючи метод `at`.
 *  arr - Вхідний масив.
 *  index - Індекс елементу, який потрібно отримати.
 * Повертає Елемент з масиву за заданим індексом або `undefined`, якщо індекс виходить за межі масиву.
 */
function getElementAtIndex(arr, index) {
  // Перевіряємо, чи масив не є порожнім
  if (arr.length === 0) {
    // Повертаємо undefined
    return undefined;
  }

  // Перевіряємо, чи індекс знаходиться в межах довжини масиву
  if (index >= 0 && index < arr.length) {
    // Отримуємо елемент з масиву за заданим індексом
    let element = arr[index];

    // Повертаємо отриманий елемент

    return element;
  } else {
    // Якщо індекс виходить за межі масиву,повертаємо undefined
    return undefined;
  }
}

// Приклад використання функції getElementAtIndex
console.log("Завдання:6 ==============================");

console.log(getElementAtIndex([1, 2, 3, 4, 5], 2)); // Виведе 3

// Завдання:7

/**
 * Об'єднує два масиви, обертає результат та повертає новий масив.
 *  arr1 - Перший масив.
 *  arr2 - Другий масив.
 * Повертає: Об'єднаний та обернутий масив.
 */
function combineAndReverseArrays(arr1, arr2) {
  // Перевіряємо, чи обидва аргументи є масивами
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    //  Якщо ні повертаємо пустий масив
    return [];
  }

  // Об'єднуємо два масиви за допомогою методу `concat`
  const combinedArray = arr1.concat(arr2);

  // Обертаємо отриманий об'єднаний масив за допомогою методу `reverse`
  const reversedArray = combinedArray.reverse();

  // Повертаємо об'єднаний та обернутий масив
  return reversedArray;
}

// Приклад використання функції combineAndReverseArrays
console.log("Завдання:7 ==============================");

console.log(combineAndReverseArrays([1, 2, 3], [4, 5, 6])); //Виведе [ 6, 5, 4, 3, 2, 1 ]

// Завдання: 8

/**
 * Перевіряє, чи масив містить заданий елемент та повертає його індекс(и).
 *  arr - Вхідний масив.
 *  element - Елемент для пошуку.
 * Повертає: Масив індексів, де знайдено елемент, або пустий масив, якщо елемент не знайдено.
 */
function findElementIndexes(arr, element) {
  // Перевіряємо, чи аргумент є масивом
  if (!Array.isArray(arr)) {
    // якщо ні повертаємо пустий масив
    return [];
  }

  // Знаходимо індекс першого знайденого елементу за допомогою методу `indexOf`
  const firstIndex = arr.indexOf(element);

  // Знаходимо індекс останнього знайденого елементу за допомогою методу `lastIndexOf`
  const lastIndex = arr.lastIndexOf(element);

  // Створюємо пустий масив індексів знайдених елементів
  const indexes = [];

  // Додаємо перший знайдений індекс, якщо елемент знайдено
  if (firstIndex !== -1) {
    indexes.push(firstIndex);
  }

  // Додаємо останній знайдений індекс, якщо він відрізняється від першого
  if (lastIndex !== firstIndex) {
    indexes.push(lastIndex);
  }

  // Повертаємо масив індексів
  return indexes;
}

// Приклад використання функції findElementIndexes
console.log("Завдання:8 ==============================");

console.log(findElementIndexes([1, 2, 3, 4, 5, 2], 2)); //Виведе [ 1, 5 ]

// Завдання:9

/**
 * Копіює та переставляє задану кількість елементів з масиву в нове місце за допомогою методу `copyWithin`.
 *  arr - Вхідний масив, з якого будуть копіюватись елементи.
 *  target - Індекс, починаючи з якого розміщувати копійовані елементи.
 *  start - Індекс, з якого починається копіювання елементів.
 *  end - Індекс, на якому закінчується копіювання елементів (не включно).
 * Повертає: Модифікований масив з копійованими та переставленими елементами.
 */
function copyAndSwapElements(arr, target, start, end) {
  // Перевіряємо, чи індекси належать межам масиву
  if (
    start < 0 ||
    start >= arr.length ||
    end < 0 ||
    end > arr.length ||
    target < 0 ||
    target >= arr.length
  ) {
    console.log("Неприпустимі індекси");
    return arr;
  }

  // Копіюємо та переставляємо елементи за допомогою методу `copyWithin`
  arr.copyWithin(target, start, end);

  // Повертаємо модифікований масив
  return arr;
}

// Приклад використання функції copyAndSwapElements

console.log("Завдання:9 ==============================");

console.log(copyAndSwapElements([1, 2, 3, 4, 5], 0, 2, 4)); // Виведе [3, 4, 3, 4, 5]

// Завдання:10
// В даному завданні ми створимо функцію, яка використовує метод `sort` для сортування масиву об'єктів за допомогою певного ключа.

/**
 * Функція `sortByKey` сортує вхідний масив об'єктів за допомогою методу `sort` та заданого ключа.
 *  arr - Вхідний масив об'єктів.
 * Повертає:  Ключ, за яким потрібно сортувати об'єкти.
 * Повертає: Відсортований масив об'єктів.
 */
function sortByKey(arr, key) {
  // Використовуємо метод `sort` передаємо в нього два аргументи a та b, для сортування масиву об'єктів за заданим ключем
  arr.sort((a, b) => {
    // якщо a[key] < b[key] повертаємо -1
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      // якщо a[key] > b[key] повертаємо 1

      return 1;
    }
    // інакше повертаємо 0
    return 0;
  });

  // Повертаємо відсортований масив об'єктів
  return arr;
}

console.log("Завдання: 10 ==============================");

let unsortedArray = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Mike", age: 20 },
];
console.log(sortByKey(unsortedArray, "age"));
// Виведе:
// [
//   { name: 'Mike', age: 20 },
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 30 }
// ]

// Завдання: 11

/**
 * Функція `customEvery` перевіряє, чи всі елементи масиву задовольняють заданому умову за допомогою методу `every`.
 *  arr - Вхідний масив, який буде перевірятись.
 * condition - Функція-умова, яка буде застосовуватись до кожного елементу масиву.
 *Повертає: Результат перевірки.
 */
function customEvery(arr, condition) {
  // Перевірка вхідних параметрів
  if (!Array.isArray(arr)) {
    // якщо arr не масив повертаємо false
    return false;
  }

  if (typeof condition !== "function") {
    // якщо condition не function повертаємо false

    return false;
  }

  // Використання методу `every` для перевірки умови для кожного елементу масиву
  const result = arr.every(condition);

  // Повернення результату перевірки
  return result;
}

const numbers = [2, 4, 6, 8, 10];

console.log("Завдання: 11 ==============================");
console.log(customEvery(numbers, (num) => num % 2 === 0)); // Виведе true

// Завдання: 12

/**
 * Функція `customFill` заповнює вказаний діапазон елементів масиву заданою значенням за допомогою методу `fill`.
 *  arr - Вхідний масив, який буде заповнюватись.
 * value - Значення, яким будуть заповнені елементи масиву.
 *  start - Початковий індекс для заповнення (включно).
 *  end - Кінцевий індекс для заповнення (не включаючи).
 * Повертає: Заповнений масив.
 */
function customFill(arr, value, start = 0, end = arr.length) {
  // Перевірка вхідних параметрів
  if (!Array.isArray(arr)) {
    // якщо arr не масив повертаємо false
    return arr;
  }

  if (start < 0 || end > arr.length || start > end) {
    // якщо start та end не входять в діапазон від 0 до довжини масиву arr повертаємо false
    return false;
  }

  // Використання методу `fill` для заповнення вказаного діапазону елементів масиву заданим значенням
  arr.fill(value, start, end);

  // Повернення заповненого масиву
  return arr;
}

// Приклад використання функції customFill
console.log("Завдання: 12 ==============================");
console.log(customFill([1, 2, 3, 4, 5], 0, 1, 4)); // Виведе [ 1, 0, 0, 0, 5 ]

// Завдання: 13

/**
 * Функція `customShift` видаляє перший елемент з масиву за допомогою методу `shift`.
 * arr - Вхідний масив, з якого буде видалено перший елемент.
 * Повертає - Видалений елемент та оновлений масив або undefined, якщо масив порожній.
 */
function customShift(arr) {
  // перевірка на масив,якщо ні повертаємо undefined
  if (!Array.isArray(arr)) {
    return undefined;
  }

  // перевірка чи масив не пустий,якщо так повертаємо undefined
  if (arr.length === 0) {
    console.log("Масив порожній.");
    return undefined;
  }

  // видаляємо перший елемент та записуємо його в змінну shiftedElement
  const shiftedElement = arr.shift();

  // повертаємо об'єкт { shiftedElement, arr }

  return { shiftedElement, arr };
}

// Приклад використання функції customShift

console.log("Завдання: 13 ==============================");

console.log(customShift([1, 2, 3, 4, 5])); // Виведе { shiftedElement: 1, arr: [ 2, 3, 4, 5 ] }

// Завдання: 14

/**
 * Функція `customUnshift` додає один або більше елементів на початок масиву за допомогою методу `unshift`.
 *  arr - Вхідний масив, до якого будуть додані елементи.
 *  elements - Елементи, які будуть додані на початок масиву.
 *  Нова довжина масиву після додавання елементів.
 */
function customUnshift(arr, ...elements) {
  // Перевіряємо, чи вхідний параметр є масивом
  if (!Array.isArray(arr)) {
    return;
  }

  // Зберігаємо початкову довжину масиву в змінну initialLength
  const initialLength = arr.length;

  // Додаємо елементи на початок масиву за допомогою методу `unshift` та циклу for, початкове значення лічильника на 1 менше ніж довжина масива,
  // при кожній ітерації лічильник зменшуємо на 1 та продовжуємо поки лічильник більше, або дорівнює нулю
  for (let i = elements.length - 1; i >= 0; i--) {
    arr.unshift(elements[i]);
  }

  // Отримуємо нову довжину масиву
  const newLength = arr.length;

  // повертаємо об'єкт {initialLength, newLength, arr }

  return { initialLength, newLength, arr };
}

console.log("Завдання: 14 ==============================");

console.log(customUnshift([2, 3, 4, 5], 1, 0)); // Виведе { initialLength: 4, newLength: 6, arr: [ 1, 0, 2, 3, 4, 5 ] }

//--------------------------------------

// Завдання: 15

/**
 * Функція `customSome` перевіряє, чи хоча б один елемент масиву задовольняє задану умову за допомогою методу `some`.
 *  arr - Вхідний масив, який буде перевірятись.
 * @param {Function} condition - Функція-умова, яка буде застосовуватись до кожного елементу масиву.
 * Повертає: Результат перевірки.
 */
function customSome(arr, condition) {
  // Перевіряємо, чи вхідний параметр є масивом якщо ні повертаємо false
  if (!Array.isArray(arr)) {
    return false;
  }

  // Перевіряємо, чи condition є функцією  якщо ні повертаємо false
  if (typeof condition !== "function") {
    return false;
  }

  // Використовуємо метод `some` для перевірки умови хоча б для одного елементу масиву
  const result = arr.some(condition);

  // Повертаємо результат перевірки
  return result;
}
console.log("Завдання: 15 ==============================");

const isEven = (number) => number % 2 === 0;
console.log(customSome([1, 2, 3, 4, 5], isEven));
// Виведе true

// Завдання: 16

/**

Функція customAt повертає елемент масиву за заданим індексом.
 arr - Вхідний масив, з якого буде отриманий елемент.
@param {number} index - Індекс елементу, який потрібно отримати.
@returns {any} - Елемент масиву або undefined, якщо індекс виходить за межі масиву.
*/
function customAt(arr, index) {
  // Перевіряємо, чи вхідний параметр є масивом якщо ні повертаємо undefined
  if (!Array.isArray(arr)) {
    return undefined;
  }
  // Перевіряємо, чи індекс виходить за межі масиву якщо ні повертаємо undefined
  if (index < 0 || index >= arr.length) {
    return undefined;
  }

  // Отримуємо елемент масиву за заданим індексом
  const element = arr.at(index);

  // перевіремо якого типу елемент ми отримали,якщо рядок виведом в консоль -Елемент є рядком,числом - Елемент є числом, об`єктом -Елемент є обєктом
  if (typeof element === "string") {
    console.log("Елемент є рядком.");
  } else if (typeof element === "object") {
    console.log("Елемент є обєктом.");
  } else if (typeof element === "number") {
    console.log("Елемент є числом.");
  }

  return element;
}

console.log("Завдання: 16 ==============================");
console.log(customAt([1, 2, 3, 4, 5], 2));
// Виведе
// Елемент є числом.
// 3

//--------------------------------------

// Завдання 17

/**
  
  Функція customIncludes перевіряє, чи масив містить заданий елемент за допомогою методу includes.
   arr - Вхідний масив, який буде перевірятись.
   element - Елемент, наявність якого перевіряється.
  Повертає: Результат перевірки.
  */
function customIncludes(arr, element) {
  // Перевіряємо, чи вхідний параметр є масивом
  if (!Array.isArray(arr)) {
    console.log("Помилка: Вхідний параметр має бути масивом.");
    return false;
  }
  // Використовуємо метод includes для перевірки наявності елемента в масиві
  const result = arr.includes(element);

  // За допомогою методу filter перевіряємо скільки разів в масиві зустрічається елемент та виводимо число в консоль
  const count = arr.filter((item) => item === element).length;
  console.log(count);

  //Повертаємо результат
  return result;
}

console.log("Завдання: 17 ==============================");
console.log(customIncludes(["apple", "banana", "orange", "apple"], "banana"));
// Виведе
// 1
// true

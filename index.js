//Завдання 1: Функція для створення символу
function createSymbol() {
  // Створюємо символ без опису
  return Symbol();
}

console.log("Завдання 1 ====================================");
let symbol1 = createSymbol(); // Створюємо новий символ
console.log(symbol1); // Виведе символ

//Завдання 2: Функція для створення символу з описом та виведення опису
function createSymbolWithDescription() {
  // Створюємо символ symbol з описом 'My symbol'
  let symbol = Symbol("My symbol");
  //Повертаємо опис символа symbol
  return symbol.description;
}

console.log("Завдання 2 ====================================");
console.log(createSymbolWithDescription); // Виводить опис символу

// Завдання 3: Створення властивостей об'єкту з використанням Symbol
// В даному завданні ми створимо властивість об'єкту, ключ якої буде символом.

// Створимо функцію, яка створює об'єкт з властивістю, ключ якої є символом
function createSymbolProperty() {
  // Створимо змінну sym яка дорівнює символу з описом "property"
  let sym = Symbol("property");

  // Створимо пустий об'єкт
  let obj = {};

  // Додамо властивість до об'єкту, ключем якої буде наш символ, а значенням буде рядок Це властивість об'єкту з використанням символу
  obj[sym] = "Це властивість об'єкту з використанням символу";

  // Повертаємо об'єкт
  return obj;
}

// Створимо функцію, яка виводить значення властивості об'єкту по ключу-символу
function printSymbolProperty(obj, sym) {
  // Виводимо значення властивості об'єкту по ключу-символу
  console.log(obj[sym]);
}

console.log("Завдання 3 ====================================");

// Завдання 4. Перевіримо чи є символи унікальними
// Функція для створення двох символів з однаковим описом та порівнянням
function createAndCompareTwoSymbols(value) {
  // Створюємо два символи з однаковим описом value, та повертаємо результат порівняння двох символів
  return Symbol(value) === Symbol(value);
}

console.log("Завдання 4 ====================================");

console.log(createAndCompareTwoSymbols("My Symbol")); // Виведе false, оскільки кожен символ є унікальним

// Завдання 5: Створення символу з використанням Symbol.for()

// Функція createSymbolForKey створює новий символ за допомогою Symbol.for() та повертає його
function createSymbolForKey(key) {
  // Використовуємо Symbol.for() для створення нового символу symbol зі значенням key
  // Symbol.for() шукає символ в глобальному реєстру символів. Якщо символ з таким ключем вже існує, він повертає його, в іншому випадку створює новий символ з даним ключем та додає його в реєстр
  let symbol = Symbol.for(key);

  // Повертаємо створений символ
  return symbol;
}

// Функція compareSymbolsForKey порівнює два символи за допомогою оператора '==='
function compareSymbolsForKey(symbol1, symbol2) {
  // Використовуємо оператор '===' для порівняння двох символів
  // Якщо два символи однакові, він поверне true, в іншому випадку - false
  return symbol1 === symbol2;
}

console.log("Завдання 5 ====================================");
let symbol5 = createSymbolForKey("myKey"); // Створюємо новий символ або отримуємо існуючий з глобального реєстру символів
let symbol6 = createSymbolForKey("myKey"); // Створюємо новий символ або отримуємо існуючий з глобального реєстру символів
console.log(compareSymbolsForKey(symbol5, symbol6)); //Виведе: true

// Завдання 6: Використання Symbol.keyFor(sym)

// Функція getSymbolKey приймає символ як аргумент та повертає ключ, який був використаний для його створення в глобальному реєстрі символів
function getSymbolKey(symbol) {
  // Використовуємо Symbol.keyFor(sym) для отримання ключа, який був використаний для створення символу в глобальному реєстрі символів
  // Symbol.keyFor(sym) шукає символ в глобальному реєстрі символів та повертає його ключ, якщо він існує. Якщо символ не існує в глобальному реєстрі, він повертає undefined
  return Symbol.keyFor(symbol);
}

console.log("Завдання 6 ====================================");
let symbolForKey = Symbol.for("myKey"); // Створюємо новий символ або отримуємо існуючий з глобального реєстру символів
console.log(getSymbolKey(symbolForKey)); // Виводимо ключ символу. Виведе: "myKey"

// Завдання 7: Використання Symbol.isConcatSpreadable

// Функція useIsConcatSpreadable використовує властивість Symbol.isConcatSpreadable для вказівки, чи масив розкривається під час конкатенації.

function useIsConcatSpreadable() {
  // Створюємо перший масив array1 зі значеннями 1, 2, 3.
  let array1 = [1, 2, 3];

  // Створюємо другий масив array2 зі значеннями 4, 5, 6.
  let array2 = [4, 5, 6];

  // Встановлюємо властивість Symbol.isConcatSpreadable для масиву array2 в значення false.
  array2[Symbol.isConcatSpreadable] = false;

  // Використовуємо метод concat для об'єднання масивів array1 і array2.
  let concatArray = array1.concat(array2);

  // Повертаємо результат конкатенації.
  return concatArray;
}

console.log("Завдання 7 ====================================");
console.log(useIsConcatSpreadable()); // Виведе [ 1, 2, 3, [ 4, 5, 6, [Symbol(Symbol.isConcatSpreadable)]: false ] ]

// Завдання 8: Використання Symbol.toString

function useSymbolToStringTag() {
  // Створюємо об'єкт myObject.
  let myObject = {};

  // Встановлюємо властивість Symbol.toStringTag об'єкту myObject на значення "CustomObject".
  myObject[Symbol] = "CustomObject";

  // Повертаємо рядкове представлення об'єкта myObject[Symbol].
  return myObject[Symbol].toString();
}

console.log("Завдання 8 ====================================");
console.log(useSymbolToStringTag()); //Виведе CustomObject

// Завдання 9: Використання Symbol.description

// Функція useSymbolDescription використовує властивість Symbol.description для отримання опису символу.

function useSymbolDescription() {
  // Створюємо символ mySymbol зі значенням "mySymbol".
  let mySymbol = Symbol("mySymbol");

  // Отримуємо опис символу mySymbol в змінну symbolDescription за допомогою властивості description.
  let symbolDescription = mySymbol.description;

  // Повертаємо symbolDescription
  return symbolDescription;
}

console.log("Завдання 9 ====================================");
console.log(useSymbolDescription()); //Виведе mySymbol

// Завдання 10: Використання Symbol.iterator

// Об'єкт "myObject" представляє значення   from: 1, to: 7, які можна перебрати
let myObject = {
  from: 1,
  to: 7,

  // Використовуємо Symbol.iterator для створення ітератора всередині об'єкта "myObject"
  [Symbol.iterator]() {
    // this.current присвоюємо this.from
    this.current = this.from;
    return this; // Індекс для ітерації по масиву ключів
  },
  //створюжмо метод "next" який визначає поведінку при кожній ітерації
  next() {
    if (this.current < this.to) {
      // Використовуйте if
      // Якщо current менше to, повертаємо об'єкт з властивістю "value",
      // що містить поточне значення ,та не забуваємо збільшити індекс за допомогою інкремент, і "done" - false, означаючи, що ітерація ще не закінчена
      return { value: this.current++, done: false };
    } else {
      // Якщо індекс вийшов за межі масиву ключів, повертаємо об'єкт з властивістю "done" - true, означаючи, що ітерація закінчена
      return { done: true };
    }
  },
};

// Функція "useSymbolIterator" використовує ітератор для отримання значень об'єкта
function useSymbolIterator() {
  let result = []; // Створюємо масив для зберігання значень

  // Проходимо крізь елементи об'єкта, використовуючи цикл "for...of"
  for (let value of myObject) {
    // Додаємо кожне значення до масиву "result"
    result = [...result, value];
  }

  // Повертаємо масив зі значеннями
  return result;
}

console.log("Завдання 10 ====================================");

console.log(useSymbolIterator()); //Виведе [ 1, 2, 3, 4, 5, 6 ]

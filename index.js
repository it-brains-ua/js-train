// Завдання: 1
/**
 * Функція `createDictionary` створює словник на основі масиву пар ключ-значення.
 * entries - Масив, що містить пари ключ-значення.
 * Повертаємо - Створений словник (Map).
 */
function createDictionary(entries) {
  // Створення порожнього словника
  let dictionary = new Map();

  // Використання методу forEach для перебору масиву пар ключ-значення
  entries.forEach(([key, value]) => {
    // Додавання пари ключ-значення до словника за допомогою методу set
    dictionary.set(key, value);
  });

  return dictionary;
}

// Приклад використання функції createDictionary
console.log("Завдання: 1 ==============================");

console.log(
  createDictionary([
    ["apple", "яблуко"],
    ["banana", "банан"],
    ["orange", "апельсин"],
  ])
);
// Виведе:
// Map(3) {
//   'apple' => 'яблуко',
//   'banana' => 'банан',
//   'orange' => 'апельсин'
// }

// Завдання: 2
/**
 * Функція `iterateDictionary` виконує ітерацію по словнику та виводить його ключі, значення та записи кожного елемента.
 * dictionary - Словник, який потрібно пройтись.
 */
function iterateDictionary(dictionary) {
  // Виведення ключів словника
  console.log("Ключі:");
  // Цикл for...of для кожного ключа з ітератора ключів словника
  for (let key of dictionary.keys()) {
    // Виведення ключа у консоль
    console.log(key);
  }

  // Виведення значень словника
  console.log("Значення:");
  // Цикл for...of для кожного значення з ітератора значень словника
  for (let value of dictionary.values()) {
    // Виведення значення у консоль
    console.log(value);
  }

  // Виведення записів словника
  console.log("Записи:");
  // Цикл for...of для кожного запису з ітератора записів словника
  for (let entry of dictionary.entries()) {
    // Виведення запису у консоль
    console.log(entry);
  }
}

// Приклад використання функції iterateDictionary
console.log("Завдання: 2 ==============================");
iterateDictionary(
  new Map([
    ["apple", "яблуко"],
    ["banana", "банан"],
    ["orange", "апельсин"],
  ])
);

// Виведе:
// Ключі:
// apple
// banana
// orange
// Значення:
// яблуко
// банан
// апельсин
// Записи:
// [ 'apple', 'яблуко' ]
// [ 'banana', 'банан' ]
// [ 'orange', 'апельсин' ]

// Завдання: 3
/**
 * Функція `setValue` встановлює значення для заданого ключа в словнику.
 * dictionary - Словник, в якому потрібно змінити значення.
 * key - Ключ, для якого потрібно встановити значення.
 * value - Нове значення, яке потрібно присвоїти ключу.
 */
function setValue(dictionary, key, value) {
  // Перевірка, чи існує вже ключ у словнику
  if (dictionary.has(key)) {
    // Якщо ключ вже існує, встановлюємо нове значення для нього
    dictionary.set(key, value);
  } else {
    // Якщо ключ не існує, додаємо нову пару ключ-значення до словника
    dictionary.set(key, value);
  }
  return dictionary;
}

// Приклад використання функції setValue
console.log("Завдання: 3 ==============================");

// Встановлення нового значення для ключа "banana"
console.log(
  setValue(
    new Map([
      ["apple", "яблуко"],
      ["banana", "банан"],
      ["orange", "апельсин"],
    ]),
    "banana",
    "новий банан"
  )
);
// Виведе:
// Map(3) {
//   'apple' => 'яблуко',
//   'banana' => 'новий банан',
//   'orange' => 'апельсин'
// }

// Завдання: 4
/**
 * Функція `deleteKey` видаляє ключ та відповідне йому значення зі словника.
 * dictionary - Словник, з якого потрібно видалити ключ.
 * key - Ключ, який потрібно видалити.
 * Повертаємо - true, якщо ключ був успішно видалений, або false, якщо ключ не знайдено.
 */
function deleteKey(dictionary, key) {
  // Перевірка, чи існує ключ у словнику
  if (dictionary.has(key)) {
    // Якщо ключ існує, видаляємо його та відповідне значення
    dictionary.delete(key);
    return true;
  } else {
    // Якщо ключ не знайдено, повертаємо false
    return false;
  }
}

// Приклад використання функції deleteKey
console.log("Завдання: 4 ==============================");

console.log(
  deleteKey(
    new Map([
      ["apple", "яблуко"],
      ["banana", "банан"],
      ["orange", "апельсин"],
    ]),
    "banana"
  )
); // true

// Завдання: 5
/**
 * Функція `getKeysStartingWith` повертає масив ключів словника, які починаються з заданої букви.
 * dictionary - Словник, ключі якого перевіряються.
 * letter - Буква, з якої мають починатися ключі.
 * Повертаємо - Масив ключів, які починаються з заданої букви.
 */
function getKeysStartingWith(dictionary, letter) {
  // Оголошення порожнього масиву для збереження ключів
  let keysStartingWithLetter = [];

  // Перебір ключів словника за допомогою циклу for...of
  for (let key of dictionary.keys()) {
    // Перевірка, чи ключ починається з заданої букви
    if (key.startsWith(letter)) {
      // Якщо ключ починається з заданої букви, додаємо його до масиву
      keysStartingWithLetter.push(key);
    }
  }

  return keysStartingWithLetter;
}

// Приклад використання функції getKeysStartingWith
console.log("Завдання: 5 ==============================");

// Отримання ключів, які починаються з букви "g"
console.log(
  getKeysStartingWith(
    new Map([
      ["apple", "яблуко"],
      ["banana", "банан"],
      ["orange", "апельсин"],
      ["grape", "виноград"],
      ["pear", "груша"],
    ]),
    "g"
  )
); // Виведе: [ 'grape' ]

// Завдання: 6
/**
 * Функція `addKeyValuePairs` додає пари ключ-значення до словника з перевіркою на унікальність ключа.
 * Вона також веде статистику доданих та відхилених ключів.
 * dictionary - Словник, в який потрібно додати пари.
 * entries - Масив пар ключ-значення, які потрібно додати.
 * Повертаємо - Об'єкт, що містить змінений словник, кількість доданих та відхилених ключів.
 */
function addKeyValuePairs(dictionary, entries) {
  // Ведемо статистику доданих та відхилених ключів, для цього створемо змінні added та rejected з початковими значеннями 0
  let added = 0,
    rejected = 0;

  // Використовуємо метод forEach для перебору масиву пар ключ-значення
  entries.forEach(([key, value]) => {
    // Перевіряємо, чи словник вже містить такий ключ за допомогою методу has
    if (!dictionary.has(key)) {
      // Якщо ключ є унікальним, додаємо його до словника за допомогою методу set та збільшимо added на 1
      dictionary.set(key, value);
      added++;
    } else {
      // Якщо ключ не є унікальним, збільшимо rejected на 1
      rejected++;
    }
  });

  // Повертаємо об'єкт з dictionary, added, rejected
  return {
    dictionary,
    added,
    rejected,
  };
}

console.log("Завдання: 6 ==============================");

console.log(
  addKeyValuePairs(
    new Map([
      ["user1", { name: "John", age: 24 }],
      ["user2", { name: "Emma", age: 28 }],
    ]),
    [
      ["user3", { name: "Bob", age: 33 }],
      ["user2", { name: "Alice", age: 25 }],
    ]
  )
);
// Виведе: {
//   dictionary: Map(3)
//   { 'user1' => { name: 'John', age: 24 },
//   'user2' => { name: 'Emma', age: 28 },
//   'user3' => { name: 'Bob', age: 33 } },
//   added: 1,
//   rejected: 1
// }

// Завдання: 7
/**
 * Функція `transformDictionary` перетворює словник в об'єкт, який містить масиви ключів, значень і пар ключ-значення.
 * dictionary - Словник, який потрібно перетворити.
 * Повертаємо - Об'єкт, який містить масиви ключів, значень і пар ключ-значення.
 */
function transformDictionary(dictionary) {
  // Створюємо порожні масиви для ключів (змінна keys), значень (змінна values) і пар ключ-значення (змінна entries)
  let keys = [],
    values = [],
    entries = [];

  // Використовуємо цикл for...of і метод keys для перебору ключів словника
  // Додаємо кожен ключ до масиву keys за допомогою методу push
  for (let key of dictionary.keys()) {
    keys.push(key);
  }

  // Використовуємо цикл for...of і метод values для перебору значень словника
  // Додаємо кожне значення до масиву values за допомогою методу push
  for (let value of dictionary.values()) {
    values.push(value);
  }

  // Використовуємо цикл for...of і метод entries для перебору пар ключ-значення словника
  // Додаємо кожну пару ключ-значення до масиву entries за допомогою методу push
  for (let entry of dictionary.entries()) {
    entries.push(entry);
  }

  // Повертаємо об'єкт, який містить масиви ключів (властивість keys), значень (властивість values) і пар ключ-значення (властивість entries)
  return { keys, values, entries };
}

console.log("Завдання: 7 ==============================");

console.log(
  transformDictionary(
    new Map([
      ["car", "автомобіль"],
      ["bus", "автобус"],
      ["bicycle", "велосипед"],
    ])
  )
);
// Виведе: {
//    keys: [ 'car', 'bus', 'bicycle' ],
//    values: [ 'автомобіль', 'автобус', 'велосипед' ],
//    entries: [
//     [ 'car', 'автомобіль' ],
//     [ 'bus', 'автобус' ],
//     [ 'bicycle', 'велосипед' ]
//   ]
// }

// Завдання: 8
/**
 * Функція `checkPresence` перевіряє наявність заданих ключів у словнику.
 * dictionary - Словник, в якому перевіряємо ключі.
 * keys - Масив ключів, які перевіряємо.
 * Повертаємо - Масив булевих значень: true, якщо ключ присутній у словнику, та false, якщо ключ відсутній.
 */
function checkPresence(dictionary, keys) {
  // Створюємо порожній масив для збереження результатів перевірки
  let presence = [];
  // Використовуємо цикл forEach для перебору масиву ключів
  keys.forEach((key) => {
    // Додаємо результат перевірки (true або false) до масиву presence при наявності ключа у словнику
    presence.push(dictionary.has(key));
  });

  return presence;
}

console.log("Завдання: 8 ==============================");

console.log(
  checkPresence(
    new Map([
      ["car", "автомобіль"],
      ["chair", "стілець"],
      ["computer", "комп'ютер"],
    ]),
    ["car", "book", "chair"]
  )
);
// Виведе: [true, false, true]

// Завдання: 9
/**
 * Функція `getFilteredDictionarySize` повертає кількість елементів в словнику, значення яких відповідають заданому фільтру.
 * dictionary - Словник, розмір якого потрібно отримати.
 * filter - Фільтрувальна функція. Ця функція приймає пару ключ-значення та повертає true, якщо пара відповідає фільтру, або false в іншому випадку.
 * Повертаємо - Розмір фільтрованого словника.
 */
function getFilteredDictionarySize(dictionary, filter) {
  // Створюємо новий Map об'єкт для зберігання елементів, що відповідають фільтру
  let filteredDictionary = new Map();

  // Використовуємо for...of цикл разом з методом entries() для перебору пар [ключ, значення] словника
  for (let [key, value] of dictionary.entries()) {
    // Якщо пара [ключ, значення] відповідає фільтру, додаємо її до фільтрованого словника
    if (filter(key, value)) {
      filteredDictionary.set(key, value);
    }
  }

  // Повертаємо розмір фільтрованого словника, використовуючи властивість size
  return filteredDictionary.size;
}

console.log("Завдання: 10 ==============================");

console.log(
  getFilteredDictionarySize(
    new Map([
      ["Kyiv", 2884000],
      ["Kharkiv", 1446000],
      ["Odesa", 993120],
      ["Dnipro", 990724],
      ["Lviv", 721301],
    ]),
    (key, value) => value > 1000000
  )
);
// Виведе: 2, оскільки лише два міста мають населення більше ніж 1 мільйон

// Завдання: 11
/**
 * Функція `sortByValues` сортує словник за значеннями від найбільшого до найменшого.
 * dictionary - Словник, який потрібно відсортувати.
 * Повертаємо - Відсортований словник.
 */
function sortByValues(dictionary) {
  // Конвертуємо словник в масив пар ключ-значення за допомогою оператора деструктурізації
  let entries = [...dictionary.entries()];

  // Сортуємо масив пар ключ-значення за значеннями в порядку спадання
  entries.sort((a, b) => b[1] - a[1]);

  // Конвертуємо відсортований масив пар ключ-значення назад у словник
  return new Map(entries);
}

console.log("Завдання: 11 ==============================");

console.log(
  sortByValues(
    new Map([
      ["Harry Potter and the Philosopher's Stone", 120000000],
      ["The Little Prince", 200000000],
      ["The Hobbit", 100000000],
      ["And Then There Were None", 100000000],
      ["Dream of the Red Chamber", 100000000],
    ])
  )
);
// Виведе: Map {
// 'The Little Prince' => 200000000,
// 'Harry Potter and the Philosopher's Stone' => 120000000,
// 'The Hobbit' => 100000000,
// 'And Then There Were None' => 100000000,
// 'Dream of the Red Chamber' => 100000000 }

// Завдання: 12
/**
 * Функція `resetDictionary` перевіряє кількість елементів у словнику, та якщо вона більша ніж задана, очищує словник.
 * dictionary - Словник, який потрібно перевірити та можливо очистити.
 * maxSize - Максимально допустима кількість елементів у словнику.
 * Повертаємо - true, якщо словник був очищений, або false в іншому випадку.
 */
function resetDictionary(dictionary, maxSize) {
  // Використовуємо метод size для перевірки кількості елементів у словнику
  if (dictionary.size > maxSize) {
    // Якщо кількість елементів більша ніж максимально допустима, очищуємо словник за допомогою методу clear
    dictionary.clear();

    // Повертаємо true, оскільки словник був очищений
    return true;
  }

  // Повертаємо false, оскільки кількість елементів не перевищує максимально допустиму, тому словник не був очищений
  return false;
}

console.log("Завдання: 12 ==============================");

console.log(
  resetDictionary(
    new Map([
      ["Kyiv", 2884000],
      ["Kharkiv", 1446000],
      ["Odesa", 993120],
      ["Dnipro", 990724],
      ["Lviv", 721301],
    ]),
    3
  )
);
// Виведе: true, оскільки у словнику було 5 елементів, що більше ніж maxSize = 3

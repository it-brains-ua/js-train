// Завдання 1
/**
 * Функція `checkData` перевіряє наявність даних.
 * У випадку помилки, викликається помилка з причиною (cause).
 *
 *  data - вхідні дані.
 */
function checkData(data) {
  try {
    // Якщо об'єкт не пустий повертаємо дані
    if (Object.keys(data).length) {
      return data;
    } else {
      // Інакше створюємо помилку,в якості тексту помилки ми використовуємо рядок "Об'єкт пустий".
      throw new Error("Об'єкт пустий");
    }
  } catch (error) {
    // Якщо виникла помилка, повертаємо її повідомлення.
    return error.message;
  }
}

console.log("Завдання: 1 ==============================");

// Спробуємо отримати дані з неіснуючого URL.
console.log(checkData({}));
// Виведе Об'єкт пустий
console.log(checkData({ name: "John", age: 30, city: "New York" }));
// Виведе { name: 'John', age: 30, city: 'New York' }

// Завдання 2
/**
 * Функція `parseJson` намагається аналізувати вхідний JSON-рядок.
 * Якщо рядок має невірний формат, генерується помилка з відповідним текстом.
 *
 *  jsonStr - JSON-рядок для аналізу.
 */
function parseJson(jsonStr) {
  try {
    // Спроба розпарсити JSON-рядок.
    // Якщо рядок має невірний формат, виникне помилка, яку ми обробляємо у блоку catch.
    let data = JSON.parse(jsonStr);
    // Повертаємо отриманий об'єкт
    return data;
  } catch (error) {
    // Якщо виникла помилка, повертаємо її повідомлення.
    return error.message;
  }
}
console.log("Завдання: 2 ==============================");

// Вхідний JSON-рядок з правильним форматом.
let validJson = '{"name":"John","age":30,"city":"New York"}';
// Вхідний JSON-рядок з неправильним форматом.
let invalidJson = '{"name":"John,"age":30,"city":"New York"}'; // Пропущена закриваюча лапка після "John".

// Спробуємо аналізувати JSON-рядки.
console.log(parseJson(validJson));
// Виведе { name: 'John', age: 30, city: 'New York' }
console.log(parseJson(invalidJson));
// Виведе Unexpected token a in JSON at position 15

// Завдання 3

/**
 * Функція `getAge` отримує вік користувача.
 * Якщо вік користувача менше 0, генерується помилка з відповідним текстом.
 *
 *  age - вік користувача.
 */
function getAge(age) {
  try {
    // Спроба отримати вік користувача.
    // Якщо вік менше 0, виникне помилка, яку ми обробляємо у блоку catch.
    if (age < 0) {
      // Генеруємо помилку, якщо вік менше 0 з повідомленням Вік не може бути менше 0!.
      let error = new Error(`Вік не може бути менше 0!`);

      // До помилки дадаємо властивість name зі значенням "AgeError"
      error.name = "AgeError";

      // Викидаємо помилку
      throw error;
    }
    // Якщо помилки не має повертаємо рядок `Вік користувача: ${age}`
    return `Вік користувача: ${age}`;
  } catch (error) {
    // Якщо виникла помилка, повертаємо об'єкт з name та message помилки.
    return { error: error.message, name: error.name };
  }
}
console.log("Завдання: 3 ==============================");

// Виклик функції з від'ємним віком.
console.log(getAge(-1));
// Виведе { error: 'Вік не може бути менше 0!', name: 'AgeError' }
// Виклик функції з віком 20.
console.log(getAge(20));
// Виведе Вік користувача: 20

// Завдання 4
/**
 * Функція `getBookById` отримує книгу за її ID.
 * Якщо книги з таким ID не існує, генерується TypeError.
 *
 *  books - масив книг.
 *  id - ID книги.
 */
function getBookById(books, id) {
  try {
    // Спроба знайти книгу по ID та записати в змінну book.
    let book = books.find((book) => book.id === id);

    // Якщо книга не знайдена, генерується TypeError з повідомленням Книга з ID ${id} не знайдена!.
    if (!book) {
      throw new TypeError(`Книга з ID ${id} не знайдена!`);
    }

    // Повертаємо book
    return `Книга: ${book.title}`;
  } catch (error) {
    // Повертаємо текстове представлення помилки
    return error.toString();
  }
}
console.log("Завдання: 4 ==============================");

// Виклик функції з неіснуючим ID.

console.log(
  getBookById(
    [
      { id: 1, title: "Книга 1" },
      { id: 2, title: "Книга 2" },
    ],
    3
  )
);
// Виведе TypeError: Книга з ID 3 не знайдена!
console.log(
  getBookById(
    [
      { id: 1, title: "Книга 1" },
      { id: 2, title: "Книга 2" },
    ],
    2
  )
);
// Виведе Книга: Книга 2

// Завдання 5

/**
 * Функція `decodeURIComponentWrapper` виконує декодування рядка `encodedString`
 * з використанням функції `decodeURIComponent`. Якщо сталася помилка URIError,
 * вона перехоплюється та виводиться повідомлення про помилку.
 *
 *  encodedString - Рядок для декодування.
 */
function decodeURIComponentWrapper(encodedString) {
  try {
    // Спроба декодувати рядок
    const decodedString = decodeURIComponent(encodedString);
    // Повертаємо декодований рядок
    return decodedString;
  } catch (error) {
    // Якщо виникла помилка, і ії назва дорівнює URIError повертаємо помилку про неправильний URI формат з повідомленням Помилка декодування URI,
    //  інкше повертаємо текстове представлення помилки
    if (error.name === "URIError") {
      return new URIError(`Помилка декодування URI`);
    } else {
      return new Error(error.toString());
    }
  }
}

console.log("Завдання: 5 ==============================");

console.log(decodeURIComponentWrapper("Hello%20World")); // виведе 'Hello World'
console.log(decodeURIComponentWrapper("%E0%A4%A")); // виведе інформацію про помилку URIError

// Завдання 6
/**
 * Функція `findEvenNumber` знаходить перше число, що ділиться на 2 без остачі в масиві.
 * Якщо такого числа немає, вона кидає помилку.
 *
 *  numbers - Масив чисел для пошуку.
 */
function findEvenNumber(numbers) {
  // Створюємо змінну evenNumber без значення
  let evenNumber;

  try {
    // Шукаємо перше число, що ділиться на 2 без остачі, та записуємо в нашу змінну.
    evenNumber = numbers.find((number) => number % 2 === 0);

    // Якщо такого числа немає, кидаємо помилку з повідомлення У масиві немає чисел, що діляться на 2 без остачі!.
    if (evenNumber === undefined) {
      throw new Error("У масиві немає чисел, що діляться на 2 без остачі!");
    }
    // Якщо число знайдено повертаємо його
    return evenNumber;
  } catch (error) {
    // Виводимо текстове представлення помилки.
    return error.toString();
  } finally {
    // Незалежно від результату, виводимо вихідний масив.
    console.log(numbers);
  }
}

console.log("Завдання: 6 ==============================");
// Виклик функції з масивом чисел.
console.log(findEvenNumber([1, 3, 5]));
// Виведе
// [ 1, 3, 5 ]
// Error: У масиві немає чисел, що діляться на 2 без остачі!;
console.log(findEvenNumber([1, 4, 5]));
// Виведе
// [ 1, 4, 5 ]
// 4

// Завдання 7
/**
 * Функція `validateUser` перевіряє об'єкт користувача на відповідність заданим вимогам.
 * Якщо об'єкт користувача не відповідає вимогам, вона кидає помилку з причиною (cause).
 *
 *  user - Об'єкт користувача для перевірки.
 */
function validateUser(user) {
  try {
    // Перевіряємо, чи існує об'єкт користувача,якщо ні викидуємо помилку з повідомленням "Об'єкт користувача не вказано!".
    if (!user) {
      throw new Error("Об'єкт користувача не вказано!");
    }

    // Перевіряємо, чи існує ім'я користувача,якщо ні викидуємо помилку з повідомленням "Ім'я користувача не вказано!", а як причину вказуємо об'єкт user.
    if (!user.name) {
      throw new Error("Ім'я користувача не вказано!", { cause: user });
    }

    // Перевіряємо, чи існує email користувача,якщо ні викидуємо помилку з повідомленням "Email користувача не вказано!", а як причину вказуємо об'єкт user.
    if (!user.email) {
      throw new Error("Email користувача не вказано!", { cause: user });
    }

    // Якщо всі перевірки пройдено успішно виводимо повідомлення "Об'єкт користувача відповідає всім вимогам."
    console.log("Об'єкт користувача відповідає всім вимогам.");
  } catch (error) {
    // Виводимо повідомлення про помилку та причину помилки.
    console.error(error.message, error.cause);
  }
}

console.log("Завдання: 7 ==============================");

// Виклик функції з неповним об'єктом користувача.
validateUser({ name: "John Doe" });
// Виведе
// Email користувача не вказано! { name: 'John Doe' }

// Завдання 8
/**
 * Функція `calculateSquareRoot` обчислює квадратний корінь з числа.
 * Якщо аргумент не є числом, вона кидає TypeError.
 * Якщо число від'ємне, вона кидає RangeError.
 *
 *  number - Число для обчислення квадратного кореня.
 */
function calculateSquareRoot(number) {
  try {
    // Перевіряємо, чи аргумент є числом, якщо ні викидуємо помилку про невірний тип даних з повідомленням Аргумент має бути числом!".
    if (typeof number !== "number") {
      throw new TypeError("Аргумент має бути числом!");
    }

    // Перевіряємо, чи число не від'ємне, якщо ні викидуємо помилку про тип недопустимий діапазон з повідомленням Число не повинно бути від'ємним!".
    if (number < 0) {
      throw new RangeError("Число не повинно бути від'ємним!");
    }

    // Повертаємо корінь квадратний з вхідного значення
    return Math.sqrt(number);
  } catch (error) {
    // Повертаємо повідомлення про помилку.
    return error.message;
  }
}

console.log("Завдання: 8 ==============================");

console.log(calculateSquareRoot(9));
// Виведе 3
console.log(calculateSquareRoot(-9));
// Виведе Число не повинно бути від'ємним!
console.log(calculateSquareRoot("abc"));
// Виведе Аргумент має бути числом!

// Завдання 9

/**
 * Функція `processData` обробляє масив чисел.
 * Якщо в масиві є не число, вона кидає TypeError.
 *
 *  data - Масив чисел для обробки.
 */
function processData(data) {
  try {
    // Для кожного елемента в масиві
    data.forEach((item, index) => {
      // Перевіряємо, чи елемент є числом
      if (typeof item !== "number") {
        // Якщо елемент не є числом, кидаємо помилку невірного типу даних з повідомленням `Елемент з індексом ${index} має бути числом!`
        throw new TypeError(`Елемент з індексом ${index} має бути числом!`);
      }
    });

    // Повертаємо рядок "Дані успішно оброблені"
    return "Дані успішно оброблені";
  } catch (error) {
    // Виводимо stack trace помилки
    console.error(error.stack);
    // Повертаємо повідомлення помилки
    return error.message;
  }
}

console.log("Завдання: 9 ==============================");

// Викликаємо функцію з правильними даними
console.log(processData([1, 2, 3]));
// Виведе Дані успішно оброблені

// Викликаємо функцію з неправильними даними
console.log(processData([1, "two", 3]));
// Виведе Елемент з індексом 1 має бути числом!

// Завдання 10
/**
 * Функція `evaluateExpression` обчислює результат математичного виразу, переданого у вигляді рядка.
 * Використовується функція `eval` для обчислення виразу. Якщо виникає помилка EvalError,
 * вона перехоплюється та виводиться повідомлення про помилку.
 *
 *  expression - Математичний вираз у вигляді рядка.
 */
function evaluateExpression(expression) {
  try {
    const result = eval(expression); // Обчислення виразу за допомогою функції eval
    // Повертаємо результат розрахунку
    return result;
  } catch (error) {
    // Якщо була виявлена помилка повертаємо помилку при виконанні функції eval
    return new EvalError(error.message);
  }
}

console.log("Завдання: 10 ==============================");

console.log(evaluateExpression("2 + 2")); // виведе 4
console.log(evaluateExpression("10 / hello")); // виведе EvalError: hello is not defined та інформацію про помилку
console.log(evaluateExpression('"Hello" + " World"')); // виведе 'Hello World'

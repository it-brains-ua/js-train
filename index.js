// Завдання 1

/**
 * Функція `complexConvert` отримує об'єкт, включаючи вкладені об'єкти і масиви, і виконує декілька операцій з ним.
 *
 * obj - Об'єкт, який потрібно обробити.
 *
 * Повертає - Новий об'єкт, в якому всі числові значення збільшено на 1.
 */
function complexConvert(obj) {
  // Перетворюємо вхідний об'єкт в JSON рядок.
  let jsonString = JSON.stringify(obj);

  // Перетворюємо JSON рядок назад в об'єкт.
  let newObj = JSON.parse(jsonString);

  // Обходимо отриманий об'єкт і збільшуємо всі числові значення на 1.
  // Це включає значення в об'єктах всередині вхідного об'єкта.

  // Функція для рекурсивної обробки об'єктів
  function incrementNumbersInObject(obj) {
    // Для кожного ключа в об'єкті...
    for (let key in obj) {
      // Якщо тип значення для цього ключа - число...
      if (typeof obj[key] === "number") {
        // Збільшуємо значення на 1.
        obj[key]++;
      }
      // Якщо тип значення для цього ключа - об'єкт...
      else if (typeof obj[key] === "object" && obj[key] !== null) {
        // Викликаємо цю ж функцію рекурсивно для вкладеного об'єкта.
        incrementNumbersInObject(obj[key]);
      }
    }
  }

  // Викликаємо нашу допоміжну функцію для нового об'єкта.
  incrementNumbersInObject(newObj);

  // Повертаємо оброблений об'єкт.
  return newObj;
}
console.log("Завдання: 1 ==============================");

// Приклад використання функції complexConvert
let obj = {
  name: "John",
  age: 30,
  city: "New York",
  grades: {
    math: 90,
    science: 80,
    history: 70,
  },
  siblings: ["Mark", "Lucy"],
  pets: null,
  isActive: true,
};

console.log(complexConvert(obj));
// Виведе
// {
//   name: 'John',
//   age: 31,
//   city: 'New York',
//   grades: { math: 91, science: 81, history: 71 },
//   siblings: [ 'Mark', 'Lucy' ],
//   pets: null,
//   isActive: true
// }

// Завдання 2

/**
 * Функція `manipulateUrl` приймає URL у вигляді рядка і виконує над ним різні операції.
 *
 * url - URL у вигляді рядка.
 *
 * Повертає об'єкт, що містить різні властивості URL.
 *  href: // Повний URL.
    protocol: // Протокол URL.
    host:  // Хост URL.
    pathname // Шлях URL.
    search // Рядок запиту URL.
    params: Параметри URL у вигляді масиву пар [ключ, значення].
 */
function manipulateUrl(url) {
  // Створюємо новий об'єкт URL.
  let urlObj = new URL(url);

  // Змінюємо протокол URL на https.
  urlObj.protocol = "https";

  // Змінюємо хост URL на 'newhost.com'.
  urlObj.host = "newhost.com";

  // Додаємо параметр 'newParam' зі значенням 'newValue' до URL.
  urlObj.searchParams.append("newParam", "newValue");

  // Видаляємо параметр 'oldParam' з URL, якщо він існує.
  if (urlObj.searchParams.has("oldParam")) {
    urlObj.searchParams.delete("oldParam");
  }

  // Повертаємо об'єкт, який містить різні властивості URL.
  return {
    href: urlObj.href, // Повний URL.
    protocol: urlObj.protocol, // Протокол URL.
    host: urlObj.host, // Хост URL.
    pathname: urlObj.pathname, // Шлях URL.
    search: urlObj.search, // Рядок запиту URL.
    params: [...urlObj.searchParams.entries()], // Параметри URL у вигляді масиву пар [ключ, значення].
  };
}

console.log("Завдання: 2 ==============================");

// Приклад використання функції manipulateUrl
let url = "http://example.com/path?param1=value1&param2=value2";

console.log(manipulateUrl(url));
// Виведе
// {
//   href: 'https://newhost.com/path?param1=value1&param2=value2&newParam=newValue',
//   protocol: 'https:',
//   host: 'newhost.com',
//   pathname: '/path',
//   search: '?param1=value1&param2=value2&newParam=newValue',
//   params: [
//     [ 'param1', 'value1' ],
//     [ 'param2', 'value2' ],
//     [ 'newParam', 'newValue' ]
//   ]
// }

// Завдання 3

/**
 * Функція `searchParamsURL` повинна створювати новий об'єкт URL з вхідної URL-адреси.
 * url (рядок) - URL-адреса, яку необхідно проаналізувати.
 *
 * Функція повертає новий об'єкт, який містить наступні ключі:
 * - 'params': параметри пошуку URL (використовуючи властивість 'searchParams' об'єкта URL).
 * Це об'єкт, де ключ - це ім'я параметра, а значення - це значення параметра.
 */
function searchParamsURL(url) {
  // Створюємо новий об'єкт URL з вхідного рядка.
  let urlObj = new URL(url);

  // Отримуємо об'єкт URLSearchParams з властивості 'searchParams' об'єкта URL.
  let searchParams = urlObj.searchParams;

  // Створюємо об'єкт 'params', який буде містити параметри пошуку.
  let params = {};

  // За допомогою циклу for...of перебираємо всі параметри пошуку з 'searchParams' та додаємо їх до об'єкта 'params'.
  for (let param of searchParams) {
    // Кожен 'param' - це масив, де [0] - ім'я параметра, а [1] - значення параметра.
    params[param[0]] = param[1];
  }

  // Повертаємо об'єкт 'params', який містить всі параметри пошуку URL.
  return { params: params };
}

console.log("Завдання: 3 ==============================");

// Демонстрація використання функції:
console.log(
  searchParamsURL(
    "https://example.com/pathname?param1=value1&param2=value2&param3=value3"
  )
);
//Виведе { params: { param1: 'value1', param2: 'value2', param3: 'value3' } }

// Завдання 4

/**
 * Функція `manipulateSearchParams` повинна приймати об'єкт з параметрами та нову URL-адресу.
 * paramsObj (об'єкт) - об'єкт, який містить параметри пошуку.
 * newUrl (рядок) - нова URL-адреса.
 *
 * Функція повертає нову URL-адресу з властивістю searchParams, оновленою за допомогою параметрів з paramsObj.
 */
function manipulateSearchParams(paramsObj, newUrl) {
  // Створюємо новий об'єкт URL з нової URL-адреси.
  let urlObj = new URL(newUrl);

  // Використовуючи метод 'keys' з об'єкта Object, отримуємо всі ключі paramsObj.
  let keys = Object.keys(paramsObj);

  // За допомогою циклу 'for of' перебираємо всі ключі та додаємо параметри пошуку до urlObj.
  for (let key of keys) {
    urlObj.searchParams.set(key, paramsObj[key]);
  }

  // Повертаємо нову URL-адресу в рядковому форматі.
  return urlObj.toString();
}

// Приклад використання функції manipulateSearchParams
console.log("Завдання: 4 ==============================");

console.log(
  manipulateSearchParams(
    { param1: "value1", param2: "value2" },
    "https://example.com/pathname"
  )
);
// Виведе: https://example.com/pathname?param1=value1&param2=value2

// Завдання 5

/**
 * Функція `deleteSearchParams` повинна приймати масив ключів параметрів і URL-адресу.
 * keys (масив) - масив, який містить ключі параметрів пошуку для видалення.
 * url (рядок) - URL-адреса.
 *
 * Функція повертає нову URL-адресу, з якої були видалені вказані параметри пошуку.
 */
function deleteSearchParams(keys, url) {
  // Створюємо новий об'єкт URL з URL-адреси.
  let urlObj = new URL(url);

  // За допомогою циклу 'for of' перебираємо всі ключі та видаляємо відповідні параметри пошуку з urlObj.
  for (let key of keys) {
    urlObj.searchParams.delete(key);
  }

  // Повертаємо нову URL-адресу в рядковому форматі.
  return urlObj.toString();
}

// Приклад використання функції deleteSearchParams
console.log("Завдання: 5 ==============================");

console.log(
  deleteSearchParams(
    ["param1", "param2"],
    "https://example.com/pathname?param1=value1&param2=value2"
  )
);
// Виведе: https://example.com/pathname

// Завдання 6

/**
 * Функція `createURLWithParams` приймає об'єкт параметрів пошуку та базову URL-адресу.
 * params (об'єкт) - об'єкт, ключі та значення якого стануть параметрами пошуку нової URL-адреси.
 * url (рядок) - базова URL-адреса.
 *
 * Функція повертає нову URL-адресу, до якої додані параметри пошуку з об'єкта params.
 */
function createURLWithParams(params, url) {
  // Створюємо новий об'єкт URL з базової URL-адреси.
  let urlObj = new URL(url);

  // За допомогою циклу 'for in' перебираємо всі ключі та значення об'єкта params та додаємо їх як параметри пошуку до urlObj.
  for (let key in params) {
    urlObj.searchParams.set(key, params[key]);
  }

  // Повертаємо нову URL-адресу в рядковому форматі.
  return urlObj.toString();
}

// Приклад використання функції createURLWithParams
console.log("Завдання: 6 ==============================");

console.log(
  createURLWithParams(
    { param1: "value1", param2: "value2" },
    "https://example.com"
  )
);
// Виведе: https://example.com/?param1=value1&param2=value2

// Завдання 7

/**
 * Функція `updateURLHash` приймає URL-адресу та рядок, і оновлює значення хеша в URL-адресі.
 * url (рядок) - URL-адреса, яку треба оновити.
 * hash (рядок) - нове значення хеша.
 *
 * Функція повертає нову URL-адресу з оновленим хешем.
 */
function updateURLHash(url, hash) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  let urlObj = new URL(url);

  // Оновлюємо значення хеша в URL-адресі.
  urlObj.hash = hash;

  // Повертаємо нову URL-адресу в рядковому форматі.
  return urlObj.toString();
}

// Приклад використання функції updateURLHash
console.log("Завдання: 7 ==============================");

console.log(updateURLHash("https://example.com", "newHash"));
// Виведе: https://example.com/#newHash

// Завдання 8

/**
 * Функція `appendSearchParam` приймає URL-адресу, ключ і значення та додає новий параметр пошуку до URL-адреси.
 * url (рядок) - URL-адреса, до якої треба додати новий параметр пошуку.
 * key (рядок) - ключ нового параметра пошуку.
 * value (рядок) - значення нового параметра пошуку.
 *
 * Функція повертає нову URL-адресу з доданим параметром пошуку.
 */
function appendSearchParam(url, key, value) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  let urlObj = new URL(url);

  // Додаємо новий параметр пошуку до URL-адреси.
  urlObj.searchParams.append(key, value);

  // Повертаємо нову URL-адресу в рядковому форматі.
  return urlObj.toString();
}

// Приклад використання функції appendSearchParam
console.log("Завдання: 8 ==============================");

console.log(appendSearchParam("https://example.com", "newParam", "newValue"));
// Виведе: https://example.com/?newParam=newValue

// Завдання 9

/**
 * Функція `modifyURLParameters` приймає URL та об'єкт з параметрами пошуку.
 * Функція додає ці параметри до URL, а якщо такий параметр вже існує, замінює його.
 * url (рядок) - URL, який треба змінити.
 * params (об'єкт) - об'єкт, ключі якого є назвами параметрів, а значення - значеннями цих параметрів.
 *
 * Функція повертає нову URL-адресу з оновленими параметрами пошуку.
 */
function modifyURLParameters(url, params) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  let urlObj = new URL(url);

  // Перебираємо об'єкт params.
  for (let [key, value] of Object.entries(params)) {
    // Якщо параметр вже існує, метод set замінює його новим значенням.
    // Якщо параметр не існує, метод set додає його.
    urlObj.searchParams.set(key, value);
  }

  // Повертаємо нову URL-адресу в рядковому форматі.
  return urlObj.toString();
}

// Приклад використання функції modifyURLParameters
console.log("Завдання: 9 ==============================");

console.log(
  modifyURLParameters("https://example.com/?param1=oldValue1", {
    param1: "newValue1",
    param2: "newValue2",
  })
);
// Виведе: https://example.com/?param1=newValue1&param2=newValue2

// Завдання 10

/**
 * Функція `checkURLParameters` приймає URL та об'єкт з параметрами пошуку.
 * Функція перевіряє, чи є ці параметри в URL.
 * url (рядок) - URL, який потрібно перевірити.
 * params (об'єкт) - об'єкт, ключі якого є назвами параметрів, які потрібно перевірити.
 *
 * Функція повертає новий об'єкт, ключі якого відповідають ключам вхідного об'єкта,
 * а значеннями є булеві значення, що вказують на наявність відповідного параметра в URL.
 */
function checkURLParameters(url, params) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  let urlObj = new URL(url);

  // Створюємо новий об'єкт для зберігання результатів.
  let result = {};

  // Перебираємо об'єкт params.
  for (let key of Object.keys(params)) {
    // Додаємо новий ключ в результат з булевим значенням, яке вказує, чи є параметр в URL.
    result[key] = urlObj.searchParams.has(key);
  }

  // Повертаємо об'єкт з результатами.
  return result;
}

// Приклад використання функції checkURLParameters
console.log("Завдання: 10 ==============================");

console.log(
  checkURLParameters("https://example.com/?param1=value1&param2=value2", {
    param1: "",
    param2: "",
    param3: "",
  })
);
// Виведе: { param1: true, param2: true, param3: false }

// Завдання 11

/**
 * Функція `processURL` приймає URL та об'єкт з параметрами та налаштуваннями для обробки URL.
 * url (рядок) - URL, який потрібно обробити.
 * options (об'єкт) - об'єкт, який містить параметри та налаштування для обробки URL.
 *
 * Функція повертає новий URL, який було сформовано на основі вхідного URL і параметрів обробки.
 */
function processURL(url, options) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  let urlObj = new URL(url);

  // Якщо в опціях вказано параметри пошуку, додаємо їх до URL.
  if (options.searchParams) {
    for (let key in options.searchParams) {
      urlObj.searchParams.append(key, options.searchParams[key]);
    }
  }

  // Якщо в опціях вказано протокол, змінюємо протокол URL.
  if (options.protocol) {
    urlObj.protocol = options.protocol;
  }

  // Якщо в опціях вказано хост, змінюємо хост URL.
  if (options.host) {
    urlObj.host = options.host;
  }

  // Повертаємо об'єкт URL у вигляді рядка.
  return urlObj.toString();
}

// Приклад використання функції processURL
console.log("Завдання: 11 ==============================");

console.log(
  processURL("https://example.com/path", {
    searchParams: { param1: "value1", param2: "value2" },
    protocol: "http:",
    host: "newexample.com",
  })
);
// Виведе: 'http://newexample.com/path?param1=value1&param2=value2'

// Завдання 12

/**
 * Функція `processURL` приймає URL та об'єкт з параметрами та налаштуваннями для обробки URL.
 * url (рядок) - URL, який потрібно обробити.
 * options (об'єкт) - об'єкт, який містить параметри та налаштування для обробки URL.
 *
 * Функція повертає новий URL, який було сформовано на основі вхідного URL і параметрів обробки.
 */
function processUrl(url, options) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  let urlObj = new URL(url);

  // Перевіряємо, чи в об'єкті 'options' є параметри пошуку.
  if (options.searchParams) {
    // Якщо є, перебираємо ці параметри за допомогою циклу 'for in'.
    for (let key in options.searchParams) {
      // Для кожного ключа параметру додаємо його та відповідне значення до об'єкта 'urlObj' за допомогою методу 'append'.
      urlObj.searchParams.append(key, options.searchParams[key]);
    }
  }

  // Перевіряємо, чи в об'єкті 'options' є протокол.
  if (options.protocol) {
    // Якщо є, змінюємо протокол 'urlObj' на протокол з 'options'.
    urlObj.protocol = options.protocol;
  }

  // Перевіряємо, чи в об'єкті 'options' є хост.
  if (options.host) {
    // Якщо є, змінюємо хост 'urlObj' на хост з 'options'.
    urlObj.host = options.host;
  }

  // Повертаємо 'urlObj' у вигляді рядка за допомогою методу 'toString'.
  return urlObj.toString();
}

// Приклад використання функції processURL
console.log("Завдання: 12 ==============================");

console.log(
  processUrl("https://example.com/path", {
    searchParams: { param1: "value1", param2: "value2" },
    protocol: "http:",
    host: "newexample.com",
  })
);
// Виведе: 'http://newexample.com/path?param1=value1&param2=value2'

// Завдання 13

/**
 * Функція `manipulateQuery` отримує URL та об'єкт з додатковими налаштуваннями та працює над пошуковими параметрами URL.
 * @url (рядок) - URL для обробки.
 * @options (об'єкт) - об'єкт з налаштуваннями. Включає ключі `append` та `delete`.
 *
 * Функція повертає новий URL з модифікованими пошуковими параметрами.
 */
function manipulateQuery(url, options) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  let urlObj = new URL(url);

  // Якщо в об'єкті `options` є ключ `append`...
  if (options.append) {
    // ...перебираємо його ключі та значення за допомогою циклу for...of.
    for (let [key, value] of Object.entries(options.append)) {
      // Додаємо кожний ключ і значення до об'єкта `searchParams` в URL.
      urlObj.searchParams.append(key, value);
    }
  }

  // Якщо в об'єкті `options` є ключ `delete`...
  if (options.delete) {
    // ...перебираємо його значення за допомогою циклу for...of.
    for (let value of options.delete) {
      // Видаляємо кожний ключ з об'єкта `searchParams` в URL.
      urlObj.searchParams.delete(value);
    }
  }

  // Повертаємо новий URL як рядок.
  return urlObj.toString();
}

// Приклад використання функції manipulateQuery
console.log("Завдання: 13 ==============================");

console.log(
  manipulateQuery("https://example.com/path?param1=value1&param2=value2", {
    append: { param3: "value3", param4: "value4" },
    delete: ["param1", "param2"],
  })
);
// Виведе: 'https://example.com/path?param3=value3&param4=value4'

// Завдання 14

/**
 * Функція `getUrlData` приймає URL у вигляді рядка і повертає інформацію про URL.
 * @url (рядок) - URL-адреса для аналізу.
 *
 * Функція повертає об'єкт, що містить наступні ключі:
 * - 'origin': походження URL.
 * - 'hostname': ім'я хоста URL.
 * - 'port': порт URL.
 * - 'username': ім'я користувача в URL.
 * - 'password': пароль в URL.
 */
function getUrlData(url) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  let urlObj = new URL(url);

  // Повертаємо об'єкт з відповідними даними.
  return {
    origin: urlObj.origin,
    hostname: urlObj.hostname,
    port: urlObj.port,
    username: urlObj.username,
    password: urlObj.password,
  };
}

// Приклад використання функції getUrlData
console.log("Завдання: 14 ==============================");
console.log(getUrlData("https://username:password@example.com:8080/path"));
// Виведе:
// {
//   origin: 'https://example.com:8080',
//   hostname: 'example.com',
//   port: '8080',
//   username: 'username',
//   password: 'password'
// }

// Завдання 15

/**
 * Функція `sortUrlParams` приймає URL і повертає новий URL з відсортованими пошуковими параметрами.
 * @url (рядок) - URL-адреса для аналізу.
 *
 * Функція повертає новий URL з відсортованими пошуковими параметрами за ключами у порядку зростання.
 */
function sortUrlParams(url) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  let urlObj = new URL(url);

  // Отримуємо масив з ключами і значеннями параметрів за допомогою методу 'entries'.
  let paramsArray = Array.from(urlObj.searchParams.entries());

  // Сортуємо масив за ключами у порядку зростання.
  paramsArray.sort((a, b) => a[0] - b[0]);

  // Очищуємо пошукові параметри URL.
  urlObj.search = "";

  // Додаємо відсортовані параметри до URL.
  paramsArray.forEach(([key, value]) => {
    urlObj.searchParams.append(key, value);
  });

  // Повертаємо новий URL як рядок.
  return urlObj.toString();
}

// Приклад використання функції sortUrlParams
console.log("Завдання: 15 ==============================");
console.log(
  sortUrlParams("https://example.com/path?param2=value2&param1=value1")
);
// Виведе: 'https://example.com/path?param1=value1&param2=value2'

// Завдання 16

/**
 * Функція `getURLValues` приймає URL і повертає масив значень пошукових параметрів.
 * @param {string} url - URL-адреса для аналізу.
 * @returns {Array} - Масив значень пошукових параметрів.
 */
function getURLValues(url) {
  // Створюємо новий об'єкт URL з вхідною URL-адресою.
  let urlObj = new URL(url);

  // Отримуємо об'єкт `URLSearchParams` з пошуковими параметрами.
  let searchParams = urlObj.searchParams;

  // Отримуємо масив ключів пошукових параметрів.
  let keys = Array.from(searchParams.keys());

  // Масив для збереження значень пошукових параметрів.
  let valuesArray = [];

  // Перебираємо ключі пошукових параметрів.
  keys.forEach((key) => {
    // Отримуємо всі значення для даного ключа за допомогою методу `getAll`.
    let values = searchParams.getAll(key);

    // Додаємо значення до масиву.
    valuesArray.push(...values);
  });

  // Повертаємо масив значень пошукових параметрів.
  return valuesArray;
}

// Приклад використання функції getURLValues
console.log("Завдання: 16 ==============================");
let values = getURLValues(
  "https://example.com/path?param1=value1&param2=value2&param3=value3"
);
console.log(values);

// Завдання 16

/**
 * Функція `getUrlKeys` приймає URL і повертає масив з ключами пошукових параметрів.
 * @url (рядок) - URL-адреса для аналізу.
 *
 * Функція повертає масив, що містить усі ключі пошукових параметрів.
 */
function getUrlKeys(url) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  let urlObj = new URL(url);

  // Отримуємо масив зі всіма ключами пошукових параметрів за допомогою методу 'keys'.
  let keysArray = Array.from(urlObj.searchParams.keys());

  // Повертаємо масив з ключами.
  return keysArray;
}

// Приклад використання функції getUrlKeys
console.log("Завдання: 16 ==============================");
console.log(getUrlKeys("https://example.com/path?param1=value1&param2=value2"));
// Виведе: [ 'param1', 'param2' ]

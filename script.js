// Оригінальна функція, яка повертає Promise.
function fetchFakeData() {
  const fakeData = {
    name: "John",
    age: 30,
  };
  return Promise.resolve(fakeData);
}

// Створюємо асинхронну функцію getData, яка використовує await для обробки Promise.
async function getData() {
  // Використовуємо try для обробки помилок
  try {
    // Використовуємо await для очікування виконання Promise.
    const data = await fetchFakeData();
    // Дані виводимо в консоль після отримання їх з Promise.
    console.log(data);
  } catch (error) {
    // Використовуємо catch для обробки будь-яких помилок, що виникли під час виконання Promise, та виводимо їх в консоль.
    console.log(error);
  }
}

// Розкоментуйте після виконання завданння
// console.log("Завдання: 1 ==============================");
// // Викликаємо нашу асинхронну функцію.
// getData();

// Функція, яка приймає один параметр - число секунд.
function getRandomNumberAfterSeconds(seconds) {
  // Повертаємо новий Promise
  return new Promise((resolve) => {
    // Використовуємо setTimeout для симуляції асинхронної операції.
    // Після "seconds" секунд, Promise буде виконано з випадковим числом
    setTimeout(() => {
      resolve(Math.random());
    }, seconds * 1000);
  });
}

// Асинхронна функція logRandomNumberAfterSeconds, яка приймає один параметр - число секунд
async function logRandomNumberAfterSeconds(seconds) {
  // Використовуємо try для обробки помилок
  try {
    // Використовуємо await, щоб "почекати", поки Promise від getRandomNumberAfterSeconds буде виконано.
    // Значення, з яким виконується Promise (випадкове число), присвоюється константі randomNumber.
    const randomNumber = await getRandomNumberAfterSeconds(seconds);
    // Виводимо отримане випадкове число в консоль
    console.log(randomNumber);
  } catch (error) {
    // Якщо сталася помилка під час виконання Promise, виводимо її в консоль.
    console.error(error);
  }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 2 ==============================");
logRandomNumberAfterSeconds();

// Асинхронна функція getDataFromUrl, яка приймає один параметр - URL
async function getDataFromUrl(url) {
  // Використовуємо try для обробки помилок
  try {
    // Використовуємо fetch API для відправки GET-запиту на вказаний URL
    const response = await fetch(url);

    // Перевіряємо, чи є відповідь вдалою якщо ні виводимо помилку в консоль
    if (!response.ok) {
      throw new Error(response.status);
    }

    // Конвертуємо відповідь у формат JSON
    const data = await response.json();

    // Виводимо дані в консоль
    console.log(data);
  } catch (error) {
    // Виводимо помилки в консоль якщо вони є
    console.error(error);
  }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 3 ==============================");
getDataFromUrl("https://swapi.dev/api/people/1");

// Асинхронна функція, яка приймає три параметри - URL, дані для відправки та токен авторизації
async function postDataWithAuth(url, data, authToken) {
  // Використовуємо try для обробки помилок
  try {
    // Використовуємо fetch API для відправки POST-запиту на вказаний URL
    const response = await fetch(url, {
      method: "POST", // Вказуємо метод запиту
      headers: {
        "Content-Type": "application/json", // Вказуємо тип контенту "application/json"

        Authorization: authToken, // Вказуємо заголовок Authorization в який передаємо authToken
      },
      body: JSON.stringify(data), // Відправляємо дані у форматі JSON
    });

    // Перевіряємо, чи є відповідь вдалою
    if (!response.ok) {
      throw new Error(response.status);
    }

    // Конвертуємо відповідь у формат JSON
    const responseData = await response.json();

    // Виводимо відповідь в консоль
    console.log(responseData);
  } catch (error) {
    // Виводимо помилки в консоль якщо вони є
    console.error(error);
  }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 4 ==============================");
postDataWithAuth(
  "https://petstore.swagger.io/v2/store/order",
  {
    id: 0,
    petId: 0,
    quantity: 0,
    shipDate: "2023-07-23T19:28:06.229Z",
    status: "placed",
    complete: true,
  },
  "fsdodfa8sdg76adtf687ya8rufia8d7fasy6g"
);

// Створюємо асинхронний генератор asyncGenerator, який виробляє числа з паузою в одну секунду.
// "async function*" означає, що це асинхронний генератор.
async function* asyncGenerator() {
  // Змінна "i" ініціалізована значенням 0 і буде збільшуватися на 1 при кожній ітерації.
  let i = 0;
  // Цикл "while (true)" - це безкінечний цикл, який продовжуватиме виконуватися, поки його не зупинять зовні.
  while (true) {
    // Чекаємо поки виконається проміс якому встановимо затримку 1 секунду за допомогою setTimeout
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Віддаємо значення лічильника та збільшуємо його на один
    yield i++;
  }
}

// Використовуємо асинхронний генератор та записуємо його значення в константу gen
const gen = asyncGenerator();

// Створюємо асинхрону функцію printFiveItems
async function printFiveItems() {
  // Ключові слова "for await" використовуються для ітерації по асинхронним ітерабельним об'єктам.
  // Перебираємо значення gen
  for await (let value of gen) {
    // Виводимо в консоль поточне значення
    console.log(value);
    // Умова "if (value === 4) break" зупиняє цикл після виведення п'яти чисел (від 0 до 4).
    if (value === 4) break;
  }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 5 ==============================");
printFiveItems();

// Створюємо генератор, який буде нумерувати елементи масиву
function* numerateArrayGenerator(arr) {
  // Перебираємо масив за дпомомогою циклу for
  for (let i = 0; i < arr.length; i++) {
    // Використовуємо ключове слово yield, щоб віддати масив з індексом масиву і поточним значенням
    yield [i, arr[i]];
  }
}

// Створюємо масив
let arr = ["Apple", "Banana", "Cherry"];

// Створюємо екземпляр генератора numeratedArray
let numeratedArray = numerateArrayGenerator(arr);

// Перебираємо елементи масиву за допомогою циклу for,
// Виводимо в консоль значення генератора та продовжуємо виконання генератора

for (let i = 0; i < arr.length; i++) {
  console.log(numeratedArray.next().value);
}

// Створюємо генератор countdownGenerator, який створює послідовність чисел від вказаного значення до 0
function* countdownGenerator(start) {
  // Ініціюємо лічильник зі стартовим значенням
  let count = start;

  // Цикл, що триває доки лічильник більший або рівний 0
  while (count >= 0) {
    // Використовуємо ключове слово yield, щоб повернути поточне значення лічильника
    yield count;

    // Зменшуємо лічильник
    count--;
  }
}

// Створюємо екземпляр генератора countdown
let countdown = countdownGenerator(5);

let nextValue = countdown.next(); // Запускаємо генератор та отримуємо перше значення яку записуємо в змінну nextValue
// Цикл while, що виводить значення з генератора, та працює поки не є генератор вичерпаним.
// Якщо властивість done == false, генератор ще має значення для повернення.

while (!nextValue.done) {
  console.log(nextValue.value); // Виводимо поточне значення
  nextValue = countdown.next(); // Отримуємо наступне значення з генератора
}

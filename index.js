//Завдання 1.Cтворіть об'єкт person за допомогою конструктора з полями   name: "John",age: 25
let person = {
  name: "John",
  age: 25,
};

console.log("Завдання 1 ====================================");

console.log("person", person); // Виведе {name: "John", age: 25}

//Cтворіть об'єкт personLarge який буде мати такі ж поля як person ,
// та вкладений об'єкт address з полями  street: "123 Main St", city: "New York", country: "USA",
let personLarge = {
  //використовуємо деструктурізацію на об'єкті person
  ...person,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
};

//Завдання 30: Створіть функцію, що повертає новий об'єкт з тими ж властивостями, що й переданий у якості аргумента об'єкт.

// Функція для створення нового об'єкта з тими ж властивостями
function copyObject(obj) {
  // Використовуємо синтаксис деструктурізації {...person} для створення нового об'єкта з тими ж властивостями
  let copy = { ...obj };

  // Повертаємо новий об'єкт
  return copy;
}

console.log("Завдання 30 ====================================");

console.log("copyObject(person)", copyObject(person)); // Виведе {name: "John", age: 25}

////Завдання 28. Перевірте наявність властивості в об'єкті за допомогою оператора in.
// Функція для перевірки наявності властивості в об'єкті
function hasProperty(obj, property) {
  // Використовуємо оператор "in" для перевірки наявності властивості
  if (property in obj) {
    console.log(`Property ${property} exists.`);
  } else {
    console.log(`Property ${property} does not exist.`);
  }
}

console.log("Завдання 28 ====================================");
hasProperty(person, "name"); // Виведе "Property name exists."
hasProperty(person, "address"); // Виведе "Property address does not exist."

// Завдання 26: Створіть функцію, що отримує об'єкт і виводить на консоль всі його ключі та значення.
// Функція для виведення всіх ключів і значень об'єкта
function printKeysAndValues(obj) {
  // Проходимося по всіх ключах об'єкту за допомогою циклу "for in"
  for (let key in obj) {
    // Виводимо ключ та значення на консоль
    console.log(`Key: ${key}, Value: ${obj[key]}`);
  }
}

console.log("Завдання 26 ====================================");
printKeysAndValues(person);
// Виведе
// Key: name, Value: John
// Key: age, Value: 25
// Key: address, Value: [object Object]

// Завдання 25: Видаліть властивість з об'єкта за допомогою оператора delete.
// Функція для видалення властивості з об'єкта
function deleteProperty(obj, property) {
  // Використовуємо оператор "delete" для видалення властивості
  delete obj[property];

  // Виводимо об'єкт на консоль
  console.log(obj);
}

console.log("Завдання 25 ====================================");
deleteProperty(
  {
    name: "John",
    age: 25,
    address: {
      street: "123 Main St",
      city: "New York",
      country: "USA",
    },
  },
  "age"
); // Виведе {name: "John", address: {street: "123 Main St", city: "New York", country: "USA"}}

// 23: Використайте ключове слово this в об'єкті.
// Створюємо об'єкт
let user = {
  name: "John",
  age: 25,
  // Створюємо метод, який виводить ім'я та вік особи introduse,
  //  який за допомогою ключового слова this має вивести такий рядок My name is John and I am 25 years old.
  introduce: function () {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  },
};

console.log("Завдання 23 ====================================");
// Викликаємо метод introduce об'єкта user
user.introduce();
// Виведе "My name is John and I am 25 years old."

// Завдання 22: Створіть функцію, яка додає нове поле до об'єкту.

// Функція для додавання нового поля до об'єкту
function addField(obj, newField, value) {
  // Додаємо нове поле до об'єкту з допомогою квадратних дужок
  obj[newField] = value;

  // Виводимо об'єкт на консоль
  console.log(obj);
}

console.log("Завдання 22 ====================================");
addField(
  {
    name: "John",
    age: 25,
  },
  "hobby",
  "reading"
); // Виведе {name: "John", age: 25, hobby: "reading"}

// Завдання 21: Деструктуруйте об'єкт в нові змінні.
// Функція для деструктуризації об'єкту
function destructureObject(person) {
  // Використовуємо деструктуризацію для створення нових змінних з властивостей об'єкту і отримуємо з нього змінні name та age
  let { name, age } = person;

  // Виводимо нові змінні на консоль в форматі Name: ${name}, Age: ${age}
  console.log(`Name: ${name}, Age: ${age}`);
}

console.log("Завдання 21 ====================================");
destructureObject(person); // Виведе "Name: John, Age: 25"

// Завдання 18: Змініть значення полів об'єкту, що знаходяться в масиві об'єктів.

// Створюємо масив об'єктів, першим елементом якого буде об'єкт person, а другим об'єкт name: "Jane", age: 30
let people = [{ ...person }, { name: "Jane", age: 30 }];
// Функція для зміни імені всіх осіб у масиві
function changeNames(array, newName) {
  // Ітеруємося по масиву об'єктів за допомогою циклу "for of"
  for (let person of array) {
    // Змінюємо ім'я кожної людини на нове ім'я
    person.name = newName;

    // Виводимо об'єкт на консоль
    console.log(person);
  }
}

console.log("Завдання 18 ====================================");
changeNames(people, "Alex");
// Виведе
// { name: "Alex", age: 25 }
// { name: "Alex", age: 30 }

// Завдання 14: Використовуйте вкладені об'єкти для зберігання більш складної інформації.
// Створюємо об'єкт з вкладеним об'єктом

// Функція для виводу деталей людини
function printPersonDetails(obj) {
  // Використовуємо деструктуризацію для отримання значень name, age i також значень city, country вкладеного об'єкту address
  let {
    name,
    age,
    address: { city, country },
  } = obj;

  // Виводимо name, age, city та country на консоль
  console.log(name, age, city, country);
}

console.log("Завдання 14 ====================================");
printPersonDetails(personLarge); // Виведе "John 25 New York USA"

// Завдання 9: Показати, що об'єкти будуть дорівнювати один одному лише тоді, коли одному об'єкту присвоїти значення іншого.
// Створіть об'єкт person2 з полями name: "John", age: 25
let person2 = { name: "John", age: 25 };

// Функція для перевірки рівності об'єктів
function compareObjects(obj1, obj2) {
  // Виводимо результат порівняння об'єктів
  console.log(obj1 === obj2);
  // Присвоємо obj2 значення об'єкту obj1
  obj2 = obj1;
  // Виводимо результат порівняння об'єктів
  console.log(obj1 === obj2);
}

console.log("Завдання 9 ====================================");
compareObjects(person, person2); // Виведе
//true
//false

// Завдання 33: Використовуйте деструктуризацію зі значенням за замовчуванням у аргументах функції для об'єкта.
// Створюємо функцію, яка приймає об'єкт як аргумент і використовує деструктуризацію зі значенням за замовчуванням
// name за замовчуванням призначемо Unknown, age за замовчуванням призначемо 0, country за замовчуванням призначемо Unknown
function showPersonInfo({
  name = "Unknown",
  age = 0,
  country = "Unknown",
} = {}) {
  // Повертаємо об'єкт зі значеннями властивостей
  return { name, age, country };
}

console.log("Завдання 33 ====================================");
let personInfo = showPersonInfo(person);
console.log(personInfo); // Виведе {name: "John", age: 25, country: "Unknown"}

// Завдання 32: Додайте нову властивість до вбудованого об'єкту Array через літерал.
// Створюємо функцію, яка буде додавати нову властивість до масиву
function addProperty(array) {
  // Додаємо нову властивість customProperty до прототипу Array зі значенням myProperty
  Array.prototype.customProperty = "myProperty";

  // Повертаємо переданий масив з новою властивістю
  return array;
}

console.log("Завдання 32 ====================================");
// Створимо масив newArr з новою властивістю за допомогої нашої функції в яку передамо [1, 2, 3, 4, 5]
let newArr = addProperty([1, 2, 3, 4, 5]);
console.log(newArr.customProperty); // Виведе "Моя властивість"

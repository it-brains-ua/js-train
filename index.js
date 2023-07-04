// 1. Створення базового об'єкту "Book":
/*
 * Об'єкт: Book
 * Властивості:
 * --------------
 * | Властивість | Значення |
 * -----------------------
 * | title       | "Generic Book" |
 * | author      | "Anonymous"    |
 * | pages       | 0              |
 *
 * Функції:
 * --------------
 * | Функція    | Опис                                     |
 * --------------------------------------------------------
 * | read()     | Виводить повідомлення You are reading <title> by <author> |
 */

let Book = {
  title: "Generic Book",
  author: "Anonymous",
  pages: 0,
  read: function () {
    console.log(`You are reading "${this.title}" by ${this.author}`);
  },
};

console.log("Завдання: 1 ==============================");

// Виведемо Об'єкт: Book
console.log(Book);
// Виведемо прототип Об'єкту: Novel
console.log(Book.hasOwnProperty("title"));
// Використовуємо функцію read об'єкту Book
Book.read();

// 2. Наслідування від базового об'єкту Book

/*
 * Об'єкт: Novel
 * Властивості та функції наслідуються від об'єкта Book
 * Додаємо нову властивість
 *  | Властивість | Значення |
 *  -----------------------
 *  | genre       | "Generic Genre" |
 */

let Novel = Object.create(Book);
// Додаткова властивість
Novel.genre = "Generic Genre";
console.log("Завдання: 2 ==============================");

// Виведемо Об'єкт: Novel
console.log(Novel);
// Виведемо прототип Об'єкту: Novel
console.log(Object.getPrototypeOf(Novel));
// Використовуємо функцію read об'єкту Novel
Novel.read();

// 3. Створення нового об'єкту та зміна його прототипу

/*
 * Об'єкт: Biography
 * Властивості:
 * --------------
 * | Властивість | Значення |
 * -----------------------
 * | title       | "Generic Biography" |
 * | author      | "Biographer"        |
 * | pages       | 200                 |
 */

let Biography = {
  title: "Generic Biography",
  author: "Biographer",
  pages: 200,
};
// Зміна прототипу об'єкта Biography на Novel
Object.setPrototypeOf(Biography, Novel);
console.log("Завдання: 3 ==============================");
// Виведемо Об'єкт: Biography
console.log(Biography);
// Перевіримо чи являється Novel прототипом Biography та виведемо в консоль
console.log(Novel.isPrototypeOf(Biography));

// 4. Інкапсуляція властивості та додання властивості
/*
 * Об'єкт: ScienceBook
 * Властивості та функції наслідуються від об'єкта Book
 * Також тут використовується інкапсуляція для створення властивості 'info', яка не може бути змінена напряму, а лише змінюється за допомогю гетера
 */

// Наслідуємо властивості і функції від об'єкта Book
let ScienceBook = Object.create(Book);

// Додаємо властивість 'info' за допомогою Object.defineProperty
Object.defineProperty(ScienceBook, "info", {
  configurable: false, // зробимо щоб 'info' не можно було видалити або змінити, перевіримо і спробуємо присвоїти ій будь яке значення,
  // Отримаємо помилку Cannot assign to read only property 'info' of object '#<Object>'
  // Створюємо сетер який буде присвоювати info значення яке отримує, помилку більше не отримуємо але при спробі вивести значення info отримуємо undefined
  set(value) {
    this._info = value;
  },
  // Створимо гетер який буде нам повертати рядок About book <title>: <info>, тепер все працює коректно
  get() {
    return `About book ${this.title}: ${this._info}`;
  },
});

// Заповнюємо об'єкт
// | Властивість | Значення          |
// |-------------|-------------------|
// | title       | "Physics 101"     |
// | author      | "Albert Einstein" |
// | info        | written in 1915 |
ScienceBook.title = "Physics 101";
ScienceBook.author = "Albert Einstein";
ScienceBook.info = "written in 1915";

console.log("Завдання: 4 ==============================");
// Виводимо інформацію про книгу(info)
console.log(ScienceBook.info);
// Виводимо налаштування властивости info
console.log(Object.getOwnPropertyDescriptor(ScienceBook, "info"));

//5. Поліморфізм: створення нового об'єкта та перевизначення його методу
/*
 * Об'єкт: Textbook
 * Властивості та функції наслідуються від об'єкта ScienceBook
 * Метод read() перевизначено для демонстрації поліморфізму,
 * має виводити You are reading a textbook <title> by <author>. <info>
 */

// Насідуємо ScienceBook
let Textbook = Object.create(ScienceBook);
// Перевизначено метод read()
Textbook.read = function () {
  console.log(
    `You are reading a textbook "${this.title}" by ${this.author}, ${this.info}`
  );
};

// Встановлюємо значення для Textbook
// | Властивість | Значення              |
// |-------------|-----------------------|
// | title       | "High School Physics" |
// | author      | "J. D. Jones"         |
Textbook.title = "High School Physics";
Textbook.author = "J. D. Jones";

console.log("Завдання: 5 ==============================");
// Запускаємо функцію read()
Textbook.read();

// 6. Абстракція: створення об'єкта з загальними властивостями
/*
 * Об'єкт: Media
 * Властивості:
 * --------------
 * | Властивість | Значення |
 * -----------------------
 * | format      | "Generic Format" |
 * | length      | 0                |
 *
 * Функції:
 * --------------
 * | Функція    | Опис                                                                    |
 * ---------------------------------------------------------------------------------------
 * | play()     | Виводить повідомлення про Now playing <format> media of length <length> |
 */

let Media = {
  format: "Generic Format",
  length: 0,
  play: function () {
    console.log(`Now playing ${this.format} media of length ${this.length}`);
  },
};

/*
 * Об'єкт: Song
 * Властивості та функції наслідуються від об'єкта Media
 * Додаткові властивості: artist, title
 */

let Song = Object.create(Media);
// Втановлюємо додаткові властивості
// | Властивість | Значення         |
// |-------------|------------------|
// | artist      | "Generic Artist" |
// | title       | "Generic Song"   |
Song.artist = "Generic Artist";
Song.title = "Generic Song";
console.log("Завдання: 6 ==============================");
// Використовуємо функцію play()
Song.play();

// Клас OrderTracker відповідає за відстеження замовлень
class OrderTracker {
  static #instance = null; // Приватне статичне instance поле для збереження єдиного екземпляра класу початкове значення null
  static #orders = []; // Приватне статичне orders поле для збереження списку замовлень початкове значення []

  /**
   * Статичний метод createInstance використовується для створення єдиного екземпляра класу
   */
  static createInstance() {
    // Перевіряємо, чи є вже створений екземпляр класу
    if (!this.#instance) {
      // Якщо немає, створюємо новий екземпляр
      this.#instance = new OrderTracker();
    }

    // Інакше повертаємо єдиний екземпляр класу
    return this.#instance;
  }

  /**
   * Статичний метод addOrder використовується для додавання замовлення до списку
   * Отримує item та додає його до масиву замовлень
   */
  static addOrder(item) {
    this.#orders.push(item);
  }

  /**
   * Статичний метод getOrders використовується для отримання списку замовлень
   */
  static getOrders() {
    return this.#orders;
  }
}

// Створюємо єдиний екземпляр класу OrderTracker
const tracker = OrderTracker.createInstance();

// Додаємо замовлення до списку
OrderTracker.addOrder("Телефон");
OrderTracker.addOrder("Ноутбук");

// Отримуємо список замовлень
const orders = OrderTracker.getOrders();

// Виводимо список замовлень в консоль
console.log(orders);

// Клас Book описує книгу в магазині
class Book {
  /**
   * Конструктор Book приймає об'єкт з параметрами
   * title - назва книги
   * author - автор книги
   * coverColor - колір обкладинки книги
   */
  constructor({ title, author, coverColor }) {
    this.title = title;
    this.author = author;
    this.coverColor = coverColor;
  }

  /**
   * Метод describe генерує опис книги
   *  Повертає рядок у форматі: "Книга: '{назва}', автор: '{автор}', колір обкладинки: '{колір}'"
   */
  describe() {
    return `Книга: '${this.title}', автор: '${this.author}', колір обкладинки: '${this.coverColor}'`;
  }
}

/**
 * Клас AudioBook описує аудіокнигу в магазині
 */
class AudioBook {
  /**
   * Конструктор AudioBook приймає об'єкт з параметрами
   * title - назва книги
   * author - автор книги
   * audioLength - тривалість аудіокниги
   */
  constructor({ title, author, audioLength }) {
    this.title = title;
    this.author = author;
    this.audioLength = audioLength;
  }

  /**
   * Метод describe генерує опис аудіокниги
     Повертає рядок у форматі: "Аудіокнига: '{назва}', автор: '{автор}', тривалість: '{тривалість}'"
   */
  describe() {
    return `Аудіокнига: '${this.title}', автор: '${this.author}', тривалість: '${this.audioLength}'`;
  }
}

/**
 * Клас ProductFactory використовується для створення об'єктів-продуктів.
 */

class ProductFactory {
  // TYPE - статична властивість, що визначає типи продуктів, які можуть бути створені.
  // {
  //   BOOK: "book",
  //   AUDIOBOOK: "audiobook",
  // }
  static TYPE = {
    BOOK: "book",
    AUDIOBOOK: "audiobook",
  };

  /**
   * Статичний метод createProduct використовується для створення об'єктів-продуктів, отримує
   * type - тип продукту, що має бути створений. Має бути одним зі значень властивості TYPE.
   * options - об'єкт з параметрами для конструктора продукту.
   *
   * В залежності від типу, повертає або екземпляр класу Book, або AudioBook.
   *
   *  Кидає помилку, якщо переданий тип не підтримується `Такого типу продукту не існує: ${type}`.
   */
  static createProduct(type, options) {
    switch (type) {
      case this.TYPE.BOOK:
        return new Book(options);
      case this.TYPE.AUDIOBOOK:
        return new AudioBook(options);
      default:
        throw new Error(`Такого типу продукту не існує: ${type}`);
    }
  }
}

// Використовуємо ProductFactory для створення нової книги
const factoryBook = ProductFactory.createProduct(ProductFactory.TYPE.BOOK, {
  title: "Назва книги",
  author: "Автор книги",
  coverColor: "Синій",
});

// Виводимо в консоль опис нової книги
console.log(factoryBook.describe());

// Використовуємо ProductFactory для створення нової аудіокниги
const factoryAudiobook = ProductFactory.createProduct(
  ProductFactory.TYPE.AUDIOBOOK,
  {
    title: "Назва аудіокниги",
    author: "Автор аудіокниги ",
    audioLength: "5 годин",
  }
);

// Виводимо в консоль опис нової аудіокниги
console.log(factoryAudiobook.describe());

// Спробуємо створити продукт непідтримуваного типу
try {
  const factoryUnknown = ProductFactory.createProduct("comics", {});
} catch (error) {
  // Виводимо помилку в консоль
  console.error(error.message);
}

/**
 * Клас Customer представляє клієнта, що має можливість отримувати повідомлення по електронній пошті.
 * Клієнт ідентифікується своєю електронною адресою, яку використовується для відправки повідомлень.
 */
class Customer {
  /**
   * Конструктор для класу Customer. Приймає email - Електронна адреса клієнта.
   */
  constructor(email) {
    this.email = email;
  }

  /**
   * Метод відправки повідомлення клієнту по електронній пошті.Приймає message - повідомлення,та виводить в консоль ${this.email} ${message}.
   */
  sendEmail(message) {
    console.log(`${this.email} ${message}`);
  }
}

/**
 * Клас Product представляє продукт, який можна створювати.
 */
class Product {
  /**
   * Конструктор для класу Product.Приймає name - Назва продукту.
   */
  constructor(name) {
    this.name = name;
  }
}

/**
 * Клас Store представляє магазин, який може мати підписників і створювати нові продукти.
 * Магазин має назву і список підписників, які отримують повідомлення про нові продукти.
 */
class Store {
  /**
   * Конструктор для класу Store.Приймає name - Назва магазину, та створює пустий масив customers
   */
  constructor(name) {
    this.name = name;
    this.customers = [];
  }

  /**
   * Метод subscribe для підписки клієнта на магазин. Приймає customer - Клієнт, який підписується.
   * Після виклику цього методу, клієнт буде отримувати повідомлення про нові продукти, через push додаємо клієнта до масиву.
   */
  subscribe(customer) {
    this.customers.push(customer);
  }

  /**
   * Метод unsubscribe для відписки клієнта від магазину.Приймає customer - Клієнт, який відписується.
   * Після виклику цього методу, клієнт більше не буде отримувати повідомлення про нові продукти, через filter прибираємо клієнта з масиву.
   */
  unsubscribe(customer) {
    this.customers = this.customers.filter((c) => c !== customer);
  }

  /**
   * Метод createProduct для створення нового продукту в магазині.Приймає name - Назва нового продукту.
   * Після виклику цього методу, новий продукт буде створено, а всі підписники отримають про це повідомлення через sendNotify.
   */
  createProduct(name) {
    const product = new Product(name);
    this.sendNotify(product);
  }

  /**
   * Метод для відправки повідомлень всім підписникам про новий продукт.Приймає product - Продукт, про який відправляється повідомлення.
   * Кожен підписник отримає електронне повідомлення про новий продукт, для цього перебираємо масив клієнтів та для кожного відправлаємо повідомлення
   * Новий продукт "${product.name}" в магазині ${this.name}! за допомогою sendEmail.
   */
  sendNotify(product) {
    this.customers.forEach((customer) => {
      customer.sendEmail(
        `Новий продукт "${product.name}" в магазині ${this.name}!`
      );
    });
  }
}

const store = new Store("IT Supermarket");

const customer1 = new Customer("john@example.com");
const customer2 = new Customer("jane@example.com");
const customer3 = new Customer("alice@example.com");

store.subscribe(customer1);
store.subscribe(customer2);
store.subscribe(customer3);

store.createProduct("Новий ноутбук");

store.unsubscribe(customer1);

store.createProduct("Бездротові навушники");

// Клас Drink представляє основний напій, який можна приготувати.
// Цей клас містить базову вартість напою (price="Чай") та його ім'я (name=10).
class Drink {
  name = "Чай";
  price = 10;

  // Метод prepare() виводить в консоль рядок "Приготування {назва напою}"
  prepare() {
    console.log(`Приготування ${this.name}`);
  }
}

// Клас HoneyDecorator є декоратором, який додає мед до напою.
class HoneyDecorator {
  // Конструктор приймає в якості параметрів базовий напій (drink) та кількість меду (amount), яку треба додати.
  constructor(drink, amount) {
    this.drink = drink;
    this.amount = amount;
  }

  // Getter для name повертає рядок `${this.drink.name} з ${this.amount} г меду`.
  get name() {
    return `${this.drink.name} з ${this.amount} г меду`;
  }

  // Getter для price розраховує загальну вартість напою, враховуючи базову вартість напою
  // і додаткову вартість меду, яку за замовчуванням встановлюємо на 0.5, і множимо на this.amount.
  get price() {
    const honeyPrice = 0.5;
    return this.drink.price + honeyPrice * this.amount;
  }

  // Метод prepare відповідає за приготування напою з медом.
  // Він виводить в консоль Приготування ${this.name} з медом
  prepare() {
    console.log(`Приготування ${this.name} з медом`);
  }
}

// Створення об'єкту базового напою (чаю)
let tea = new Drink();
console.log(tea.name); // Виводить ім'я напою
console.log(tea.price); // Виводить вартість напою
tea.prepare(); // Готує напій

// Додавання декоратора меду до чаю
let honeyTea = new HoneyDecorator(tea, 2); // Додаємо 2 грами меду
console.log(honeyTea.name); // Виводить нову назву напою
console.log(honeyTea.price); // Виводить нову вартість напою
honeyTea.prepare(); // Готує напій з медом

// Клас Writer відповідає за роботу з текстом.
class Writer {
  // Властивість #content представляє поточний текст. Вона ініціалізується порожнім рядком.
  #content = "";

  // Сетер для властивості content. Він приймає значення newContent (новий текст),
  // який потрібно встановити як поточний текст. Кожен раз, коли присвоюється нове значення,
  // викликається метод #store(), який зберігає поточний стан тексту у версіях.
  set content(newContent) {
    this.#content = newContent;
    this.#store();
  }

  // Метод гетер для властивості content, повертає this.#content.
  get content() {
    return this.#content;
  }

  // Приватний метод #store використовується для зберігання поточного стану тексту.
  // Він викликає статичний метод класу Version, create, передаючи йому поточний текст як аргумент.
  #store() {
    Version.create(this.content);
  }

  // Метод restore відновлює попередній стан тексту, викликаючи статичний метод класу Version, restore.
  // Цей метод повертає останню збережену версію тексту, яку ми встановлюємо як поточний текст.
  restore() {
    this.#content = Version.restore().content;
  }
}

// Клас Version відповідає за створення та зберігання версій тексту.
class Version {
  // В конструкторі класу Version приймається аргумент content та встановлює його.
  // Це вхідний аргумент, який представляє теку збережену версію тексту.
  constructor(content) {
    this.content = content;
  }

  // Властивість #versions це приватний статичний масив, пустий за замовчуванням, що зберігає всі створені версії.
  static #versions = [];

  // Статичний метод create приймає аргумент content (текст версії) і створює новий екземпляр класу Version в який передає content .
  // Створений екземпляр додається до масиву версій versions.
  static create(content) {
    this.#versions.push(new Version(content));
  }

  // Статичний метод restore видаляє останный элемент масиву,
  // та повертає останню збережену версію тексту з масиву версій this.#versions[this.#versions.length - 1] .
  static restore() {
    this.#versions.pop();
    return this.#versions[this.#versions.length - 1];
  }
}

// Створюємо новий екземпляр класу Writer
const writer = new Writer();

// Присвоюємо текст за допомогою сетера
writer.content = "Це початковий текст.";
writer.content = "Редагований текст.";
writer.content = "Оновлений текст.";

// Друкуємо поточний текст
console.log(writer.content);

// Відновлюємо попередній текст
writer.restore();
console.log(writer.content);

// Ще раз відновлюємо попередній текст
writer.restore();
console.log(writer.content);

//AuthProcessor клас для обробки аутентифікації.
class AuthProcessor {
  // setNextProcessor Метод, який приймає наступний обробник (processor) в ланцюгу.
  setNextProcessor(processor) {
    // Зберігає наступний обробник в поточному об'єкті.
    this.nextProcessor = processor;
    // Повертає переданий обробник, щоб дозволити подальше ланцюжкове викликання.
    return processor;
  }

  //validate Метод для перевірки аутентифікації. Приймає ім'я користувача (username) і пароль (passkey).
  validate(username, passkey) {
    // Перевіряє, чи є наступний обробник в ланцюгу.
    if (this.nextProcessor) {
      // Якщо так, передає запит на перевірку аутентифікації наступному обробнику,this.nextProcessor.validate(username, passkey), та повертаємо результат.
      return this.nextProcessor.validate(username, passkey);
    } else {
      // Якщо наступного обробника немає, повертає false, сигналізуючи про невдалу аутентифікацію.
      return false;
    }
  }
}

// TwoStepProcessor Клас обробника, який перевіряє двофакторний код. Наслідує базовий клас AuthProcessor.
class TwoStepProcessor extends AuthProcessor {
  // Метод для перевірки аутентифікації. Перевіряє ім'я користувача (username), пароль (passkey) і двофакторний код.
  validate(username, passkey) {
    // Якщо ім'я користувача=john, пароль=password та двофакторний код вірний, аутентифікація успішна.
    // Виводить повідомлення про успішну аутентифікацію: Вхід дозволено з двофакторною аутентифікацією, і повертає true.

    if (
      username === "john" &&
      passkey === "password" &&
      this.isValidTwoStepCode()
    ) {
      console.log("Вхід дозволено з двофакторною аутентифікацією");
      return true;
    } else {
      // Якщо дані не вірні, запит на аутентифікацію передається наступному обробнику в ланцюгу, super.validate(username, passkey).
      return super.validate(username, passkey);
    }
  }

  // isValidTwoStepCode Метод для перевірки двофакторного коду,який повертає true.
  isValidTwoStepCode() {
    return true;
  }
}

// RoleProcessor Клас обробника, який перевіряє ролі користувача. Наслідує базовий клас AuthProcessor.
class RoleProcessor extends AuthProcessor {
  // validate Метод для перевірки аутентифікації. Перевіряє роль користувача.
  validate(username, passkey) {
    // Якщо роль користувача - гість (guest), аутентифікація успішна.
    if (username === "guest") {
      // Виводить повідомлення про успішну аутентифікацію Вхід дозволено з роллю гостя, і повертає true.
      console.log("Вхід дозволено з роллю гостя");
      return true;
    } else {
      // Якщо роль не відповідає, запит на аутентифікацію передається наступному обробнику в ланцюгу.
      return super.validate(username, passkey);
    }
  }
}

// CredentialsProcessor Клас обробника, який перевіряє облікові дані користувача. Наслідує базовий клас AuthProcessor.
class CredentialsProcessor extends AuthProcessor {
  //validate Метод для перевірки аутентифікації. Перевіряє облікові дані користувача.
  validate(username, passkey) {
    // Якщо облікові дані вірні, username=admin, та passkey=admin123, аутентифікація успішна.
    if (username === "admin" && passkey === "admin123") {
      // Виводить повідомлення про успішну аутентифікацію Вхід дозволено за обліковими даними, і повертає true.
      console.log("Вхід дозволено за обліковими даними");
      return true;
    } else {
      // Якщо облікові дані не вірні, запит на аутентифікацію передається наступному обробнику в ланцюгу.
      return super.validate(username, passkey);
    }
  }
}

// Клас Builder для створення об'єкта ланцюга обробників.
class ProcessorBuilder {
  // Конструктор який не приймає вхідні значення
  constructor() {
    //Властивість firstProcessor, що зберігає перший обробник у ланцюгу, за замовчуванням дорівнює null.
    this.firstProcessor = null;
    //Властивість lastProcessor, що зберігає останній обробник у ланцюгу, за замовчуванням дорівнює null.
    this.lastProcessor = null;
  }

  // Метод add для додавання нового обробника в ланцюг.
  add(processor) {
    // Якщо це перший обробник, він зберігається як перший і останній.
    if (!this.firstProcessor) {
      this.firstProcessor = processor;
      this.lastProcessor = processor;
    } else {
      // Якщо це не перший обробник, він додається в кінець ланцюга, і стає останнім.
      this.lastProcessor.setNextProcessor(processor);
      this.lastProcessor = processor;
    }
    // Повертає this.
    return this;
  }

  // Метод create для створення ланцюга обробників.
  create() {
    // Повертає перший обробник у ланцюгу.
    return this.firstProcessor;
  }
}

// Створюємо Builder для ланцюга обробників.
const processorBuilder = new ProcessorBuilder();

// Додаємо обробники в ланцюг за допомогою builder'а.
const processor = processorBuilder
  .add(new CredentialsProcessor())
  .add(new TwoStepProcessor())
  .add(new RoleProcessor())
  .create();

// Перевіряємо користувачів за допомогою нашого ланцюга обробників.
processor.validate("admin", "admin123"); // Вхід дозволено за обліковими даними
processor.validate("john", "password"); // Вхід дозволено з двоступінчастою аутентифікацією
processor.validate("guest", "guest123"); // Вхід дозволено з роллю гостя
processor.validate("user", "password"); // Вхід заборонено

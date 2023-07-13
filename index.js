// Клас ContentContainer використовується для управління списком вкладених елементів контенту
class ContentContainer {
  // Створюємо властивість elements для зберігання вкладених елементів контенту. Початкове значення - порожній масив.
  elements = [];

  // Створюємо addElement, який отримує element як параметр та додає його в масив elements.
  addElement(element) {
    this.elements.push(element);
  }

  // Створюємо removeElement, який отримує element як параметр, знаходить його індекс у масиві та видаляє, якщо елемент знайдено.
  removeElement(element) {
    const index = this.elements.indexOf(element);
    if (index !== -1) {
      this.elements.splice(index, 1);
    }
  }
}

// Клас Message, що є розширенням класу ContentContainer. Використовується для створення повідомлень з текстом.
class Message extends ContentContainer {
  // Створюємо конструктор класу, який приймає content як параметр та ініціалізує його
  constructor(content) {
    super();
    this.content = content;
  }

  // Створюємо метод display, який виводить ${this.content} для всіх елементів масиву
  display() {
    console.log(`Повідомлення: ${this.content}`);
    for (const element of this.elements) {
      element.display();
    }
  }
}

// Клас Article, що є розширенням класу ContentContainer. Використовується для створення статті з вкладеними елементами.
class Article extends ContentContainer {
  // Створюємо конструктор класу, який приймає title назву статті як параметр та ініціалізує об'єкт з нею
  constructor(title) {
    super();
    this.title = title;
  }

  // Створюємо метод display, який виводить Стаття: ${this.title} для всіх елементів масиву
  display() {
    console.log(`Стаття: ${this.title}`);
    for (const element of this.elements) {
      element.display();
    }
  }
}

// Створюємо об'єкт Article з назвою "Навчальна стаття"
const article = new Article("Навчальна стаття");

// Додаємо повідомлення до статті
article.addElement(new Message("Дуже корисна стаття"));
article.addElement(new Message("Дякую за чудовий матеріал!"));

// Додаємо вкладене повідомлення до першого повідомлення в статті
article.elements[0].addElement(new Message("Відповідь: Згоден!"));

// Виводимо інформацію про статтю та всі її вкладені елементи
article.display();

// Виводимо масив вкладених елементів статті
console.log(article.elements);

// Клас Group. Він використовує шаблон "Одиночка" та відповідає за створення груп товарів.
class Group {
  // Створюємо приватне статичне поле #groups використовується для зберігання усіх створених груп. Має початкове значени: пустий об'єкт
  //Об'єкт використовується для зберігання груп, де ключ - це назва групи, а значення - екземпляр групи.
  static #groups = {};

  // Створюмєо конструктор класу, який приймає назву групи як аргумент та ініціалізує поле this.name.
  constructor(name) {
    this.name = name;
  }

  // Створюємо статичний метод create, який приймає назву групи name як аргумент.
  // Метод завжди повертає екземпляр групи з вказаною назвою.
  static create(name) {
    // Перевірка чи група з такою назвою ще не була створена
    if (!this.#groups[name]) {
      // то вона створюється та зберігається в полі #groups.
      this.#groups[name] = new Group(name);
    }
    // в кінці повертає #groups[name]
    return this.#groups[name];
  }
}

// Клас Product відповідає за створення продуктів.
class Product {
  // Створюємо конструктор класу, який приймає назву продукту name та групу group як аргументи та ініціалізує відповідні поля.
  constructor(name, group) {
    this.name = name;
    this.group = group;
  }

  // Робимо метод display, який виводить інформацію про продукт в консоль Продукт: ${this.name}, Група: ${this.group.name}.
  display() {
    console.log(`Продукт: ${this.name}, Група: ${this.group.name}`);
  }
}

// Створення груп за допомогою методу Group.create. Цей метод гарантує, що кожна група з унікальною назвою буде створена лише один раз.
const electronics = Group.create("Електроніка");
const books = Group.create("Книги");
const electronics2 = Group.create("Електроніка");

// Виведення груп в консоль. Ми бачимо, що electronics та electronics2 - це один і той же об'єкт.
console.log(electronics, books, electronics2);
console.log(electronics === electronics2); // true

// Створення продуктів. Кожен продукт належить до певної групи.
const product1 = new Product("Ноутбук", electronics);
const product2 = new Product("Навушники", electronics);
const product3 = new Product("Воно", books);
const product4 = new Product("Смартфон", Group.create("Електроніка")); // тут створюється нова група або використовується вже створена

// Виведення продуктів в консоль.
product1.display();
product2.display();
product3.display();
product4.display();

// Перевірка, чи належать два продукти до однієї групи.
console.log(product1.group === product4.group); // true

// Фільтрація продуктів за групою. В даному випадку виводяться тільки продукти групи "Електроніка".
const list = [product1, product2, product3, product4].filter(
  (product) => product.group === Group.create("Електроніка")
);

console.log(list); // виводиться список продуктів, що належать до групи "Електроніка"

// Клас TeaMaker відповідає за загальні дії, необхідні для приготування чаю.
class TeaMaker {
  // Робимо метод makeTea, який викликає всі кроки приготування чаю по черзі boilWater, addTeaLeaves, #steepTea, pourIntoCup, addCondiments, serveTea.
  prepareTea() {
    this.boilWater();
    this.addTeaLeaves();
    this.#steepTea();
    this.pourIntoCup();
    this.addCondiments();
    this.serveTea();
  }

  // Робимо метод boilWater, який відповідає за кип'ятіння води та виводить в консоль Кип'ятимо воду....
  boilWater() {
    console.log("Кип'ятимо воду...");
  }

  // Робимо метод addTeaLeaves, який відповідає за додавання чайних листків та виводить в консоль Додаємо чайні листки....
  addTeaLeaves() {
    console.log("Додаємо чайні листки...");
  }

  // Робимо метод steepTea, що відповідає за заварювання чаю та виводить в консоль Заварюємо чай....
  #steepTea() {
    console.log("Заварюємо чай...");
  }

  // Робимо метод pourIntoCup, що відповідає за переливання чаю в чашку та виводить в консоль Переливаємо чай в чашку....
  pourIntoCup() {
    console.log("Переливаємо чай в чашку...");
  }

  // Робимо метод addCondiments, що залишається пустим і може бути перевизначений у підкласах.
  addCondiments() {}

  // Робимо метод serveTea, що відповідає за подачу чаю та виводить в консоль Чай подається!.
  serveTea() {
    console.log("Чай подається!");
  }
}

// Клас GreenTeaMaker є підкласом класу TeaMaker та додає інгредієнти для зеленого чаю.
class GreenTeaMaker extends TeaMaker {
  // Робимо метод addCondiments, який виводить в консоль Додаємо мед, щоб приготувати зелений чай...
  addCondiments() {
    console.log("Додаємо мед, щоб приготувати зелений чай...");
  }
}

// Клас BlackTeaMaker є підкласом класу TeaMaker та додає інгредієнти для чорного чаю.
class BlackTeaMaker extends TeaMaker {
  // Робимо метод addCondiments, який виводить в консоль Додаємо мед, щоб приготувати чорний чай...

  addCondiments() {
    console.log("Додаємо молоко та цукор, щоб приготувати чорний чай...");
  }
}

// Створюємо екземпляри класів GreenTeaMaker та BlackTeaMaker.
const greenTeaMaker = new GreenTeaMaker();
greenTeaMaker.prepareTea();

const blackTeaMaker = new BlackTeaMaker();
blackTeaMaker.prepareTea();

// Клас Letter представляє об'єкт листа з назвою і текстом.
class Letter {
  // Створіть конструктор, що приймає назву листа title та його текстовий вміст text та ініціалізує відповідні поля
  constructor(title, text) {
    this.title = title; // Записуємо аргумент title в властивість title, яка представляє назву листа в класі
    this.text = text; // Записуємо аргумент text в властивість text, яка представляє  текстовий вміст листа в класі
  }
}

// Клас Picture представляє об'єкт зображення з назвою та розміром
class Picture {
  // Створіть конструктор, що приймає назву зображення title та його розмір size та ініціалізує відповідні поля
  constructor(title, size) {
    this.title = title; // Записуємо аргумент title в властивість title, яка представляє назву зображення в класі
    this.size = size; //  Записуємо аргумент size в властивість size, яка представляє розмір зображення
  }
}

// Клас Movie представляє об'єкт відеофільму з назвою та тривалістю
class Movie {
  // Конструктор приймає назву відеофільму title та його тривалість duration та ініціалізує відповідні поля
  constructor(title, duration) {
    this.title = title; // Записуємо аргумент title в властивість title, яка представляє назву відеофільму в класі
    this.duration = duration; // Записуємо аргумент duration в властивість duration, яка представляє тривалість відеофільму
  }
}

// Клас Portfolio представляє колекцію об'єктів, таких як листи, зображення та відеофільми
class Portfolio {
  elements = []; // Створимо властивість elements, яка представляє список об'єктів в портфоліо, початкове значення пустий масив

  // Зрібть метод addElement, що приймає element та додає об'єкт до портфоліо
  addElement(element) {
    this.elements.push(element);
  }

  // Зробіть методи readLetter, що приймає letter та виводить в консоль: "Лист: ${letter.title}, Розмір: ${letter.text.length} символів"
  readLetter(letter) {
    console.log(
      `Лист: ${letter.title}, Розмір: ${letter.text.length} символів`
    );
  }

  // Зробіть методи readPicture, що приймає letter та виводить в консоль: "Картина: ${picture.title}, Розмір: ${picture.size} KB"
  readPicture(picture) {
    console.log(`Картина: ${picture.title}, Розмір: ${picture.size} KB`);
  }

  // Зробіть методи readMovie, що приймає letter та виводить в консоль: "Фільм: ${movie.title}, Тривалість: ${movie.duration} хвилин"
  readMovie(movie) {
    console.log(`Фільм: ${movie.title}, Тривалість: ${movie.duration} хвилин`);
  }

  // Зробіть метод readElements, який читає інформацію про всі об'єкти в портфоліо в залежності від того якого класу елемент викликає readLetter, readPicture, readMovie
  readElements() {
    // Робимо ітерацію for де є змінна element в яку приходять елементи this.elements
    for (const element of this.elements) {
      // Через instanceof по черзі через if та instanceof перевіряємо відношення element до кожного класу. 
          // Якщо element є елементом певного класу, то викликати відповідний метод для читання об'єкту певного класу
      if (element instanceof Letter) {
        this.readLetter(element);
      } else if (element instanceof Picture) {
        this.readPicture(element);
      } else if (element instanceof Movie) {
        this.readMovie(element);
      }
    }
  }
}

// Створюємо екземпляр класу Portfolio
const myPortfolio = new Portfolio();

// Створюємо різні об'єкти
const letter = new Letter("My Letter", "Hello, this is a letter.");
const picture = new Picture("My Picture", 2048);
const movie = new Movie("My Movie", 120);

// Додаємо об'єкти до портфоліо
myPortfolio.addElement(letter);
myPortfolio.addElement(picture);
myPortfolio.addElement(movie);

// Виводимо всі об'єкти в портфоліо
console.log(myPortfolio.elements);

// Читаємо інформацію про всі об'єкти в портфоліо
myPortfolio.readElements();

// Клас BankTransfer представляє собою систему для здійснення банківських переказів
class BankTransfer {
  // Зробіть метод initiateTransfer, який приймає amount та відповідає за ініціювання банківського переказу
  // Він приймає суму переказу як параметр
  initiateTransfer(amount) {
    // Для ініціювання банківського переказу спершу обчислюється сума з урахуванням комісії calculatedAmount = this.calculateFee(amount)
    const calculatedAmount = this.calculateFee(amount);
    // Виводимо інформацію про ініціювання банківського переказу Ініціюємо банківський переказ: $${calculatedAmount}
    console.log(`Ініціюємо банківський переказ: $${calculatedAmount}`);
  }

  // Зробіть метод calculateFee, який відповідає за розрахунок комісії за переказ
  // Він приймає amount переказу як параметр та повертає число після розрахування комісії
  calculateFee(amount) {
    // Логіка розрахунку комісії за переказ amount * 1.02
    // Припустимо, комісія становить 2% від суми переказу
    return amount * 1.02;
  }
}

// Клас WalletTransfer представляє собою систему для здійснення переказів з гаманця
class WalletTransfer {
  // Створіть метод processTransfer, який відповідає за здійснення переказу з гаманця
  // Він приймає суму переказу як параметр
  processTransfer(amount) {
    // Виводимо інформацію про здійснення переказу з гаманця Здійснюємо переказ з гаманця: $${amount}
    console.log(`Здійснюємо переказ з гаманця: $${amount}`);
  }
}

// Клас TransferAdapter виступає адаптером, який дозволяє нам користуватися
// методами WalletTransfer так, ніби це BankTransfer.
class TransferAdapter {
  // Робимо конструктор, що приймає об'єкт transferSystem типу WalletTransfer
  constructor(transferSystem) {
    // Зберігаємо посилання на об'єкт WalletTransfer у властивості transferSystem
    this.transferSystem = transferSystem;
  }

  // Робимо метод initiateTransfer, який адаптує API WalletTransfer до API BankTransfer.
  // Він приймає amount як аргумент та повертає результат виконання переказу.
  initiateTransfer(amount) {
    // Викликаємо допоміжний метод calculateFee для обчислення комісії за переказ та результат записуєм в константу calculatedAmount
    const calculatedAmount = this.calculateFee(amount);
    // Викликаємо метод processTransfer об'єкту WalletTransfer з calculatedAmount.
    // В результаті повертаємо результат виконання переказу.
    this.transferSystem.processTransfer(calculatedAmount);
  }

  // Створюємо метод calculateFee, що приймає amount та обчислює суму комісії за переказ amount * 1.2, засновуючись на вхідній сумі.
  calculateFee(amount) {
    // Повертаємо amount * 1.2
    return amount * 1.2; 
  }
}

// Створимо  !!!!!!!!!
const purchase1 = new Purchase(1000);  //!!!!
purchase1.initiateTransfer(); ///!!!!

const purchase2 = new Purchase(10); ///!!!
purchase2.initiateTransfer();///!!!!!!

// Клас Basket представляє кошик для покупок з певною стратегією знижки
class Basket {
  // Створимо конструктор приймає, що стратегію знижки discountPlan як параметр
  constructor(discountPlan) {
    // Властивість discountPlan отримує значення стратегії знижки, яке було передано конструктору
    this.discountPlan = discountPlan;
    // Створюємо новий пустий масив для зберігання товарів (goods) в кошику
    this.goods = [];
  }

  // Робимо метод addGood, що приймає один параметр - good, який потрібно додати до масиву
  addGood(good) {
    // Додаємо новий товар в масив товарів
    this.goods.push(good);
  }

  // Робимо метод calculateTotalPrice, що розраховує загальну вартість товарів в кошику з урахуванням знижки
  calculateTotalPrice() {
    // За допомогою метода reduce ми сумуємо вартість всіх товарів в масиві
    const price = this.goods.reduce((acc, good) => acc + good.price, 0);
    // Застосовуємо знижку до загальної вартості за допомогою метода applyDiscount нашого об'єкта discountPlan
    return this.discountPlan.applyDiscount(price);
  }
}

// Клас RegularDiscountPlan: стратегія знижки для постійних клієнтів
class RegularDiscountPlan extends DiscountPlan {
  // Робимо метод applyDiscount, що приймає ціну price як параметр
  applyDiscount(price) {
    // Повертає ціну з урахуванням знижки в 10% price * 0.9
    return price * 0.9;
  }
}

//Клас VIPDiscountPlan: стратегія знижки для VIP клієнтів
class VIPDiscountPlan extends DiscountPlan {
  // Робимо метод applyDiscount, що приймає ціну price як параметр
  applyDiscount(price) {
    // Повертає ціну з урахуванням знижки в 20% price * 0.8
    return price * 0.8;
  }
}

// Клас NewClientDiscountPlan: стратегія знижки для нових клієнтів
class NewClientDiscountPlan extends DiscountPlan {
  // Робимо метод applyDiscount, що приймає ціну price як параметр
  applyDiscount(price) {
    // Повертає ціну з урахуванням знижки в 5% price * 0.95
    return price * 0.95;
  }
}

// Створення нового екземпляру кошика зі стратегією знижки для нових клієнтів
const basket1 = new Basket(new NewClientDiscountPlan());

// Додавання товарів до кошика
basket1.addGood({ name: "Product 1", price: 100 });
basket1.addGood({ name: "Product 2", price: 50 });

// Розрахунок і виведення загальної вартості товарів з урахуванням знижки
console.log(basket1.calculateTotalPrice());

// Клас Employee відповідає за створення об'єктів працівників. Кожен працівник має своє ім'я, посаду та зарплату.
class Employee {
  // Створимо конструктор, що використовується для ініціалізації об'єктів класу. Він приймає три параметри: name, position та salary.
  constructor(name, position, salary) {
    // Передаємо аргумент в this.name, this.position та this.salary - це властивості класу. Вони ініціалізуються значеннями, переданими в конструктор.
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

// Клас EmployeeGroup використовується для створення груп працівників. Він містить список працівників.
class EmployeeGroup {
  // Задаємо властивість employees, яке призначене для зберігання працівників. Він ініціалізується як порожній масив.
  employees = [];

  // Робимо метод addEmployee, який додає працівника до групи. Він приймає один параметр employee - об'єкт типу Employee.
  addEmployee(employee) {
    // Цей метод додає об'єкт працівника до масиву employees, використовуючи метод push.
    this.employees.push(employee);
  }
}

// Клас EmployeeIterator відповідає за ітерацію по групі працівників.
class EmployeeIterator {
  // Робимо властивість #employees - це масив працівників, по якому ми будемо ітерувати. Він ініціалізується у конструкторі.
  #employees = [];
  // Робимо властивість #currentIndex, яка вказує на поточну позицію в масиві працівників. Він ініціалізується зі значенням 0.
  #currentIndex = 0;

  // Конструктор приймає один параметр employeeGroup - об'єкт типу EmployeeGroup. Він ініціалізує властивість #employees this.#employees = employeeGroup.employees.
  constructor(employeeGroup) {
    this.#employees = employeeGroup.employees;
  }

  // Створимо метод #hasNext, який перевіряє, чи є в масиві працівників наступний елемент для ітерації.
  // Він повертає true, якщо поточний індекс менший за довжину масиву, і false в протилежному випадку.
  #hasNext() {
    return this.#currentIndex < this.#employees.length;
  }

  // Робимо метод next, який повертає наступного працівника в масиві та збільшує #currentIndex на 1 якщо є наступний елемент, інакше повертає null.
  next() {
    if (this.#hasNext()) {
      const employee = this.#employees[this.#currentIndex];
      this.#currentIndex++;
      return employee;
    }
    return null;
  }

  // Робимо метод list, який використовується для виведення імен всіх працівників в групі.
  list() {
    return this.#employees.map((employee) => employee.name);
  }
}

// Створюємо нову групу працівників.
const employeeGroup = new EmployeeGroup();

// Додаємо нових працівників до групи, використовуючи метод addEmployee.
employeeGroup.addEmployee(new Employee("John Doe", "Manager", 5000));
employeeGroup.addEmployee(new Employee("Jane Smith", "Developer", 4000));

// Створюємо новий ітератор для групи працівників.
const employeeIterator = new EmployeeIterator(employeeGroup);

// Виводимо імена всіх працівників в групі, використовуючи метод list.
console.log(employeeIterator.list());

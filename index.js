/*
 * Об'єкт: Vehicle
 * Властивості:
 * --------------------------------------
 * | Властивість  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 */

// Створюємо Vehicle - це функція-конструктор. Конструктори в JavaScript використовуються для створення об'єктів специфічного типу.
function Vehicle(brand, model, year, mileage) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.mileage = mileage;
}

// Текстовому представленю Vehicle призначаємо рядок <brand> <model> <year>
Vehicle.toString = function () {
  return `${this.brand} ${this.model} (${this.year})`;
};

// valueOf - це метод, який використовується JavaScript для конвертації об'єкта в примітивне значення.
// Ми перевизначаємо його тут, щоб він повертав пробіг автомобіля.
Vehicle.prototype.valueOf = function () {
  return this.mileage;
};

/*
 * Об'єкт: Car
 * Властивості:
 * --------------------------------------
 * | Властивість  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 * | fuelType     |
 * | speed        |
 */

//Створюємо Car - це ще один конструктор, який наслідує властивості і методи з Vehicle за допомогою функції apply.
function Car(brand, model, year, mileage, fuelType, speed) {
  // Тут ми викликаємо конструктор Vehicle з контекстом об'єкта Car і передаємо аргументи з функції Car.
  Vehicle.apply(this, [brand, model, year, mileage]);
  this.fuelType = fuelType;
  this.speed = speed;
}

// Щоб наслідувати методи з Vehicle, ми встановлюємо прототип Car таким же, як і Vehicle.
// Object.create створює новий об'єкт з вказаним прототипом.
Car.prototype = Object.create(Vehicle.prototype);
// Ми також повинні встановити властивість constructor об'єкту prototype назад до Car, оскільки вона втратила це зв'язування, коли ми змінили її прототип.
// Car.prototype.constructor = Car;

// Ми можемо перевизначити методи з Vehicle в Car.
// Тут ми перевизначаємо toString, щоб він включав тип палива <brand> <model> <year> - <fuelType>.
Car.prototype.toString = function () {
  return `${this.brand} ${this.model} (${this.year}) - ${this.fuelType}`;
};

// Cтворюємо метод accelerate для прискорення швидкості Car, збільшує швидкість на передане число та виводить рядок
// Автомобіль <make> <model> прискорився до швидкості <speed> км/год
Car.prototype.accelerate = function (increment) {
  this.speed += increment;
  console.log(
    `Автомобіль ${this.brand} ${this.model} прискорився до швидкості ${this.speed} км/год`
  );
};

// Метод brake для гальмування Car та виводить рядок
// Автомобіль <make> <model> зменшив до швидкості <speed> км/год
Car.prototype.brake = function (decrement) {
  this.speed -= decrement;
  console.log(
    `Автомобіль ${this.brand} ${this.model} зменшив швидкість до ${this.speed} км/год`
  );
};

/*
 * Cтворення об'єкту: Car
 * Властивості:
 * --------------------------------------
 * | Властивість  |  Значення           |
 * |--------------|---------------------|
 * | brand        |  "Audi"             |
 * | model        |  "A6"               |
 * | year         |  2018               |
 * | mileage      |  30000              |
 * | fuelType     |  "Petrol"           |
 * | speed        |  0                  |
 */

let car = new Car("Audi", "A6", 2018, 30000, "Petrol", 0);

// Викличемо функції toString та valueOf об'єкта car
console.log(car.toString());
console.log(car.valueOf());

// Використовуємо методи для прискорення та передаємо 50
car.accelerate(50);
// Використовуємо методи для гальмування та передаємо 20

car.brake(20);

/*
 * Об'єкт: Truck
 * Властивості:
 * ---------------------------------------------------
 * | Властивість      | Значення                     |
 * |------------------|------------------------------|
 * | brand            | "Toyota"                     |
 * | model            | "Tundra"                     |
 * | year             | 2019                         |
 * | mileage          | 20000                        |
 * | color            | "Red"                        |
 * | engineType       | "V8"                         |
 * | towingCapacity   | 10000                        |
 * | fuelType         | "Gasoline"                   |
 * | transmissionType | "Automatic"                  |
 * | doors            | 4                            |
 * | weight           | 5600                         |
 */

// Конструктор Truck наслідуємо Vehicle викликавши його в конструкторі з call
function Truck(
  brand,
  model,
  year,
  mileage,
  color,
  engineType,
  towingCapacity,
  fuelType,
  transmissionType,
  doors,
  weight
) {
  Vehicle.call(this, brand, model, year, mileage);
  this.color = color;
  this.engineType = engineType;
  this.towingCapacity = towingCapacity;
  this.fuelType = fuelType;
  this.transmissionType = transmissionType;
  this.doors = doors;
  this.weight = weight;
}

// Установлюємо наслідування прототипу Truck від прототипу Vehicle
Truck.prototype = Object.create(Vehicle.prototype);

// Додатковий метод specific to Trucks, примає число якщо воно більше towingCapacity виводить рядок
// Навантаження занадто важке для буксирування, якщо ні то рядок Тягнення навантаження...
Truck.prototype.tow = function (weight) {
  if (weight > this.towingCapacity) {
    console.log("Навантаження занадто важке для буксирування.");
  } else {
    console.log("Тягнення навантаження...");
  }
};

// Створюємо новий екземпляр об'єкта Truck
/*
 * Екземпляр об'єкту: myTruck
 * Властивості:
 * ---------------------------------------------------
 * | Властивість      | Значення                     |
 * |------------------|------------------------------|
 * | brand            | "Toyota"                     |
 * | model            | "Tundra"                     |
 * | year             | 2019                         |
 * | mileage          | 20000                        |
 * | color            | "Red"                        |
 * | engineType       | "V8"                         |
 * | towingCapacity   | 10000                        |
 * | fuelType         | "Gasoline"                   |
 * | transmissionType | "Automatic"                  |
 * | doors            | 4                            |
 * | weight           | 5600                         |
 */
let myTruck = new Truck(
  "Toyota",
  "Tundra",
  2019,
  20000,
  "Red",
  "V8",
  10000,
  "Gasoline",
  "Automatic",
  4,
  5600
);

// Викликаємо метод tow з вагою меншою за towingCapacity
myTruck.tow(9000);

// Викликаємо метод tow з вагою більшою за towingCapacity
myTruck.tow(11000); // Виводить: "The load is too heavy to tow."

// Додаємо метод drive, який збільшує kilometers на передане число, та виводить Подорожуємо <kilometers> кілометрів у <brand> <model>.
Car.prototype.drive = function (kilometers) {
  this.mileage += kilometers;
  console.log(
    `Подорожуємо ${kilometers} кілометрів у ${this.brand} ${this.model}.`
  );
};

// Використовуємо bind для зв'язування методу drive з конкретним об'єктом car.
// Це створює нову функцію, в якій this постійно встановлено на car, незалежно від того, як функцію викликають.
// Викликаємо функцію зі значенням 100,
let driveCar = car.drive.bind(car);

driveCar(100);

/*
 * Об'єкт: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість   |
 * |---------------|
 * | brand         |
 * | model         |
 * | year          |
 * | mileage       |
 * | batteryCapacity|
 */

function ElectricCar(brand, model, year, mileage, batteryCapacity) {
  // Перевіряємо, чи функцію було викликано з new, якщо ні виволимо помилку "Конструктор має бути викликаний з 'new'"
  if (!new.target) {
    throw new Error("Конструктор має бути викликаний з 'new'");
  }
  // Викликаємо батьківський конструктор Car, передаючи йому потрібні параметри
  Car.call(this, brand, model, year, mileage);
  // Додаємо нову властивість batteryCapacity
  this.batteryCapacity = batteryCapacity;
}

// Наслідуємо властивості та методи з Car
ElectricCar.prototype = Object.create(Car.prototype);

// Перевизначаємо toString для ElectricCar він має повертати <brand> <model> <year> - Батарея: <batteryCapacity> kWh
ElectricCar.prototype.toString = function () {
  return `${this.brand} ${this.model} (${this.year}) - Батарея: ${this.batteryCapacity}kWh`;
};

// Створюємо новий екземпляр ElectricCar
/*
 * Об'єкт: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість     | Значення          |
 * |-----------------|-------------------|
 * | brand           | Tesla             |
 * | model           | Model S           |
 * | year            | 2020              |
 * | mileage         | 10000             |
 * | batteryCapacity | 100               |
 */
let tesla = new ElectricCar("Tesla", "Model S", 2020, 10000, 100);

// Викликаємо метод toString об'єкту tesla та виводимо в консоль
console.log(tesla.toString()); // "Tesla Model S (2020) - Батарея: 100kWh"

/*
 * Клас: Musician
 * Статичні поля:
 * ------------------------
 * | Поле   |  Значення   |
 * |--------|-------------|
 * | count  |  0          |
 *
 * Властивості:
 * --------------------------------------
 * | Властивість  |  Тип                |
 * |--------------|---------------------|
 * | _name        |  String             |
 * | _instrument  |  String             |
 *
 * Гетери:
 * ---------------------
 * | Гетер    |  Повертає |
 * |----------|-----------|
 * | name     |  string   |
 * | instrument | string  |
 *
 * Методи:
 * --------------------------
 * | Метод   |  Дія         |
 * |---------|--------------|
 * | play()  | Виводить рядок в консоль |
 */

class Musician {
  static count = 0; // статичне поле, яке відслідковує кількість музикантів

  constructor(name, instrument) {
    // Конструктор приймає два параметри: ім'я та інструмент
    this._name = name; // присвоєння вхідного значення name до приватного поля _name
    this._instrument = instrument; // присвоєння вхідного значення instrument до приватного поля _instrument
    Musician.count++; // збільшення значення статичного поля на 1
  }

  get name() {
    // гетер для приватного поля _name
    return this._name; // повертає значення приватного поля _name
  }

  get instrument() {
    // гетер для приватного поля _instrument
    return this._instrument; // повертає значення приватного поля _instrument
  }

  play() {
    // метод, що виводить рядок в консоль <_name> грає на <_instrument>
    console.log(`${this._name} грає на ${this._instrument}`);
  }
}

/*
 * Клас: Guitarist
 * Наслідується від: Musician
 *
 * Властивості:
 * ---------------------------------
 * | Властивість |  Тип           |
 * |-------------|----------------|
 * | _name       |  String        |
 * | _instrument |  String        |
 * | _band       |  String        |
 *
 * Гетери:
 * ---------------------
 * | Гетер  |  Повертає  |
 * |--------|------------|
 * | name   |  string    |
 * | band   |  string    |
 *
 * Сетери:
 * ---------------------
 * | Сетер  |  Очікує   |
 * |--------|-----------|
 * | name   |  string   |
 * | band   |  string   |
 *
 * Методи:
 * --------------------------
 * | Метод     |  Дія       |
 * |-----------|------------|
 * | play()    | Виводить рядок в консоль |
 * | joinBand()| Змінює значення _band |
 */

class Guitarist extends Musician {
  constructor(name, instrument, band) {
    // Конструктор приймає три параметри: ім'я, інструмент та група
    super(name, instrument); // виклик конструктора батьківського класу з двома параметрами
    this._band = band; // присвоєння вхідного значення band до приватного поля _band
  }

  get band() {
    // гетер для приватного поля _band
    return this._band; // повертає значення приватного поля _band
  }

  set name(newName) {
    // сетер для приватного поля _name
    this._name = newName; // присвоює нове значення приватному полю _name
  }

  set band(newBand) {
    // сетер для приватного поля _band
    this._band = newBand; // присвоює нове значення приватному полю _band
  }

  joinBand(band) {
    // метод joinBand, що змінює значення _band, this._band = band
    this._band = band;
  }

  play() {
    // перевизначений метод play(), що виводить рядок в консоль <_name> грає на <_instrument> в групі <_band>
    console.log(
      `${this._name} грає на ${this._instrument} в групі ${this._band}`
    );
  }
}

/*
 * Клас: Bassist
 * Наслідується від: Musician
 *
 * Властивості:
 * ---------------------------------
 * | Властивість |  Тип           |
 * |-------------|----------------|
 * | _name       |  String        |
 * | _instrument |  String        |
 * | _band       |  String        |
 *
 * Гетери:
 * ---------------------
 * | Гетер  |  Повертає  |
 * |--------|------------|
 * | name   |  string    |
 * | band   |  string    |
 *
 * Сетери:
 * ---------------------
 * | Сетер  |  Очікує   |
 * |--------|-----------|
 * | name   |  string   |
 * | band   |  string   |
 *
 * Методи:
 * --------------------------
 * | Метод     |  Дія       |
 * |-----------|------------|
 * | play()    | Виводить рядок в консоль |
 * | joinBand()| Змінює значення _band |
 */

class Bassist extends Musician {
  constructor(name, instrument, band) {
    // Конструктор приймає три параметри: ім'я, інструмент та група
    super(name, instrument); // виклик конструктора батьківського класу з двома параметрами
    this._band = band; // присвоєння вхідного значення band до приватного поля _band
  }

  get band() {
    // гетер для приватного поля _band
    return this._band; // повертає значення приватного поля _band
  }

  set name(newName) {
    // сетер для приватного поля _name
    this._name = newName; // присвоює нове значення приватному полю _name
  }

  set band(newBand) {
    // сетер для приватного поля _band
    this._band = newBand; // присвоює нове значення приватному полю _band
  }

  joinBand(band) {
    // метод joinBand, що змінює значення _band,this._band = band
    this._band = band;
  }

  play() {
    // перевизначений метод play(), що виводить рядок в консоль <_name> грає на <_instrument> в групі <_band>
    console.log(
      `${this._name} грає на ${this._instrument} в групі ${this._band}`
    );
  }
}

/*
 * Створення екземпляра класу Guitarist
 * ---------------------------------------------------
 * | Властивість |  Значення     |
 * |-------------|---------------|
 * | name        | "Jimmy Page"  |
 * | instrument  | "guitar"      |
 * | band        | "Led Zeppelin"|
 */

const guitarist = new Guitarist("Jimmy Page", "гітара", "Led Zeppelin");

/*
 * Створення екземпляра класу Bassist
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | name        | "Paul McCartney" |
 * | instrument  | "bass"           |
 * | band        | "The Beatles"    |
 */

const bassist = new Bassist("Paul McCartney", "бас-гітара", "The Beatles");

// Тут ми використовуємо Object.defineProperty(), щоб додати сетер band до класу Musician після його створення.
// Перший аргумент - це об'єкт, до якого ми хочемо додати властивість. У цьому випадку це Musician.prototype,
// тому що ми хочемо додати сетер до всіх екземплярів класу Musician.
// Другий аргумент - це ім'я властивості, яку ми хочемо додати. У цьому випадку це 'band'.
// Третій аргумент - це об'єкт, який описує властивість. У цьому випадку ми хочемо додати сетер,
// тому ми вказуємо функцію, яка буде викликатися при спробі встановити властивість 'band'.  this._band = newBand
Object.defineProperty(Musician.prototype, "band", {
  set: function (newBand) {
    this._band = newBand;
  },
});

/*
 * Клас: Band
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | name        |  string    |
 * | members     |  array     |
 */

class Band {
  /*
   * Створюємо конструктор з двома вхідними параметрами: _name і _members
   * _members - це масив об'єктів, що є екземплярами класу Musician або його нащадків
   */
  constructor(name, members = []) {
    this._name = name;
    this._members = [...members];
  }

  // Створюємо getter для _name, що повертає приватну властивість _name
  get name() {
    return this._name;
  }

  // Створюємо getter для _members, що повертає приватну властивість _members
  get members() {
    return this._members;
  }

  // Створюємо сетер для _name
  set name(newName) {
    this._name = newName;
  }

  // Створюємо метод addMember(), що додає нового учасника до гурту
  addMember(newMember) {
    // Перевіряємо чи Musician є прототипом newMember
    if (newMember instanceof Musician) {
      newMember.band = this._name; // Ось тут ми використовуємо сетер band класу Musician
      // До приватного поля _members яке є масивом додаємо мового музиканта
      this._members.push(newMember);
    } else {
      // Якщо ні виводимо в консоль повідомлення Новий учасник повинен бути екземпляром класу Musician
      console.log("Новий учасник повинен бути екземпляром класу Musician");
    }
  }

  // Створюємо метод playMusic(), за допомогою forEach перебираємо масив і викликаємо метод play() для кожного учасника гурту
  playMusic() {
    this._members.forEach((member) => member.play());
  }
}

// Створення екземпляру класу Band
/*
 * Створення екземпляра класу Band
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | name        | "The Beatles"    |
 * | members     | [bassist]       |
 */

const band = new Band("The Beatles", [bassist]);

// Додаємо гітариста до гурту
band.addMember(guitarist);

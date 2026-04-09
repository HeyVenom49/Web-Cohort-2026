// const promiseOne = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     console.log("Taks has been completed");
//     resolve("Promise one has been fullfilled");
//   }, 1000);
// });

// promiseOne.then(console.log);

// new Promise((resolve, reject) => {
//   setTimeout(function () {
//     console.log("Taks has been completed");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Promise has been fullfilled");
// });

// const promiseThree = new Promise((res, rej) => {
//   setTimeout(() => {
//     res({ username: "demo", email: "demo@demo.com" });
//   }, 1000);
// }).then(console.log);

// const promiseFour = new Promise((res, rej) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       res({ username: "demo", email: "demo@demo.com" });
//     } else {
//       rej(`Error: Something went wrong`);
//     }
//   }, 2000);
// })
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then(console.log)
//   .catch(console.log)
//   .finally(() => console.log("The promise is either resolved or rejected"));

// const promiseFive = new Promise((res, rej) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       res({ username: "demo1", email: "demoOne1@gmail.com" });
//     } else {
//       rej("Error: Demo1 Something went wrong");
//     }
//   }, 2000);
// });

// // async function consumePromiseFive() {
// //   const response = await promiseFive;
// //   console.log(response);
// // }

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// async function getAllUsers() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   console.log(data);
// }

// // getAllUsers();

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then(console.log)
//   .catch(console.log);

// console.log("1");
// console.log("2");
// setTimeout(() => console.log("3"), 0);
// console.log("5");

// function multipleBy5(num) {
//   return num * 5;
// }

// multipleBy5.power = 2;

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

// function createUser(username, score) {
//   this.username = username;
//   this.score = score;
// }

// createUser.prototype.increament = function () {
//   this.score += 10; //! yaha pe hum this se ye bata rahe hai ki jo bhi call karega uska score ko hi increase karna hai
// };

// const chai = createUser("demo1", 20);
// const coffee = createUser("demo2", 30);

// console.log(`Chai price : ${chai.score} & Coffee price : ${coffee.score}`);

// chai.increament();
// coffee.increament();

// console.log(
//   `Chai price after increase : ${chai.score} & Coffee price after increase : ${coffee.score}`,
// );

// function setUsername(username) {
//   this.username = username;
// }

// function createUser(username, email, password) {
//   //! to yaha pe hum call use kar rahe kyuki setUsername already execute hoke ja chuka hai aur username set karke username bhi ja chuka hai but createUser me username to set nahi hua to isliye call ke saath hum this send kar rahe jo setUsername ko batayega bhai mujhe ye username chahiye set karke
//   setUsername.call(this, username);
//   this.email = email;
//   this.password = password;
// }

// const chai = new createUser("demo", "demo@demo.com", "pass123");
// console.log(chai);

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abc`;
//   }

//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new User("demo", "demo@demo.com", "demo");
// // console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//! same thing but old way

// function User(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// User.prototype.encryptPassword = function () {
//   return `${this.password}jweoefjo`;
// };

// User.prototype.changeUsername = function () {
//   return `${this.username.toUpperCase()}`;
// };

// const tea = new User("demo", "demo@demo.com", "demo123");
// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());

//? Inheritance

class Animal {
  speak() {
    console.log("Animal makes sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

const animal = new Dog();

// console.log(
//   `Is Dog is instance of Animal ${animal instanceof Animal ? "YES" : "NO"}`,
// );

// animal.speak();

// class User {
//   constructor(username) {
//     this.username = username;
//   }

//   logMe() {
//     console.log(`USERNAME is ${this.username}`);
//   }
// }

// class Teacher extends User {
//   constructor(username, email, password) {
//     super(username);
//     this.email = email;
//     this.password = password;
//   }

//   addCourse() {
//     console.log(`A new course was added by ${this.username}`);
//   }
// }

// const chai = new Teacher("demo", "demo@demo.com", "password");
// chai.addCourse();

//? Static

// class User {
//   constructor(username) {
//     this.username = username;
//   }

//   logMe() {
//     console.log(`Username is ${this.username}`);
//   }

//   //! static karne se ye method kabhi access nahi kar sakte, ye inherit ho jayega but access waha bhi nahi kar sakte
//   static createId() {
//     return Number(`${Math.floor(Math.random() * 100000 + 1)}`);
//   }
// }

// const user = new User("demo", "demo@demo.com", "password");
// user.logMe();
// console.log(user.createId());

//? setter and getter

//? getter and setter

// class User {
//   constructor(email, password) {
//     this.email = email;
//     this.password = password;
//   }

//   get email() {
//     return this._email.toUpperCase();
//   }

//   set email(email) {
//     this._email = email;
//   }

//   get password() {
//     return `${this._password}hitesh`;
//   }

//   set password(value) {
//     this._password = value;
//   }
// }

// const user = new User("demo@demo.com", "password");
// for (let value in user) {
//   console.log(value);
// }

// console.log(Object.getOwnPropertyDescriptor(User.prototype, "password"));

//! another way to do the same thing

// function User(email, password) {
//   this._email = email;
//   this._password = password;

//   Object.defineProperty(this, "email", {
//     get: function () {
//       return this._email.toUpperCase();
//     },
//     set: function (value) {
//       this._email = value;
//     },
//   });

//   Object.defineProperty(this, "password", {
//     get: function () {
//       return this._password.toUpperCase();
//     },
//     set: function (value) {
//       this._password = value;
//     },
//   });
// }

// const user = new User("demo@demo.com", "password");
// console.log(user.email);
// console.log(user.password);

// const User = {
//   _email: "demo@demo.com",
//   _password: "password",

//   get email() {
//     return this._email.toUpperCase();
//   },

//   set email(value) {
//     this._email = value;
//   },
// };
// console.log(User.email);

// const tea = Object.create(User);
// tea.email = "demo1@demo.com";
// console.log(tea.email);

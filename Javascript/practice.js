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

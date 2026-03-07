// pending, done(fullfil, resolve), nope(not, reject)

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("chaicode");
//   }, 2000);
// });

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

// promise.then((data) => {
//   console.log(data);
// });

// const myFunction = (value) => {
//   console.log(value);
// };
// promise.then(myFunction);

//* second way to do it

// promise.then(console.log);

// console.log(typeof console);
// console.log(typeof console.log);
// console.log(console.log);

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     // res("chaicode");
//     rej(new Error("Kya kar diya bhai"));
//   }, 2000);
// });

// promise.then(
//   (data) => console.log(data),
//   (err) => console.log(err),
// );

// promise.then(() => {}).catch((err) => console.log(err));

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("chaicode");
//     rej(new Error("Wah bhai response diya hi nahi"));
//   }, 2000);
// });

// promise
//   .then((data) => data.toUpperCase())
//   .then((data) => data + ".com")
//   .then(console.log)
//   .catch(console.log);

// const turant = Promise.resolve("Turant");
// console.log(turant);

// const allPromise = Promise.all([
//   Promise.resolve("Chai"),
//   Promise.resolve("Code"),
//   Promise.reject("Error"),
// ]);

// allPromise.then(console.log);

// const anyPromise = Promise.all([
//   Promise.resolve("Chai"),
//   Promise.resolve("Code"),
//   Promise.reject("Error"),
// ]);

// anyPromise.then(console.log);

// const allSettledPromise = Promise.allSettled([
//   Promise.resolve("Chai"),
//   Promise.resolve("Code"),
//   Promise.reject("Error"),
// ]);

// allSettledPromise.then(console.log);

// const hPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Masterji");
//   }, 3000);
// });

//! Yaha pe error throw karega kyuki callstack nice me jo value hoga usko print kara dega response ka wait nahi karega
// function nice() {
//   const result = hPromise;
//   console.log(result);
// }

// nice();

// async function nice(hPromise) {
//   const result = await hPromise;
//   console.log(result);
// }

// nice(hPromise);

//! ye hai to but isko use nahi karna
// const newResult = await hPromise;
// console.log(newResult);

const hPromise = new Promise((res, rej) => {
  setTimeout(() => {
    // res("Masterji");
    rej(new Error("Ab ye kya error hai bhai"));
  }, 3000);
});

//* async function me bus ek problem hai isme koi catch method nahi hai like .then() ke pass tha so to catch error, we use try-catch block
async function nice(hPromise) {
  try {
    const result = await hPromise;
    console.log(result);
  } catch (error) {
    console.log("error aa gaya ji: ", error.message);
  }
}

nice();

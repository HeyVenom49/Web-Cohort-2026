const aadhaarOfMe = Symbol("aadhaar");
const aadhaarOfYou = Symbol("aadhaar");

// console.log(typeof aadhaarOfMe);
// console.log(aadhaarOfMe === aadhaarOfYou);
// console.log(aadhaarOfMe.toString());
// console.log(aadhaarOfMe.description);

// const nonIndian = Symbol();
// console.log(nonIndian.toString());
// console.log(nonIndian.description);

// const biometricHash = Symbol("biometircHash");
// const bloodGroup = Symbol("bloodGroup");

// const citizenRecord = {
//   name: "HeyVenom49",
//   age: 25,
//   [biometricHash]: "oiajwoefj299uefj2",
//   [bloodGroup]: "B+",
// };
// console.log(Object.keys(citizenRecord));
// console.log(Object.getOwnPropertyDescriptor(citizenRecord));
// console.log(Object.getOwnPropertySymbols(citizenRecord));

//! How to make object iterable

//* Symbol ko humne iterable create karne ke liye hum [Symbol.iterator]() {} aur ye return karega ek object, wo object me 2 thing milega. First, agle wala element and Second, done: true/false

// const rtiQueryBook = {
//   queries: ["Infra budget", "Ration card", "Education budget", "Startup laws"],
//   [Symbol.iterator]() {
//     let index = 0;
//     const queries = this.queries;
//     return {
//       next() {
//         if (index < queries.length)
//           return { value: queries[index++], done: false };
//         return { value: undefined, done: true };
//       },
//     };
//   },
// };
// for (let query of rtiQueryBook) {
//   console.log(`Filing RTI: ${query}`);
// }

const governmentScheme = {
  name: "PM Kisan Yojna",
  price: 54,

  [Symbol.toPrimitive](hint) {
    if (hint === "string") return this.name;
    return this.price;
  },
};

console.log(+governmentScheme);
console.log(`${governmentScheme}`);

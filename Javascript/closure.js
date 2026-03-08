// function startCompany() {
//   function ca(name) {
//     return `Name of your company is ${name}`;
//   }
//   return ca;
// }

// const getMeACompany = startCompany();

// const myCompanyName = getMeACompany("Zomato");

// console.log(myCompanyName);

// function eternal(guest) {
//   const guestName = guest;
//   let count = 0;

//   function zomato() {
//     if (count === 1) return;
//     console.log(`Hi ${guestName}, from zomato`);
//     count++;
//   }

//   //* yaha pe humne control kar liya ki function kitni baar call ho sakta hai
//   function blinkit() {
//     if (count === 1) return;
//     console.log(`Hi ${guestName}, from blinkit`);
//     count++;
//   }

//   return {
//     zomato,
//     blinkit,
//   };
// }

// const hitesh = eternal("Hitesh");
// const piyush = eternal("Piyush");

// ye concept react ke useMemo wale se match ho raha hai
// hitesh.blinkit();
// hitesh.blinkit();
// hitesh.blinkit();
// hitesh.zomato();
// piyush.zomato();

// const cups = ["green", "blue", "red"];

//! ye bhi ek ka closure ka concept hai
// cups.map((item) => console.log(item));

// for (let i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 2000);
// }

// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 4000);
// }

function testPromise() {
  return new Promise((resolve, reject) => {
    console.log("executed before starting time taking task");
    setTimeout(() => {
      console.log("executing time taking task");
      resolve("resolved value");
      reject(new Error("rejected value"));
    }, 2 * 1000);
    console.log("executed after time taking task");
  });
}

async function executePromise() {
  const valueFromPromise = await testPromise();
  console.log(valueFromPromise);
}

executePromise();

// testPromise().then(
//   function onFullFill(value) {
//     console.log(value);
//   },
//   function onError(err) {
//     console.log(err);
//   },
// );

// testPromise().then(console.log).catch(console.log);

console.log("outside of promise function");

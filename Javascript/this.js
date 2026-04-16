// ? this ka use depend karta hai ki use kaha ho raha hai agar koi environment me kiya hai to empty return karega aur agar browser me kiya to window return karega
// console.log(this);

function something() {
  return typeof this;
}

// console.log(something());

function doSomething() {
  return this;
}

// console.log(doSomething());

// const obj = {
//   0: "zero",
//   1: "one",

//   someone() {
//     console.log(`${this[0]} and ${this[1]}`);
//   },
// };
// console.log(obj.someone());

// const filmDirector = {
//   name: "Idk",
//   superHeros: ["hulk", "ironman", "hawkeye"],

//   announceCast() {
//     this.superHeros.forEach((hero) => {
//       console.log(`${this.name} introduces ${hero}`);
//     });
//   },
// };
// filmDirector.announceCast();

// const filmSet = {
//   crew: "Spot boys",

//   prepareProps() {
//     console.log(`Outer this.crew ${this.crew}`);

//     function arrangeChair() {
//       console.log(`Inner this.crew${this.crew}`);
//     }

//     // arrangeChair();

//     const arrangeLight = () => {
//       console.log(`Arrow this.crew ${this.crew}`);
//     };
//     arrangeLight();
//   },
// };

// filmSet.prepareProps();

//! Detach method

const actor = {
  name: "Tony stark",
  standingOvation() {
    return `${this.name} got a standing ovation for 5 minutes`;
  },
};

// const bestThingHappen = actor.standingOvation();
// console.log(bestThingHappen); // name aayega

//const bestThingHappen = actor.standingOvation;
// console.log(bestThingHappen()); // undefined aayega

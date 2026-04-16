// function TataCar(chassisNumber, model) {
//   this.chassisNumber = chassisNumber;
//   this.model = model;
//   this.fuelLevel = 100;
// }

// TataCar.prototype.status = function () {
//   return `Tata ${this.model} #${this.chassisNumber} | Fuel: ${this.fuelLevel}`;
// };

// const car1 = new TataCar("MH-101", "Nexon");
// const car2 = new TataCar("DL-101", "Harrier");

// console.log(car1);
// console.log(car1.status());
// console.log(car2);
// console.log(car2.status());

//! Factory Function

// function createAutoRickshaw(id, route) {
//   return {
//     id,
//     route,
//     run() {
//       return `Auto ${this.id} running on ${this.route}`;
//     },
//   };
// }

// const auto1 = createAutoRickshaw("UP-1", "Lucknow-Kanpur");
// const auto2 = createAutoRickshaw("UP-2", "Agra-Mathura");

// console.log(auto1);
// console.log(auto1.run());
// console.log(auto2);
// console.log(auto2.run());

const obj = {
  a: 1,
  b: 2,
  a: 3,
};

console.log(obj);

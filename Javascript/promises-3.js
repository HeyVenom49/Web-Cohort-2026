// console.log("Before");
// Promise.resolve("resolved value").then((v) => console.log("Microtask ", v));
// console.log("After");

function boilWater(ms) {
  return new Promise((res, rej) => {
    console.log("karte hai ji boil water");
    if (typeof ms !== "number" || ms < 0)
      rej(new Error("ms must be in number and greater than zero"));
    setTimeout(() => {
      res("Ubel gayi paani");
    }, ms);
  });
}

boilWater(2000)
  .then(console.log)
  .catch((error) => console.log(error));

function grindLeaves() {
  return Promise.resolve("Leaves grounded");
}

function steepTea(time) {
  return new Promise((res) => {
    setTimeout(() => {
      res("Stepped Tea");
    }, time);
  });
}
function addSugar(spoons) {
  return `Added ${spoons} sugar`;
}

grindLeaves()
  .then(() => steepTea(3000))
  .then(console.log)
  .then(() => addSugar(4))
  .then(console.log)
  .catch((err) => console.log(err));

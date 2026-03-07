// const pritviraj = {
//   name: "pritviraj",
//   generation: "grandfather",
//   cookTraditionDish() {
//     return `${this.name} cooks an ancient family recipe`;
//   },
// };

// const raj = Object.create(pritviraj);
// console.log(raj);

// raj.name = "raj";
// raj.generation = "father";
// raj.runBusiness = function () {
//   return `${this.name} runs the family business`;
// };
// console.log(raj);

// const ranbir = Object.create(raj);
// ranbir.name = "ranbir";
// ranbir.generation = "son";
// ranbir.makeFilm = function () {
//   return `${this.name} directs blockbuster movies`;
// };

// console.log(ranbir.hasOwnproto)
// console.log(ranbir.makeFilm());
// console.log(ranbir.runBusiness());
// console.log(ranbir.cookTraditionDish());

console.log(Array.prototype.map);

if (!String.prototype.myToUpperCase) {
  String.prototype.myToUpperCase = function () {
    let result = "";

    for (let i = 0; i < this.length; i++) {
      let code = this.charCodeAt(i);

      if (code >= 97 && code <= 122) result += String.fromCharCode(code - 32);
      else result = this[i];
    }

    return result;
  };
}

//! typescript
// String.prototype.venomToUpperCase = function() : string {
//     let result = "";

//     for (let i = 0; i < this.length; i++)
//     {
//         let code = this.charCodeAt(i);

//         if (code >= 97 && code <= 122)
//             result += String.fromCharCode(code - 32);
//         else
//             result += this[i];
//     }
// }

console.log("popui".myToUpperCase());

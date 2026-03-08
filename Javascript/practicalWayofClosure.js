/*
? ye ek optimal way data store karne ka
* iski help se hum cpu processing save kar rahe hai
! ye possible hai with the help of HOF and Closure
 */

// ! bohot messy code ho gaya hai
// const addCache = {};
// const sqCache = {};

// function add(a, b) {
//   const key = `${a}:${b}`;
//   if (addCache[key]) return addCache[key];
//   const result = a + b;
//   addCache[key] = result;
//   return result;
// }

// function square(n) {
//   if (sqCache[n]) return sqCache[n];
//   return n * n;
// }

// add(3, 4);
// square(5);

function createOptimisedVersion(fn) {
  const cache = {}; // Tiffin
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) return cache[key];

    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function add(a, b) {
  return a + b;
}

function square(n) {
  return n * n;
}

const optimisedAdd = createOptimisedVersion(add);
optimisedAdd(2, 3);

const optimisedSquare = createOptimisedVersion(square);
// optimisedSquare(500000000);

console.time("startCode");
console.log(optimisedSquare(500000000));
console.timeEnd("startCode");
console.time("startCode");
console.log(optimisedSquare(500000000));
console.timeEnd("startCode");
console.time("startCode");
console.log(optimisedSquare(500000000));
console.timeEnd("startCode");
console.time("startCode");
console.log(optimisedSquare(500000000));
console.timeEnd("startCode");
console.time("startCode");
console.log(optimisedSquare(500000000));
console.timeEnd("startCode");

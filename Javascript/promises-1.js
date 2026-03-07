//! Classic way to handle promises
//* yaha pe cb pe ek error-handling karte aur ek object create karte hai
// function prepareOrderCB(dish, cb) {
//   setTimeout(() => cb(null, { dish, status: "prepared" }), 200);
// }

// function pickupOrderCB(order, cb) {
//   setTimeout(() => cb(null, { ...order, status: "picked-up" }), 400);
// }

// function deliverOrderCB(order, cb) {
//   setTimeout(() => cb(null, { ...order, status: "delivered" }), 600);
// }

// prepareOrderCB("Biryani", (err, order) => {
//   if (err) return console.log(err);
//   console.log(`${order.dish} : ${order.status}`);
//   pickupOrderCB(order, (err, order) => {
//     if (err) return console.log(err);
//     console.log(`${order.dish} : ${order.status}`);
//     deliverOrderCB(order, (err, order) => {
//       if (err) return console.log(err);
//       console.log(`${order.dish} : ${order.status}`);
//     });
//   });
// });

//! Modern way

//* pending, resolve, reject

function prepareOrder(dish) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!dish) {
        reject(new Error("No dish is there"));
        return;
      }
      console.log(`${dish} is ready`);
      resolve({ dish, status: "prepared" });
    }, 200);
  });
}

function pickupOrder(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!order) {
        reject(new Error("No order is there"));
        return;
      }
      console.log(`${order.dish} is pickup`);
      resolve({ ...order, status: "pickedup" });
    }, 200);
  });
}

function deliverOrder(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!order) {
        reject(new Error("No order is there"));
        return;
      }
      console.log(`${order.dish} is delivered`);
      resolve({ ...order, status: "delivered" });
    }, 200);
  });
}

prepareOrder("Paneer Tikka")
  .then((order) => pickupOrder(order))
  .then((order) => deliverOrder(order))
  .catch((err) => console.log(err));

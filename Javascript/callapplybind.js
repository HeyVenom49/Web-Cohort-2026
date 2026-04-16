function cookDish(ingredient, style) {
  return `${this.name} prepare ${ingredient} in ${style} style`;
}

const sharmaKitchen = {
  name: "sharma ji's kitchen",
};

const gutpaKitchen = {
  name: "gupta ji's kitchen",
};

// console.log(cookDish.call(sharmaKitchen, "Palak Paneer", "Indian"));
// console.log(cookDish.apply(gutpaKitchen, ["Paneer Palak", "Indian"]));

// const cookSharma = cookDish.bind(sharmaKitchen, "Palak Panner", "Indian");
// console.log(cookSharma);

const bill = [1, 20, 55, 100];

Math.max.apply(null, bill);

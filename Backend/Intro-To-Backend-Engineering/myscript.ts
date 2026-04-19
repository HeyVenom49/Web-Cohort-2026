function addTwoNumber(a: number, b: number): string {
    return a.toString() + b.toString();
}

const result:number = parseInt(addTwoNumber(1, 4));

console.log(result); // 14

// console.log(addTwoNumber(3, 4));
// console.log(addTwoNumber("Ye tune kya kiya", true)); //! ye run to karega but tumko bata bhi dega ki bhai maine number expect kar raha hu
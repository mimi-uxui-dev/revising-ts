function add(n1: number, n2: number): number {
  return n1 + n2;
}

function showResult(num: number): void {
  console.log("Result: " + num);
  return; // this will make undefiend go away
}

// showResult(add(6, 2)); // undefiend

// console.log(showResult(add(3, 2))); // 5

let combineValues0: Function;
let combineValues: () => number; // def of this func is that it takes NO valuer and must return a number
let combineValues1: (a: number, b: number) => number;

combineValues0 = console.log;

console.log(combineValues0("miiiled"));

// combineValues("miiiled");

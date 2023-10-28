function add(n1: number, n2: number): number {
  return n1 + n2;
}

function showResult(num: number): void {
  console.log("Result: " + num);
  return; // this will make undefiend go away
}

showResult(add(3, 2)); // undefiend

console.log(showResult(add(3, 2))); // 5

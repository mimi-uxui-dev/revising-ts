type Combinabbble = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinabbble,
  input2: Combinabbble,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(1, 2, "as-number");
// console.log(combineAges);

const combineNames = combine("Mimi", "Jade", "as-text");
// console.log(combineNames);

type User = { name: string; age: number };
const u1: User = { name: "Max", age: 30 }; // this works!

function greet(user: User) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

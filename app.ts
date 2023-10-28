function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 3.7;
const printResult = true;
const resultPhrase = "Result is: ";

// add(number1, number2, printResult, resultPhrase);

// Type objects
const person: {
  name: string;
  age: number;
} = {
  name: "Mimi",
  age: 28,
};

console.log(person.name);

const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

console.log(product.id);

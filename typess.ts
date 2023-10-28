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
  hobbies: string[];
  role: [number, string]; //this is a tuple aka a special array
} = {
  name: "Mimi",
  age: 28,
  hobbies: ["cooking", "dancing"],
  role: [1, "author"],
};

// for (const hobby in person.hobbies) {
//   console.log(hobby.toLocaleUpperCase());
// }

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

let favActivies: any[];
favActivies = ["Sports", 7];

//  console.log(product.id);

// Enum
enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = 200,
}
// enum Role {
//   ADMIN,
//   READ_ONLY,
//   AUTHOR,
// }

const person1 = {
  name: "baby",
  age: 28,
  hobbies: ["drawing", "dancing"],
  role: Role.ADMIN,
};
// if (person1.role === Role.ADMIN) {
//   console.log("yes its an admin");
// }
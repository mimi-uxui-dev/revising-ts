let userInput: unknown;
let userName: string;

// any is more flexible than unknown
userInput = 5;
userInput = "max";
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw {
    message: message,
    errorCode: code,
  }; // it never returns anything bcz ''throw'' crashes the code, it doesnt even return undefiend
}

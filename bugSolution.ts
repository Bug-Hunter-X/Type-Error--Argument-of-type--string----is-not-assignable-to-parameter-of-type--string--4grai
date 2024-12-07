function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Alice", "Bob"];

// Iterate over the array and greet each person
for (let i = 0; i < user.length; i++) {
  console.log(greeter(user[i]));
}

// Or, use a different function that accepts an array of strings
function greetMany(people: string[]): string {
  return "Hello, " + people.join(", ");
}

console.log(greetMany(user));
// Using fetch()
const todo = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json());
console.log("TODO from jsonplaceholder ", todo);

// Top Level await
const getPromise = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve("123"), 3000));

const result = await getPromise();
console.log(result);

// // YOU STILL NEED your function to be async if you are using await inside the function
// const callback = () => {
//   const result = await getPromise();
//   console.log(result);
// };

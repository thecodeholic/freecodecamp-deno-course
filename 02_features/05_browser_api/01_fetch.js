// Using fetch()
const data = await fetch("URL_TO_FETCH_THE_DATA")
  .then((response) => response.json());
console.log(data);

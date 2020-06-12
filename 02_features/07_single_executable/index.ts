setTimeout(() => {
  Deno.writeTextFile("./sample.txt", new Date().toString());
}, 5000);

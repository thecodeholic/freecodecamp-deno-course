
// Read directory
for await (const dirEntry of Deno.readDir("C:\\Users\\TheCodeholic")) {
  console.log(dirEntry.name);
}

// 
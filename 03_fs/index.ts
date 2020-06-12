// Get arguments
// console.log(Deno.args[0], Deno.args[1]);

// Read directory
// const path = Deno.args[0];
// for await (const dirEntry of Deno.readDir(path)) {
//   console.log(dirEntry.name);
// }

// Check if the file exists
async function exists(path: string) {
  try {
    const stat = await Deno.lstat(path);
    return true;
  } catch (e) {
    if (e instanceof Deno.errors.NotFound) {
      // file or directory does not exist
      return false;
    } else {
      // unexpected error, maybe permissions, pass it along
      throw e;
    }
  }
}

console.log(await exists("test"));

// Create Directory
await Deno.mkdir(`test`);
// Deno.mkdirSync(`test`);

// Rename Directory or file
await Deno.rename("test", "test2");
// Deno.renameSync("test", "test2");

// Delete Directory or file
await Deno.remove("test2");

// Create file
await Deno.writeTextFile("sample.txt", "Lorem ipsum");
Deno.writeTextFileSync("sample.txt", "Lorem ipsum");

// Read file
// const content = await Deno.readTextFile("sample.txt");
const content = Deno.readTextFileSync("sample.txt");
console.log(content);

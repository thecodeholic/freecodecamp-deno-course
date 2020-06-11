import {
  serve,
  ServerRequest,
  Server,
} from "https://deno.land/std@0.54.0/http/server.ts";
const s: Server = serve({ port: 8000 });
console.log("http://localhost:8000/");

for await (const req: ServerRequest of s) {
  if (req.url === "/") {
    req.respond({ body: "Hello World" });
  } else if (req.url === "/about") {
    req.respond({ body: "About me" });
  }
}

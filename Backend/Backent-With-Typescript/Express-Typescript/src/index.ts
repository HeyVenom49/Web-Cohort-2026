import http from "http";
import { env } from "./env.js";
import { createApplicationServer } from "./app/index.js";
async function main(): Promise<void> {
  try {
    const server = http.createServer(createApplicationServer());
    const port: number = env.PORT ? +env.PORT : 8080;

    server.listen(port, () => {
      console.log(`Server is running on the PORT number ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();

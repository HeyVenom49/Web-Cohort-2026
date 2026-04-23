import "dotenv/config";
import app from "./src/app.js";
import connectDB from "./src/common/config/db.js";

const port = process.env.PORT || 8080;

async function createServer() {
  await connectDB();

  app.listen(port, () => {
    console.log(
      `Server is running on the port ${port} in ${process.env.NODE_ENV} mode`,
    );
  });
}

createServer().catch((error) => {
  console.log("Bhai gaya tu", error);
  process.exit(1);
});

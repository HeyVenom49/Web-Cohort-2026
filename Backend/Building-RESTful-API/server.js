import "dotenv/config";
import app from "./src/app.js";
import connectDB from "./src/common/config/db.js";

const port = process.env.PORT || 5000;

const start = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(
      `Server is running on the port number ${port} in ${process.env.NODE_ENV} mode`,
    );
  });
};

start().catch((err) => {
  console.log("Failed to start the server ", err);
  process.exit(1);
});

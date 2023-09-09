import app from "./server.js";
import Config from "./config.js";
// import mongoose from "mongoose";

const port = Config.port || 6000;
const server = app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

/******************************************************************************
 *                              Graceful Shutdown                             *
 ******************************************************************************/
process.on("SIGTERM", function () {
  // mongoose.connection.close(() => {
  //   console.log("Mongoose connection disconnected on app termination");
  //   process.exit(0);
  // });
  server.close();
});

process.on("SIGINT", function () {
  // mongoose.connection.close(() => {
  //   console.log("Mongoose connection disconnected on app termination");
  //   process.exit(0);
  // });
  server.close();
});

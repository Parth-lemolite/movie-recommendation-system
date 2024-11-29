import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://0.0.0.0:27017/movies")
  .then(async () => {
    console.log("MongoDB Connected...");
  })
  .catch((error) => {
    if (error.message.indexOf("ECONNREFUSED") !== -1) {
      console.log(JSON.stringify(error));
      console.error(
        "Error: The server was not able to reach MongoDB. Maybe it's not running?",
        error
      );
      process.exit(1);
    } else {
      console.log("Error :>>", error);
    }
  });

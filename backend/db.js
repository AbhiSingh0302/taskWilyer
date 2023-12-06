const mongoose = require("mongoose");

function mongoConnection() {
  mongoose
    .connect(
      `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.z8mfmys.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    )
        const db = mongoose.connection;
        db.on("error", console.error.bind(console, "connection error: "));
        db.once("open", function () {
          console.log("Connected successfully");
        });
    console.log("sd");
}

module.exports = mongoConnection;

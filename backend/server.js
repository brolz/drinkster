const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .catch((err) =>
    console.log(
      "The following error occured while connecting to the database: " + err
    )
  );

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established");
});

// const drinkRouter = require("./routes/drinks");
// const userRouter = require("./routes/users");

// app.use("/drinks", drinkRouter);
// app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

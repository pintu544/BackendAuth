require("dotenv").config();
require("express-async-errors");

const connectDB = require("./db/connect");
const express = require("express");
const cors = require("cors");
const app = express();
const mainRouter = require("./routes/user");

app.use(express.json());

app.use(cors({
  origin: 'https://signinregister.netlify.app' // or '*' to allow all origins
}));
app.use("/api/v1", mainRouter);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    const response = await connectDB(process.env.MONGO_URI);
    console.log(
      response.connections[0].host + " " + response.connections[0].port
    );
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

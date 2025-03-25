const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");
const cors = require("cors");
const app = express();
const userRoutes = require("./router/Userrout");

dotenv.config();
app.use(express.json()); // Add this line to parse JSON body
app.use(
  cors({
    origin: "http://localhost:5173", // Allow only frontend origin
    credentials: true, // Allow cookies & auth headers
  })
);
const port = 3000;
connectDB();
console.log(process.env.MONGO_URI);
app.use("/api/user", userRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

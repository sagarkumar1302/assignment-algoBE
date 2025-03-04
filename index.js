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
    origin: "https://frontend-password-manager-ten.vercel.app", // Allow only frontend origin
    credentials: true, // Allow cookies & auth headers
  })
);
const port = 3000;
connectDB();
console.log(process.env.MONGO_URI);
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

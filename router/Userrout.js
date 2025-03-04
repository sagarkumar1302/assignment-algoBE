const express = require("express");
const User = require("../models/Password");

const router = express.Router();

// Create User
router.post("/register", async (req, res) => {
  try {
    const { appname, username, password } = req.body;
    const newUser = new User({ appname, username, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully", newUser });
  } catch (error) {
    res.status(500).json({ error: "Error registering user" });
  }
});
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedEntry = await User.findByIdAndDelete(req.params.id);
    if (!deletedEntry) {
      return res.status(404).json({ message: "Password entry not found" });
    }
    res.json({ message: "Password entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting password entry" });
  }
});
router.get("/", async (req, res) => {
  const passwords = await User.find();
  res.json(passwords);
});
router.put("/update/:id", async (req, res) => {
  try {
    const updatedEntry = await User.findByIdAndUpdate(
      req.params.id,
      req.body, // Update with the request body data
      { new: true } // Return the updated document
    );

    if (!updatedEntry) {
      return res.status(404).json({ message: "Password entry not found" });
    }

    res.json({ message: "Password entry updated successfully", updatedEntry });
  } catch (error) {
    res.status(500).json({ error: "Error updating password entry" });
  }
});
module.exports = router;

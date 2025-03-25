const express = require("express");
const User = require("../models/Task");

const router = express.Router();
router.post("/register", async (req, res) => {
  try {
    const { title, description } = req.body;
    const newUser = new User({ title, description });
    await newUser.save();
    res.status(201).json({ message: "Task Added Successfully", newUser });
  } catch (error) {
    res.status(500).json({ error: "Error registering user" });
  }
});
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedEntry = await User.findByIdAndDelete(req.params.id);
    if (!deletedEntry) {
      return res.status(404).json({ message: "Task entry not found" });
    }
    res.json({ message: "Task entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting Task entry" });
  }
});
router.get("/", async (req, res) => {
  const task = await User.find();
  res.json(task);
});
router.put("/update/:id", async (req, res) => {
  try {
    const updatedEntry = await User.findByIdAndUpdate(
      req.params.id,
      req.body, // Update with the request body data
      { new: true } // Return the updated document
    );

    if (!updatedEntry) {
      return res.status(404).json({ message: "Task entry not found" });
    }

    res.json({ message: "Task entry updated successfully", updatedEntry });
  } catch (error) {
    res.status(500).json({ error: "Error updating Task entry" });
  }
});
module.exports = router;

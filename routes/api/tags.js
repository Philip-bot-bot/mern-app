const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Tag = require("../../models/Tag");

// @route    GET api/tags
// @desc     Get all tags
// @access   Private
router.get("/", auth, async (req, res) => {
  try {
    let tags = await Tag.find();

    // Optional: Add default tags if none exist
    if (tags.length === 0) {
      tags = await Tag.insertMany([
        { name: "Work" },
        { name: "Personal" },
        { name: "Chores" },
        { name: "School" }
      ]);
      console.log("📌 Default tags inserted.");
    }

    res.json(tags);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

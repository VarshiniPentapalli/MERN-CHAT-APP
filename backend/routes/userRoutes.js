const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");

const router = express.Router();

// REGISTER
router.route("/").post(registerUser);

// LOGIN
router.post("/login", authUser);

// SEARCH USERS
router.get("/", allUsers);

module.exports = router;

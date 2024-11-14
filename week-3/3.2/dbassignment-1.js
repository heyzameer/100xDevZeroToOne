const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456"; // Secret for JWT

mongoose.connect(
    "mongodb+srv://zameer:pHYM95hMFBu6rudP@cluster0.kwt2q.mongodb.net/mydatabase", 
    { useNewUrlParser: true, useUnifiedTopology: true } // Adding necessary options for connection
);

const User = mongoose.model("User", {
  name: String,
  username: String,
  password: String, // Fixed typo (was 'pasword')
});

const app = express();
app.use(express.json());

// Function to check if user exists in the database
async function userExists(username, password) {
  const user = await User.findOne({ username: username, password: password });
  return user !== null; // Returns true if user exists, else false
}

// SignIn route
app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  // Check if the user exists
  if (!await userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesn't exist or invalid password",
    });
  }

  // Generate a JWT token
  var token = jwt.sign({ username: username }, jwtPassword, { expiresIn: '1h' });

  // Respond with the token
  return res.json({
    token,
  });
});

// Users route to fetch other users, excluding the authenticated user
app.get("/users", async function (req, res) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ msg: "No token provided" });
  }

  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    // Fetch all users except the one from the token
    const users = await User.find({ username: { $ne: username } });

    // Respond with the list of users
    res.json({
      users,
    });

  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});


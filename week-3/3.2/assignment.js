//authintication post the username and password gives a token jwt send get req with token gives the user or other users
//used jwt library used function signin and verufy
const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json()); // for parsing application/json
// in memory  database for testing purposes only.
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  //using .somw
//   return ALL_USERS.some(user => user.username === username && user.password === password);
// using find
// return ALL_USERS.find(user => user.username === username && user.password === password) !== undefined;

  //using for loop
    for (let i = 0; i < ALL_USERS.length; i++) {
      if (ALL_USERS[i].username === username && ALL_USERS[i].password === password) {
        return true;
      }
    }
    return false;
  }
// on post with username passsword in body json
app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }
//sigin user
  var token = jwt.sign({ username: username },jwtPassword);
  return res.json({
    token,
  });//return token to end user
});
// on get with the token  in the auth header
app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
    res.json({
        // users:ALL_USERS
        users:ALL_USERS.filter((u)=> u.username!==username),
    })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3001,()=>console.log("Server is running on port 3001"));

// in post
// {
//   "username": "harkirat@gmail.com",
//    "password": "123"
// }

// in get
// use that token
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhhcmtpcmF0QGdtYWlsLmNvbSIsImlhdCI6MTcwOTQ1Mjg4M30.kA-P_RQf9vKrU8cMc-LrHWNeJ79RK8fzDxTZhsKKl84"
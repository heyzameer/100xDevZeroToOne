const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// http://localhost:3000/admin/signin{
//     "username":"zameer@gmail.com",
//     "password":"123"
// }
//we get a token
//  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InphbWVlckBnbWFpbC5jb20iLCJpYXQiOjE3MzE2NDQwMzh9.K7_Ya02Cu7qnznT9CUIumJCAHJ0e0lO_N722-gM1BQg"
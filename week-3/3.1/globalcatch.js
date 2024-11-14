// A basic error-handling middleware function in Express takes four arguments: err, req, res, and next. By defining this function at the end of your middleware stack, you ensure that any errors not handled by other route handlers or middleware will be caught here.

const express = require('express');
const app = express();

// Parse JSON bodies
app.use(express.json());

app.post("/health-checkup", (req, res) => {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("you have " + kidneyLength + " kidneys");
});


//global catches ugli error to clean error


// these take 4 input and defined at  the ennd
app.use((err, req, res, next) => {
        res.json({
           msg: "soorry erorr"}) 
})

app.listen(3002, () => {
    console.log('Server listening on port 3002');
});

//http://localhost:3002/health-checkup
// post req body-
// {
//     "kidneys":[1,2]

// }
// we need input validation to vaoid the error

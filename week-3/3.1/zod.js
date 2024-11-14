//input validation zoooddd
// npm install zod
const z=require("zod")




const express = require('express');
const app = express();
const zod=require("zod")
// using zod for array of numbers
const schema=zod.array(zod.number());

// Parse JSON bodies
app.use(express.json());

app.post("/health-checkup", (req, res) => {
    const kidneys = req.body.kidneys;
    const result = schema.safeParse(kidneys);

    if (result.success) {
        res.send({
            kidneys: result.data,
            msg: "Parsing successful"
        });
    } else {
        res.status(400).send({
            msg: "Parsing failed",
            error: result.error.errors
        });
    }
});

app.use((err, req, res, next) => {
            res.json({
               msg: "soorry erorr"}) 
    })


app.listen(3002, () => {
    console.log('Server listening on port 3002');
});

// http://localhost:3002/health-checkup
// post req body-
// {
    // "kidneys":[1,2]

// }
const express = require('express');
const app = express();
const zod=require("zod")
// using zod for array of number
const schema=zod.array(zod.number());

const schemaa= zod.object({
    email:zod.string().email(),
    password:zod.string().min(5),
    country:zod.literal("IN").or(zod.literal("US")),
    kidny:zod.array(zod.number())
});

// Parse JSON bodies
app.use(express.json());

app.post("/health-checkup", (req, res) => {
    const { email, password, country, kidny } = req.body;
    const result = schemaa.safeParse({ email, password, country, kidny });

    if (result.success) {
        res.send({
            email,
            password,
            country,
            kidny,
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


app.listen(3007, () => {
    console.log('Server listening on port 3007');
});


// post req  http://localhost:3007/health-checkup
// {
//     "email": "abc@gmail.com",
//     "password": "ab22d2dd",
//     "country": "US",
//     "kidny": [1, 1]
// }


const express = require("express");
const app = express();
app.use(express.json());


// let Numberofreq=0;
// function calculatereq(req,res,next) {
//     Numberofreq++;
//     console.log(Numberofreq);
//     next();
// }
// // ab ye function har jagah call hoga bina call kiye
// app.use(calculatereq)


function usermiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if (username !== "zameer" || password !== "pass") {
        res.status(403).json({
            msg: "user not exist",
        });
    } else {
        next();
    }
};


function kidneymiddleware(req, res, next) {
    const kidneyid = req.query.kidneyid;

    if (kidneyid !== "1" && kidneyid !== "2") {
        res.status(411).json({
            msg: "wrong input",
        });
    } else {
        next();
    }
};



app.get("/health-checkup", usermiddleware, kidneymiddleware, function (req, res) {
    res.send("your heart is good"+ Numberofreq);
});

app.get("/health-check", usermiddleware, kidneymiddleware, function (req, res) {
    res.send("your heart is good");
});

app.get("/health-kidney", kidneymiddleware, function (req, res) {
    res.send("your kidney is good");
});

app.listen(3002, () => {
    console.log('Server listening on port 3002');
});



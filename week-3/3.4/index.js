//middleware

const express = require("express");
const app = express();

// Middleware
function checkAge(req, res, next) {
    const age = req.query.age;
    if (age >= 18) {
        next();
    } else {
        res.status(411).json({ msg: 'Sorry, you are not old enough to ride the rollercoaster' });
    }
}
app.use(checkAge);// this thing  is gonna run before every route that follows it
// Route with middleware
app.get('/ride2', checkAge, function(req, res) {
    res.json({ msg: "You have successfully ridden the ride 2" });
});




//without middleware

//function returns a boolean
function isOldenough(age){
    if (age >= 18) {
        return true;
        } else{
            return false;
}}

app.get('/ride1', function(req, res) {

    if (isOldenough(req.query.age)) {
        res.json({
            msg: "you have successfully ridden the ride 1"})
   }else{
    res.status(411).json({msg:'Sorry you are not old enough to ride the rollercoaster'});
    }
} );


app.listen(5001, () => {
    console.log("Server is running on port 5001");
});



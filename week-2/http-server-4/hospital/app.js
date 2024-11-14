const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());

var users =[{
    name:"John",
    age:30,
    kidney:[{
        healthy:false
    }]
}];

// Export users so it can be used in routes
module.exports = { users };

// Import routes from separate files
const getKidneys = require('./routes/getKidneys');
const postKidneys = require('./routes/postKidneys');
const putKidneys = require('./routes/putKidneys');
const deleteKidneys = require('./routes/deleteKidneys');

// Use the routes
app.use('/get', getKidneys);
// http://localhost:3001/get
app.use('/post', postKidneys);
// input {
// "ishealthy":true
// }
app.use('/put', putKidneys);
app.use('/delete', deleteKidneys);


app.listen(PORT,()=>{
    console.log(`Server is running onn port: ${PORT}`)
})
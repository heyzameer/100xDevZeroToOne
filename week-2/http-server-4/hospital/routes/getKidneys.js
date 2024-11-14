const express = require('express');
const router = express.Router();
const { users } = require('../app');



// http://localhost:3001/get
router.get("/",(req,res)=>{
    const johnkidney=users[0].kidney;
    const numberofkidneys=johnkidney.length;
    let numberofhealthykidney=0;
    for (let i=0;i<numberofkidneys;i++){
     if(johnkidney[i].healthy==true) {
          numberofhealthykidney++;
         };
    }
    const numberofunhealthykidneys=numberofkidneys-numberofhealthykidney;
    
    res.send(`There are   ${numberofkidneys} kidneys in John
    and ${numberofhealthykidney} of them are healthy.
    ${numberofunhealthykidneys} are unhealthy.`);
})


module.exports = router;
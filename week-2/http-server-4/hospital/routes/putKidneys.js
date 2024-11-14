const express = require('express');
const router = express.Router();
const { users } = require('../app');

router.put("/", function(req,res){
    if (atleastoneunhealthykid()) {
    for(let i=0;i<users[0].kidney.length;i++)
    {
        users[0].kidney[i].healthy=true
    }
    res.json("All kidneys have been made healthy");
    }
    else{
        res.json("all are healty")
    }
})

function atleastoneunhealthykid(){
    let atleastoneunhealthy = false;
    for(let i=0;i<users[0].kidney.length;i++)
    {
        if(!users[0].kidney[i].healthy){
            atleastoneunhealthy=true;
        }
}
return atleastoneunhealthy;
}


module.exports = router;
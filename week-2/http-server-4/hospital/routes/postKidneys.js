const express = require('express');
const router = express.Router();
const { users } = require('../app');

router.post("/",function(req,res){
    const ishealthy =req.body.ishealthy;
    users[0].kidney.push({
        healthy : ishealthy
    });
    res.json({
        msg:"done"
    });
});


module.exports = router;
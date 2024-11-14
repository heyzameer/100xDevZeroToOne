const express = require('express');
const router = express.Router();
const { users } = require('../app');

//remove unhealthy kidney
router.delete("/", function(req, res) {
// one unhealthy should be there else return 411
if (atleastoneunhealthykid()) {
    const newkidneys = [];
    for (let i = 0; i < users[0].kidney.length; i++) {
        if (users[0].kidney[i].healthy) {
            newkidneys.push({
                healthy: true
            });
        }
    }
    users[0].kidney = newkidneys;

    res.json({
        msg: "done"
    });
} else {
    res.status(411).json({ msg: 'no bad kidney' });
}

});

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
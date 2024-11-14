//not good way doing input val and auth
const express=require("express");
const app=express();

console.log("hello worls");


app.get("/health-checkup",function (req,res){
 const kidneyid=req.query.kidneyid;
 const username=req.headers.username;
 const password=req.headers.password;


//early return
if(username!="zameer"|| password!="pass"){
    res.status(403).json({
        msg:"user not exist",
    });
    return;
}
if(kidneyid!=1&&kidneyid!=2){
    res.status(411).json({
        msg:"wrong input",
    });
    return;
}

res.send("your heart is healthy");

});
app.listen(3002, () => {
    console.log('Server listening on port 3002');
  });

// postman headers write the uswer name  and the password 
const express = require("express")
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = 4000;
app.get("/sum",(req,res)=>{

    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    console.log(a,b)

    if(!isNaN(a) && !isNaN(b)){

        const ans = a +b;
        res.send(ans.toString());
    }else{
        res.status(400).send('Error: Please provide valid numbers for a and b.');
    }

})

app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
// const express = require("express");
// const app = express();

// app.get("/sub",(req,res) =>{
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     if(isNaN(a) || isNaN(b)){
//         return res.send(`plese provide valid number`)
//     }

//     const sub = a - b;

//     res.send(`the sub of ${a} and ${b} is: ${sub}`)
// })

// app.listen(3001,()=>{
//     console.log(`server is running on port 3001`);
// })


// app.use(express.json());

// app.post("/mul",(req,res)=>{

// const {num1,num2} = req.body;
// if (num1 == null || num2 == null) {
//     return res.status(400).send('Both num1 and num2 are required');
//   }

//   // Check if both num1 and num2 are valid numbers
//   if (isNaN(num1) || isNaN(num2)) {
//     return res.status(400).send('Please provide valid numbers');
//   }

//   // Perform multiplication
//   const result = num1 * num2;

//   // Send the result back to the client
//   res.send(`The result of multiplying ${num1} and ${num2} is: ${result}`);
// });
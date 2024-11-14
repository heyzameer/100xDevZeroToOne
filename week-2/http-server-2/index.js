// const express = require('express');
// const app = express();

// // Route to calculate sum of numbers from 1 to n
// app.get('/sum', (req, res) => {
//   // Get the number 'n' from the query parameter
//   const n = parseInt(req.query.n);

//   // Check if 'n' is a valid number
//   if (isNaN(n) || n <= 0) {
//     return res.status(400).send('Please provide a valid positive integer as "n"');
//   }

//   // Calculate the sum from 1 to n using the formula n * (n + 1) / 2
//   const sum = (n * (n + 1)) / 2;

//   // Send the result back to the client
//   res.send(`The sum of numbers from 1 to ${n} is: ${sum}`);
// });


// // GET http://localhost:3000/sum?n=5












// // Middleware to parse JSON body
// app.use(express.json()); // Built-in body parser for JSON

// // Route to calculate sum of numbers from 1 to n
// app.post('/sum', (req, res) => {
//   const n = req.body.n;  // Access the number 'n' from the body of the request

//   // Check if 'n' is a valid number
//   if (isNaN(n) || n <= 0) {
//     return res.status(400).send('Please provide a valid positive integer as "n"');
//   }

//   // Calculate the sum from 1 to n using the formula n * (n + 1) / 2
//   const sum = (n * (n + 1)) / 2;

//   // Send the result back to the client
//   res.send(`The sum of numbers from 1 to ${n} is: ${sum}`);
// });


// // POST http://localhost:3000/sum with JSON body { "n": 5 }






// // Start the server on port 3000
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

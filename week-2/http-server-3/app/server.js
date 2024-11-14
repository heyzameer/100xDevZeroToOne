const express = require('express');
const app = express();
const port = 3000;

// Import routes from separate files
const additionRoute = require('./routes/addition');
const subtractionRoute = require('./routes/subtraction');

// Use the routes
app.use('/add', additionRoute);
app.use('/subtract', subtractionRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});




// http://localhost:3000/add?num1=5&num2=10
// http://localhost:3000/subtract?num1=10&num2=5
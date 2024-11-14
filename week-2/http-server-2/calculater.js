const express = require('express');
const app = express();

app.get('/calculate', (req, res) => {
  // Destructuring the query parameters
  const { num1, num2, operation } = req.query;

  // Check if num1, num2, and operation are provided
  if (!num1 || !num2 || !operation) {
    return res.status(400).send('Please provide num1, num2, and operation parameters.');
  }

  // Convert num1 and num2 to numbers
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  // Validate if the inputs are numbers
  if (isNaN(n1) || isNaN(n2)) {
    return res.status(400).send('Both num1 and num2 should be valid numbers.');
  }

  let result;

  // Perform the operation based on the input operation
  switch (operation) {
    case 'add':
      result = n1 + n2;
      break;
    case 'subtract':
      result = n1 - n2;
      break;
    case 'multiply':
      result = n1 * n2;
      break;
    case 'divide':
      if (n2 === 0) {
        return res.status(400).send('Cannot divide by zero.');
      }
      result = n1 / n2;
      break;
    default:
      return res.status(400).send('Invalid operation. Please use add, subtract, multiply, or divide.');
  }

  // Send the result back to the client
  res.send(`The result of ${operation}ing ${n1} and ${n2} is: ${result}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


// http://localhost:3000/calculate?num1=5&num2=10&operation=add
// The result of adding 5 and 10 is: 15
// http://localhost:3000/calculate?num1=20&num2=8&operation=subtract
// The result of subtracting 20 and 8 is: 12
// http://localhost:3000/calculate?num1=6&num2=7&operation=multiply
// http://localhost:3000/calculate?num1=15&num2=3&operation=divide

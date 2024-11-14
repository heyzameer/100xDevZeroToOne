const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { num1, num2 } = req.query;
  if (num1 && num2) {
    const difference = parseFloat(num1) - parseFloat(num2);
    res.send(`The difference between ${num1} and ${num2} is: ${difference}`);
  } else {
    res.status(400).send('Please provide num1 and num2 as query parameters.');
  }
});

module.exports = router;

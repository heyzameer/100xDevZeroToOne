const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { num1, num2 } = req.query;
  if (num1 && num2) {
    const sum = parseFloat(num1) + parseFloat(num2);
    res.send(`The sum of ${num1} and ${num2} is: ${sum}`);
  } else {
    res.status(400).send('Please provide num1 and num2 as query parameters.');
  }
});

module.exports = router;



// What is a Router in Express?
// An Express Router is a way to create modular route handlers, meaning you can define routes for different endpoints in separate files and then import them into your main application. The router acts as a mini-instance of an Express app, where you can define routes, middleware, and other handlers.

// How It Works:
// Router Creation:

// express.Router() creates a new router object. This object behaves like a mini Express app that you can use to define routes.
// Defining Routes:

// After creating the router, you can define the routes (e.g., GET, POST, etc.) on the router object instead of directly on the app object.
// Exporting Router:

// Once you've defined all the routes for that specific file, you can export the router, which will be imported into your main application file (e.g., server.js).
// Mounting the Router:

// In the main application, you use app.use() to mount the router at a specific path.
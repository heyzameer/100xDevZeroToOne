const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

const PORT = 5000;

app.get('/sum', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (!isNaN(a) && !isNaN(b)) {
        const sum = a + b;
        res.send(sum.toString());
    } else {
        res.status(400).send('Error: Please provide valid numbers for a and b.');
    }
});

// Define the '/interest' route to handle the interest calculation
app.get('/interest', (req, res) => {
    const principal = parseFloat(req.query.p);  // Principal (P)
    const rate = parseFloat(req.query.r);       // Rate of interest (R)
    const time = parseFloat(req.query.t);       // Time period in years (T)

    // Check if all inputs are valid numbers
    if (!isNaN(principal) && !isNaN(rate) && !isNaN(time)) {
        // Calculate simple interest
        const interest = (principal * rate * time) / 100;
        const total = principal + interest;  // Calculate total (Principal + Interest)
        
        // Send the result (Interest and Total)
        res.json({ interest: interest.toFixed(2), total: total.toFixed(2) });
    } else {
        res.status(400).send('Error: Please provide valid numbers for principal, rate, and time.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

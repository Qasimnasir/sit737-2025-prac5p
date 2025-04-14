const express = require('express');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Function to validate numbers
const validateNumbers = (num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) {
        return { error: "Invalid input. Both num1 and num2 must be numbers." };
    }
    return null;
};

// Health Check Endpoint
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Addition Endpoint
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    
    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json(error);
    
    res.json({ result: num1 + num2 });
});

// Subtraction Endpoint
app.get('/subtract', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json(error);

    res.json({ result: num1 - num2 });
});

// Multiplication Endpoint
app.get('/multiply', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json(error);

    res.json({ result: num1 * num2 });
});

// Division Endpoint
app.get('/divide', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json(error);

    if (num2 === 0) {
        return res.status(400).json({ error: "Division by zero is not allowed." });
    }

    res.json({ result: num1 / num2 });
});

// Start the server
app.listen(port, () => {
    console.log(`Arithmetic microservice is running on http://localhost:${port}`);
});

const express = require('express');
const app = express();
const heroRoutes = require('./ruter/heroRoutes');
const logger = require('./middleware/logger');

// Middleware for parsing JSON data in requests
app.use(express.json());
app.use(logger);

// Use heroRoutes to handle all routes starting with /heroes
app.use('/heroes', heroRoutes);

// Define a basic GET route to the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the REST API!');
});

// Middleware for error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something broke!' });
});

// Middleware for handling 404 - pages that do not exist
app.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
});

// Export the Express application
module.exports = app;

const app = require('./src/app');
const port = 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

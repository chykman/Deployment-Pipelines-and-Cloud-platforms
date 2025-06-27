const express = require('express'); // Import the Express framework
const app = express();              // Create an Express application
const path = require('path');          // Import the path module

app.use(express.static(path.join(__dirname, '/frontend/build'))); // Serve static files from the 'public' directory

// Define a GET route at "/names"
app.get('/names', (req, res) => {
  res.send("Telmo");                // Send a plain text response "Telmo"
});

// Start the server and listen on port 5000
app.listen(5000, () => {
  console.log("Server is running on port 5000"); // Log to the console
});

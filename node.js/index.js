const express = require('express');
const app = express();
const port = 3000; // Port number for the server

// Define routes and middleware here...

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

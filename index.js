const express = require('express');
const app = express();

// Dynamically add port
const PORT = process.env.PORT || 5000;
app.listen(PORT);


// Create route handler
app.get('/', (req, res) => {
  res.send({hi: 'there'});
});
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());

// Dynamically add port
const PORT = process.env.PORT || 5000;
app.listen(PORT);


// Create route handler
app.get('/', (req, res) => {
  res.send({hi: 'there'});
});
// import express from 'express';
const express = require('express');

const app = express();

// Settign up template engine
app.set('view engine', 'ejs');

// Settign up routes
app.get('/', (req, res) => {
  res.render('home');
});

// Settign up port
app.listen(4000, () => {
  console.log('Listening on port 4000');
});

const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 3005;
const bookRoutes = require('./routes/books');

// JSON BODY PARSER
app.use(express.json()); //body-parser

// HTTP Request Logger
app.use(morgan('combined'));
// ROUTES

// ROOT
app.get('/', (request, response) => {
  response.send('Tech Library: ROOT IS GO.');
});

// BOOKS
app.use("/books", bookRoutes);







//SERVER LISTENER
app.listen( PORT, () => {
  console.log(`TECH LIBRARY: Listening on port no. ${PORT}...`);
});

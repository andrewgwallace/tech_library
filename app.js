const express = require('express');
const app = express();
const PORT = process.env.PORT || 3005;
const bookRoutes = require('./routes/books');

// JSON BODY PARSER
app.use(express.json()); //body-parser

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

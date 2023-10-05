const express = require('express');
const Sails = require('sails');

const app = express();

async function startServer() {
  const sails = new Sails();

  await sails.lift({
    // Sails.js configuration options go here
  });

  app.use(sails.hooks.http.app);
}

startServer();

// Define your API routes here (e.g., app.get('/api/endpoint', ...))

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

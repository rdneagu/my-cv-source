const path = require('path');
const cors = require('cors');
const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));
app.use(cors());

// Handles any requests that don't match the ones above
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`✓   Server started! Listening on port: ${port}\n`);
});

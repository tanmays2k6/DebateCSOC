const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3002;


app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index1.html'));
});

app.get('/auth', (req, res) => {
  res.sendFile(path.join(__dirname, 'auth.html'));
});

app.get('/session', (req, res) => {
  res.sendFile(path.join(__dirname, 'session.html'));
});

app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, 'form.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

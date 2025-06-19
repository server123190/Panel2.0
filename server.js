const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

// Example: Read server.properties
app.get('/config', (req, res) => {
  fs.readFile('minecraft/server.properties', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading config');
    res.send(data);
  });
});

// Example: Save edited server.properties
app.post('/config', (req, res) => {
  fs.writeFile('minecraft/server.properties', req.body.content, 'utf8', err => {
    if (err) return res.status(500).send('Error saving config');
    res.send('Saved!');
  });
});

app.listen(PORT, () => console.log(`Panel running on http://localhost:${PORT}`));

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.redirect('/login.html'));

// Placeholder handlers: replace with real auth/storage later.
app.post('/login', (req, res) => {
  res.send(`Login submitted for ${String(req.body.email).replace(/[<>&]/g, '')}`);
});

app.post('/register', (req, res) => {
  const { password, confirm } = req.body;
  if (password !== confirm) return res.status(400).send('Passwords do not match');
  res.send(`Registered ${String(req.body.email).replace(/[<>&]/g, '')}`);
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

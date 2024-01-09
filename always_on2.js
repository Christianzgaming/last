const express = require('express');
const { exec } = require('child_process');

const app = express();

app.get('/', (req, res) => {
 res.send('Server is running');
});

app.get('/stop', (req, res) => {
 res.send('Stopping server');
 exec('pm2 stop server.js');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
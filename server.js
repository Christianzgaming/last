const http = require('http');

const server = http.createServer((req, res) => {
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Im Alive');
});

const port = process.env.PORT || 10000;
server.listen(port, () => console.log(`Server is running on port ${port}`));
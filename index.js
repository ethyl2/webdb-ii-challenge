const express = require('express');
const server = express();
const port = process.env.port || 5000;

server.use('/', (req, res) => {
    res.send(`API up and running on port ${port}`);
});

server.listen(port, ()=> console.log(`Server up and running on port ${port}`));
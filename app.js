const express = require('express');
const app = express();

// '/' => hi there

app.get('/', (req, res) => res.send('Hi, there!'));

// '/bye' => Goodbye!
app.get('/bye', (req, res) =>res.send('Goodbye!'));

// '/dog' => meow
app.get('/dog', (req, res) => res.send('Meow!'));

// tell express to listen for requests(start server);
app.listen(process.env.PORT, process.env.IP, () => console.log('Server has started'));
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => res.send('ok'));
app.get('/', (req, res) => res.json({ msg: 'Hello from my-app', time: new Date() }));
app.listen(port, () => console.log(`listening on ${port}`));
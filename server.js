const express = require('express');
const app = express();
const port = 3000;
let counter = 0;

app.get('/', (req, res) => {
  res.send('You made as web page!')
});

app.get('/counter', (req, res) => {
  res.send(`Count: ${counter}`)
});

app.post('/counter', (req, res) => {
  counter += 1
  res.status(200).send()
})

app.delete('/counter', (req, res) => {
  counter = 0
  res.status(200).send()
})

console.log(`Server listening on localhost:${port}`);
app.listen(port);
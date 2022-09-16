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
    res.send(counter += 1)
})

app.delete('/counter', (req, res) => {
    res.send(counter = 0)
  })

console.log(`Server listening on localhost:${port}`);
app.listen(port);
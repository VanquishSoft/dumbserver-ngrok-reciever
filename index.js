const express = require('express')
const app = express();
const port = 9071
let url = '';

app.get('/save-url', (req, res) => {
  url = req.query.url
  res.send(req.query.url);
})
app.get('/url', (req, res) => {
  res.send(`<a href='${url}'>${url}</a>`);
})

app.listen(port, () => {
  console.log(`dumbserver http://localhost:${port}`)
})

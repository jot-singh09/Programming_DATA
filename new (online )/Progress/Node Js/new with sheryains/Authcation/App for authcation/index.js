const express = require('express')
const app = express()
const path = require(`path`)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,`public`)))

console.log('Server starting...')

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
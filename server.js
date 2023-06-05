
const express = require('express')
const app = express()
const port = 3000
const path=require('path')
const url=path.resolve(__dirname, './dist/index.html')

app.get('/', (req, res) => {
  res.type('html')
  res.sendFile(url)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.use(express.static('./dist'));

const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {   // route
  res.send('Hello World!')
})

app.listen(port, () => {   // starts the HTTP server
  console.log(`Example app listening on port ${port}`)
})


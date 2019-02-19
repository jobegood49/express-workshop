const express = require('express')
const app = express()

const port = 8000

const users = [
  {
    id: 1,
    name: 'Toto',
  },
  {
    id: 2,
    name: 'Toto2',
  },
  {
    id: 3,
    name: 'Toto3',
  },
]

app.get('/', (req, res) => {
  res.send({ message: 'Hello World' })
})

app.get('/users', (req, res) => {
  res.send(users)
})

app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})

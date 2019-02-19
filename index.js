const express = require('express')
const app = express()
var bodyParser = require('body-parser')

const port = 8000

let nextId = 4
let users = [
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

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send({ message: 'Hello World' })
})

app.get('/users', (req, res) => {
  res.send({
    data: users,
  })
})

app.post('/users', (req, res) => {
  let newUser = {
    id: nextId,
    name: req.body.name,
  }

  let newUsers = users.concat(newUser)
  users = newUsers
  nextId += 1

  res.send({
    message: 'Created new User',
    newUser: newUser,
    data: users,
  })
})

app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})

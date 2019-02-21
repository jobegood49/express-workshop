const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000

app.use(bodyParser.json())

const root = require('./middlewares/index')
const users = require('./middlewares/users')

app.get('/', root.hello)
app.get('/users', users.getUsers)
app.post('/users', users.createNewUser)
app.delete('/users', users.deleteAllUsers)
app.delete('/users/:id', users.deleteUserById)
app.put('/users/:id', users.updateUserById)

app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})

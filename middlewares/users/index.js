const data = require('./data')

let nextId = data.nextId
let users = data.users

module.exports = {
  //Get all users
  getUsers: (req, res) => {
    res.send({
      message: 'List of users',
      users: users,
    })
  },
  //Create new user
  createNewUser: (req, res) => {
    if (req.body.name) {
      const newUser = {
        id: nextId,
        name: req.body.name,
      }
      users = users.concat(newUser)
      nextId++

      res.send({
        message: 'Created a new User',
        newUser: newUser,
        users: users,
      })
    } else {
      res.send({
        message: 'Failed to create a new User',
        error: 'name is not provided',
      })
    }
  },
  //Delete All users
  deleteAllUsers: (req, res) => {
    users = []
    res.send({
      message: 'All users were deleted',
      users: users,
    })
  },
  //Delete user by ID
  deleteUserById: (req, res) => {
    users = users.filter(user => {
      return user.id !== Number(req.params.id)
    })
    res.send({
      message: `user with id ${req.params.id} was deleted`,
      users: users,
    })
  },
  //Update one user by id
  updateUserById: (req, res) => {
    const newName = req.body.name
    let user = users.find(user => {
      return user.id === Number(req.params.id)
    })

    user.name = newName
    res.send({
      message: `user with id ${req.params.id} was changed to ${user.name}`,
      data: users,
    })
  },
}

import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'admin User',
    email: 'admin@exampl.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'john doe',
    email: 'john@exampl.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'ja',
    email: 'ja@exampl.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users

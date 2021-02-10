const users = [
  {
    email: 'user@josh.com',
    password: 'Test@123',
    name: 'User',
    role: 'user'
  },
  {
    email: 'admin@josh.com',
    password: 'Test@123',
    name: 'Admin',
    role: 'admin'
  }
]

export default (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body

    const userFound = users.find(
      (user) => user.email === email && user.password === password
    )

    if (userFound) {
      res.status(200).json({ name: userFound.name, role: userFound.role })
    }
  }
  res.status(400).send()
}

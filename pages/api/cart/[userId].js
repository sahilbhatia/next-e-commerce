/*
userId: {
  productId: quantity,
  productId: quantity,
}
*/

const cart = {
  1: {
    1: 3,
    5: 5
  },
  2: {
    2: 3,
    4: 1
  }
}

export default (req, res) => {
  if (req.method === 'GET') {
    const { userId } = req.query
    res.status(200).json(cart[userId])
  }
  if (req.method === 'POST') {
    // const { email, password } = req.body
    // const userFound = users.find(
    //   (user) => user.email === email && user.password === password
    // )
    //
    // if (userFound) {
    //   res.status(200).json({ name: userFound.name, role: userFound.role })
    // }
  }
  res.status(400).send()
}

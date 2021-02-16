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
    const {
      query: { userId },
      body: { updatedCart }
    } = req
    cart[userId] = updatedCart
    res.status(200).send()
  }
  res.status(400).send()
}

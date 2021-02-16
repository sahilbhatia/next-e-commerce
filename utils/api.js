import axios from 'axios'

export const updateCart = async (userId, updatedCart) => {
  await axios.post(`/api/cart/${userId}`, { updatedCart })
}

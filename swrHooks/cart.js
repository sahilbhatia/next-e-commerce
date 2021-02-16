import useSWR from 'swr'

import fetcher from '../utils/fetcher'
import { updateCart } from '../utils/api'

const useCart = (userId) => {
  const { data, error, mutate } = useSWR(`/api/cart/${userId}`, fetcher)

  const changeItemQuantity = async (userId, productId, quantity) => {
    const cartClone = { ...data }
    if (quantity < 1) {
      delete cartClone[productId]
    } else {
      cartClone[productId] = quantity
    }
    // mutate locally only
    mutate(cartClone, false)
    // hit post request
    await updateCart(userId, cartClone)
    // revalidate
    mutate()
  }

  const addItemToCart = async (userId, productId) => {
    const cartClone = { ...data }
    cartClone[productId] = 1
    // mutate locally only
    mutate(cartClone, false)
    // hit post request
    await updateCart(userId, cartClone)
    // revalidate
    mutate()
  }

  return {
    cart: data,
    cartError: error,
    isCartLoading: !data && !error,
    mutateCart: mutate,
    addItemToCart,
    changeItemQuantity
  }
}

export default useCart

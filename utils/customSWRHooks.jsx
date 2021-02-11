import useSWR from 'swr'
import fetcher from './fetcher'
import { updateCart } from './api'

export const useProducts = () => {
  const { data, error } = useSWR('/api/products', fetcher)
  return {
    products: data,
    prodctError: error,
    isProductLoading: !data && !error
  }
}

export const useCart = (userId) => {
  const { data, error, mutate } = useSWR(`/api/cart/${userId}`, fetcher)

  const changeItemQuantity = async (productId, quantity) => {
    const cartClone = { ...data }
    if (quantity < 1) {
      delete cartClone[productId]
    } else {
      cartClone[productId] = quantity
    }
    mutate(cartClone, false)
    await updateCart(1, cartClone)
    mutate()
  }

  const addItemToCart = async (productId) => {
    const cartClone = { ...data }
    cartClone[productId] = 1
    mutate(cartClone, false)
    await updateCart(1, cartClone)
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

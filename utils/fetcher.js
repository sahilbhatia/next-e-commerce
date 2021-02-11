import useSWR from 'swr'

const fetcher = async (...args) => {
  const res = await fetch(...args)
  return res.json()
}

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
  return {
    cart: data,
    cartError: error,
    isCartLoading: !data && !error,
    mutateCart: mutate
  }
}

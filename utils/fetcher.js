import useSWR from 'swr'

const fetcher = async (...args) => {
  const res = await fetch(...args)
  return res.json()
}

export const useProducts = () => {
  const { data, error } = useSWR('/api/products', fetcher)
  return {
    products: data,
    error,
    isLoading: !data && !error
  }
}

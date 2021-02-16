import useSWR from 'swr'

import fetcher from '../utils/fetcher'

const useProducts = () => {
  const { data, error } = useSWR('/api/products', fetcher)
  return {
    products: data,
    prodctError: error,
    isProductLoading: !data && !error
  }
}

export default useProducts

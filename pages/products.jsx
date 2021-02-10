import { useProducts } from '../utils/fetcher'

const Products = () => {
  const { products, error, isLoading } = useProducts()
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div>{JSON.stringify(products)}</div>
}

export default Products

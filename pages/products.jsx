import useSWR from 'swr'

const fetcher = async (...args) => {
  const res = await fetch(...args)
  return res.json()
}

const Products = () => {
  const { data, error } = useSWR('/api/products', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>{JSON.stringify(data)}</div>
}

export default Products

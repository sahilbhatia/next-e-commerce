import { useProducts } from '../utils/fetcher'

const Products = () => {
  const { products, error, isLoading } = useProducts()

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 place-self-center">
      {products.map((product, index) => (
        <div
          className="max-w-xs rounded bg-gray-200 overflow-ellipsis m-4"
          key={index}
        >
          <img src={product.thumbnailUrl} className="w-full" alt="thumbnail" />
          <div className="px-4 py-4">
            <div className="tracking-wide text-lg">
              <div className="inline-block font-bold">Name:&nbsp;</div>
              <div className="inline-block font-bold">{product.name}</div>
            </div>
            <div className="tracking-wide">
              <div className="inline-block text-l">Category:&nbsp;</div>
              <div className="inline-block text-l">{product.category}</div>
            </div>
            <div className="tracking-wide">
              <div className="inline-block text-l">Price:&nbsp;</div>
              <div className="inline-block text-sm">₹ {product.price}</div>
            </div>
            <button className="rounded bg-purple-400 hover:bg-purple-700 px-2 py-2 mt-2">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products

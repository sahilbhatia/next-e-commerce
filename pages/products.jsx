import { useProducts, useCart } from '../utils/fetcher'
import { updateCart } from '../utils/api'

const Products = () => {
  const { products, prodctError, isProductLoading } = useProducts()

  // TODO: Use real userId here later
  const { cart, cartError, isCartLoading, mutateCart } = useCart(1)

  const addItemToCart = async (productId) => {
    const cartClone = { ...cart }
    cartClone[productId] = 1
    // mutate locally without revalidation
    mutateCart(cartClone, false)
    // send POST to update cart
    await updateCart(1, cartClone)
    // trigger validation
    mutateCart()
  }

  const changeItemQuantity = async (productId, quantity) => {
    const cartClone = { ...cart }
    if (quantity < 1) {
      delete cartClone[productId]
    } else {
      cartClone[productId] = quantity
    }
    // mutate locally without revalidation
    mutateCart(cartClone, false)
    // send POST to update cart
    await updateCart(1, cartClone)
    // trigger validation
    mutateCart()
  }

  if (prodctError) return <div>failed to load</div>
  if (isProductLoading) return <div>loading...</div>

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
            {cart && product.id in cart && (
              <div>
                <button
                  className="inline-block rounded bg-purple-400 hover:bg-purple-700 px-2 py-2 mt-2"
                  onClick={() => {
                    changeItemQuantity(product.id, cart[product.id] - 1)
                  }}
                >
                  -
                </button>
                <input
                  className="inline-block rounded border border-transparent focus:outline-none focus:ring-2 px-2 py-2 mt-2"
                  type="number"
                  size="2"
                  min="1"
                  max="99"
                  value={cart[product.id]}
                  onChange={(e) => {
                    changeItemQuantity(
                      product.id,
                      parseInt(e.target.value, 10) || 1
                    )
                  }}
                />
                <button
                  className="inline-block rounded bg-purple-400 hover:bg-purple-700 px-2 py-2 mt-2"
                  onClick={() => {
                    changeItemQuantity(product.id, cart[product.id] + 1)
                  }}
                >
                  {' '}
                  +
                </button>
              </div>
            )}
            {!cart ||
              (cart && !(product.id in cart) && (
                <button
                  className="rounded bg-purple-400 hover:bg-purple-700 px-2 py-2 mt-2"
                  onClick={() => addItemToCart(product.id)}
                >
                  Add to Cart
                </button>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products

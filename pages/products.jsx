import ProductCard from '../components/productCard'
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
          <ProductCard
            product={product}
            index={index}
            productInCart={cart && product.id in cart}
            productQuantity={
              cart && product.id in cart ? cart[product.id] : null
            }
            addItemToCart={addItemToCart}
            changeItemQuantity={changeItemQuantity}
          />
        </div>
      ))}
    </div>
  )
}

export default Products

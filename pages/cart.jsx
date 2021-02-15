import ProductCard from '../components/productCard'
import NavBar from '../components/navBar'
import TotalPrice from '../components/totalPrice'
import { useProducts, useCart } from '../utils/customSWRHooks'

const Products = () => {
  const { products, productError, isProductLoading } = useProducts()

  // TODO: Use real userId here later
  const { cart, cartError, isCartLoading, changeItemQuantity } = useCart(1)

  if (productError || cartError) return <div>failed to load data</div>
  if (isProductLoading || isCartLoading) return <div className="loader" />

  const getTotalPrice = () => {
    let totalPrice = 0
    Object.keys(cart).map((itemId) => {
      totalPrice += cart[itemId] * products[itemId].price
    })
    return totalPrice
  }

  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center">
        {Object.keys(cart).map((productId, index) => {
          return (
            productId in products && (
              <ProductCard
                product={products[productId]}
                key={index}
                productInCart
                productQuantity={cart[productId]}
                changeItemQuantity={changeItemQuantity}
                showQuantityChanger
                userId={1}
                renderPattern="landscape"
                showTotalPrice
              />
            )
          )
        })}
        <div className="text-right w-4/5">
          <TotalPrice totalPrice={getTotalPrice()} />
        </div>
      </div>
    </>
  )
}

export default Products

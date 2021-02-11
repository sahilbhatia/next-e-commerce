import ProductCard from '../components/productCard'
import NavBar from '../components/navBar'
import { useProducts, useCart } from '../utils/customSWRHooks'

const Products = () => {
  const { products, prodctError, isProductLoading } = useProducts()

  // TODO: Use real userId here later
  const { cart, cartError, isCartLoading, changeItemQuantity } = useCart(1)

  if (prodctError || cartError) return <div>failed to load data</div>
  if (isProductLoading || isCartLoading) return <div className="loader" />

  return (
    <>
      <NavBar />
      {Object.keys(cart).map((productId, index) => {
        return (
          productId in products && (
            <ProductCard
              product={products.find(
                (product) => product.id === parseInt(productId, 10)
              )}
              key={index}
              productInCart
              productQuantity={cart[productId]}
              changeItemQuantity={changeItemQuantity}
              showQuantityChanger
            />
          )
        )
      })}
    </>
  )
}

export default Products

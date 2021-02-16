import ProductCard from '../components/productCard'
import NavBar from '../components/navBar'

import useCart from '../swrHooks/cart'
import useProducts from '../swrHooks/products'

const Products = () => {
  const { products, productError, isProductLoading } = useProducts()

  // TODO: Use real userId here later
  const {
    cart,
    cartError,
    isCartLoading,
    addItemToCart,
    changeItemQuantity
  } = useCart(1)

  if (productError || cartError) return <div>failed to load data</div>
  if (isProductLoading || isCartLoading) return <div className="loader" />

  return (
    <>
      <NavBar />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 place-self-center">
        {Object.values(products).map((product, index) => (
          <ProductCard
            product={product}
            key={index}
            productInCart={cart && product.id in cart}
            productQuantity={
              cart && product.id in cart ? cart[product.id] : null
            }
            addItemToCart={addItemToCart}
            changeItemQuantity={changeItemQuantity}
            showQuantityChanger
            userId={1}
            renderPattern="portrait"
          />
        ))}
      </div>
    </>
  )
}

export default Products

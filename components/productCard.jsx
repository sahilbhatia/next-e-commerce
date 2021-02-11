import QuantityChanger from './quantityChanger'
import {
  ProductImage,
  ProductCategory,
  ProductName,
  ProductPrice
} from './productDetails'
import AddToCartButton from './addToCartButton'

const ProductCard = (props) => {
  const {
    product,
    productInCart,
    productQuantity,
    addItemToCart,
    changeItemQuantity
  } = props
  return (
    <div className="max-w-xs rounded bg-gray-200 overflow-ellipsis m-4">
      <div className="px-4 py-4">
        <ProductImage thumbnailUrl={product.thumbnailUrl} />
      </div>
      <div className="px-4 py-4">
        <ProductName name={product.name} />
        <ProductCategory category={product.category} />
        <ProductPrice price={product.price} />
        {!productInCart && (
          <AddToCartButton
            addItemToCart={addItemToCart}
            productId={product.id}
          />
        )}
        {productInCart && (
          <QuantityChanger
            productId={product.id}
            productQuantity={productQuantity}
            changeItemQuantity={changeItemQuantity}
          />
        )}
      </div>
    </div>
  )
}

export default ProductCard

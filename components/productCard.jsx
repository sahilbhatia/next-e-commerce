import QuantityChanger from './quantityChanger'
import {
  ProductImage,
  ProductCategory,
  ProductName,
  ProductPrice
} from './productDetails'

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
          <button
            className="rounded bg-purple-400 hover:bg-purple-700 px-2 py-2 mt-2"
            onClick={() => addItemToCart(product.id)}
          >
            Add to Cart
          </button>
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

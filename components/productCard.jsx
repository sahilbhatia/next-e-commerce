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
    changeItemQuantity,
    showQuantityChanger,
    userId,
    renderPattern
  } = props

  const landscape = renderPattern === 'landscape'

  return (
    <div
      className={
        landscape
          ? 'flex'
          : 'max-w-xs' + 'rounded bg-gray-200 overflow-ellipsis m-4 '
      }
    >
      <div className="px-4 py-4">
        <ProductImage thumbnailUrl={product.thumbnailUrl} />
      </div>
      <div className={landscape ? 'flex' : 'block ' + 'px-4 py-4'}>
        <ProductName name={product.name} />
        <ProductCategory category={product.category} />
        <ProductPrice price={product.price} />
        {!productInCart && (
          <AddToCartButton
            addItemToCart={addItemToCart}
            productId={product.id}
            userId={userId}
          />
        )}
        {productInCart && showQuantityChanger && (
          <QuantityChanger
            productId={product.id}
            productQuantity={productQuantity}
            changeItemQuantity={changeItemQuantity}
            userId={userId}
          />
        )}
      </div>
    </div>
  )
}

export default ProductCard

import QuantityChanger from './quantityChanger'
import {
  ProductImage,
  ProductCategory,
  ProductName,
  ProductPrice,
  TotalPrice
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
    renderPattern,
    showTotalPrice
  } = props

  const landscape = renderPattern === 'landscape'

  return (
    <div
      className={
        'rounded bg-gray-200 overflow-ellipsis m-4 ' +
        (landscape ? 'flex w-4/5 ' : 'max-w-xs ')
      }
    >
      <div className={(landscape ? 'w-40 ' : 'w-auto ') + 'px-4 py-4'}>
        <ProductImage thumbnailUrl={product.thumbnailUrl} />
      </div>
      <div
        className={
          (landscape ? 'flex mx-4 my-4 flex items-center w-3/8' : 'block ') +
          'px-4 py-4'
        }
      >
        <ProductName name={product.name} />
        <ProductCategory category={product.category} />
        <ProductPrice price={product.price} />
      </div>
      <div
        className={
          landscape
            ? 'flex flex-col items-end justify-center w-5/12 mx-4 my-4'
            : 'px-4 py-4'
        }
      >
        {!productInCart && (
          <AddToCartButton
            addItemToCart={addItemToCart}
            productId={product.id}
            userId={userId}
          />
        )}
        {showTotalPrice && (
          <TotalPrice totalPrice={productQuantity * product.price} />
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

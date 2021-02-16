import classnames from 'classnames'

import QuantityChanger from './quantityChanger'
import ProductImage from './productImage'
import ProductCategory from './productCategory'
import ProductName from './productName'
import ProductPrice from './productPrice'
import TotalPrice from './totalPrice'

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
      className={classnames(
        'rounded',
        'bg-gray-200',
        'overflow-ellipsis',
        'm-4',
        {
          'flex w-4/5': landscape,
          'max-w-xs': !landscape
        }
      )}
    >
      <div
        className={classnames(
          { 'w-40': landscape, 'w-auto': !landscape },
          'px-4',
          'py-4'
        )}
      >
        <ProductImage thumbnailUrl={product.thumbnailUrl} />
      </div>
      <div
        className={classnames(
          {
            'flex mx-4 my-4 flex items-center w-3/8': landscape,
            block: !landscape
          },
          'px-4',
          'py-4'
        )}
      >
        <ProductName name={product.name} />
        <ProductCategory category={product.category} />
        <ProductPrice price={product.price} />
      </div>
      <div
        className={classnames({
          'flex flex-col items-end justify-center w-5/12 mx-4 my-4': landscape,
          'px-4 py-4': !landscape
        })}
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

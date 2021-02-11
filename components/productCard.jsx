import QuantityChanger from './quantityChanger'

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
        <img src={product.thumbnailUrl} className="w-auto" alt="thumbnail" />
      </div>
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

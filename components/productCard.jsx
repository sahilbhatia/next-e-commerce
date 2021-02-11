import QuantityChanger from './quantityChanger'

const ProductCard = (props) => {
  const {
    product,
    index,
    productInCart,
    productQuantity,
    addItemToCart,
    changeItemQuantity
  } = props
  return (
    <div key={index}>
      <img src={product.thumbnailUrl} className="w-full" alt="thumbnail" />
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
            productInCart={productInCart}
            productQuantity={productQuantity}
            changeItemQuantity={changeItemQuantity}
          />
        )}
      </div>
    </div>
  )
}

export default ProductCard

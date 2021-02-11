const AddToCartButton = (props) => {
  const { addItemToCart, productId } = props
  return (
    <button
      className="rounded bg-purple-400 hover:bg-purple-700 px-2 py-2 mt-2"
      onClick={() => addItemToCart(productId)}
    >
      Add to Cart
    </button>
  )
}

export default AddToCartButton

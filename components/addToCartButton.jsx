const AddToCartButton = (props) => {
  const { addItemToCart, productId, userId } = props
  return (
    <button
      className="rounded bg-purple-400 hover:bg-purple-700 px-2 py-2 mt-2"
      onClick={() => addItemToCart(userId, productId)}
    >
      Add to Cart
    </button>
  )
}

export default AddToCartButton

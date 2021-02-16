const QuantityChanger = (props) => {
  const { productId, productQuantity, changeItemQuantity, userId } = props

  return (
    <div>
      <button
        className="inline-block rounded bg-purple-400 hover:bg-purple-700 px-2 py-2 mt-2"
        onClick={() => {
          changeItemQuantity(userId, productId, productQuantity - 1)
        }}
      >
        -
      </button>
      <input
        className="inline-block rounded border border-transparent focus:outline-none focus:ring-2 px-2 py-2 mt-2"
        type="number"
        size="2"
        min="1"
        max="99"
        value={productQuantity}
        onChange={(e) => {
          changeItemQuantity(
            userId,
            productId,
            parseInt(e.target.value, 10) || 1
          )
        }}
      />
      <button
        className="inline-block rounded bg-purple-400 hover:bg-purple-700 px-2 py-2 mt-2"
        onClick={() => {
          changeItemQuantity(userId, productId, productQuantity + 1)
        }}
      >
        {' '}
        +
      </button>
    </div>
  )
}

export default QuantityChanger

const ProductPrice = (props) => {
  const { price } = props
  return <div className="tracking-wide text-l mr-4">Price: ₹ {price}</div>
}

export default ProductPrice

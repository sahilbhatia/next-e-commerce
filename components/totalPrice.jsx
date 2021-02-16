const TotalPrice = (props) => {
  const { totalPrice } = props
  return <div className="tracking-wide text-l">Total Price: ₹ {totalPrice}</div>
}

export default TotalPrice

export const ProductImage = (props) => {
  const { thumbnailUrl } = props
  return <img src={thumbnailUrl} alt="thumbnail" />
}

export const ProductName = (props) => {
  const { name } = props
  return (
    <div className="tracking-wide text-lg font-bold mr-4">Name: {name}</div>
  )
}

export const ProductCategory = (props) => {
  const { category } = props
  return <div className="tracking-wide text-l mr-4">Category: {category}</div>
}

export const ProductPrice = (props) => {
  const { price } = props
  return <div className="tracking-wide text-l mr-4">Price: ₹ {price}</div>
}

export const TotalPrice = (props) => {
  const { totalPrice } = props
  return <div className="tracking-wide text-l">Total Price: ₹ {totalPrice}</div>
}

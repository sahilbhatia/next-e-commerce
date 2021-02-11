export const ProductImage = (props) => {
  const { thumbnailUrl } = props
  return <img src={thumbnailUrl} className="w-auto" alt="thumbnail" />
}

export const ProductName = (props) => {
  const { name } = props
  return <div className="tracking-wide text-lg font-bold">Name: {name}</div>
}

export const ProductCategory = (props) => {
  const { category } = props
  return <div className="tracking-wide text-l">Category: {category}</div>
}

export const ProductPrice = (props) => {
  const { price } = props
  return <div className="tracking-wide text-l">Price: ₹ {price}</div>
}

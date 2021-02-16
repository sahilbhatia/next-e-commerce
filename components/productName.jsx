const ProductName = (props) => {
  const { name } = props
  return (
    <div className="tracking-wide text-lg font-bold mr-4">Name: {name}</div>
  )
}

export default ProductName

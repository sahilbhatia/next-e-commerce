const ProductImage = (props) => {
  const { thumbnailUrl } = props
  return <img src={thumbnailUrl} alt="thumbnail" />
}

export default ProductImage

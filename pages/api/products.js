const products = [
  {
    thumbnailUrl: '',
    name: 'Banana',
    category: 'Fruits',
    price: 10
  },
  {
    thumbnailUrl: '',
    name: 'Spinach',
    category: 'Vegetable',
    price: 100
  },
  {
    thumbnailUrl: '',
    name: 'Carrot',
    category: 'Fruits',
    price: 150
  },
  {
    thumbnailUrl: '',
    name: '',
    category: 'Vegetable',
    price: 200
  }
]

export default (req, res) => {
  res.status(200).json(products)
}

const products = [
  {
    id: 1,
    thumbnailUrl: 'https://picsum.photos/id/237/300/300',
    name: 'Banana',
    category: 'Fruit',
    price: 10
  },
  {
    id: 2,
    thumbnailUrl: 'https://picsum.photos/id/123/300/300',
    name: 'Spinach',
    category: 'Vegetable',
    price: 100
  },
  {
    id: 3,
    thumbnailUrl: 'https://picsum.photos/id/666/300/300',
    name: 'Carrot',
    category: 'Fruit',
    price: 150
  },
  {
    id: 4,
    thumbnailUrl: 'https://picsum.photos/id/1010/300/300',
    name: 'Mango',
    category: 'Fruit',
    price: 200
  },
  {
    id: 5,
    thumbnailUrl: 'https://picsum.photos/id/124/300/300',
    name: 'Mango',
    category: 'Fruit',
    price: 200
  },
  {
    id: 6,
    thumbnailUrl: 'https://picsum.photos/id/999/300/300',
    name: 'Mango',
    category: 'Fruit',
    price: 200
  }
]

export default (req, res) => {
  res.status(200).json(products)
}

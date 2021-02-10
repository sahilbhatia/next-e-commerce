import { HYDRATE } from 'next-redux-wrapper'

const initialState = [
  { id: 1, imageUrl: '', name: '', price: 10, category: 'clothes' },
  { id: 2, imageUrl: '', name: '', price: 20, category: 'electronic' },
  { id: 3, imageUrl: '', name: '', price: 30, category: 'clothes' }
]

function reducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE: {
      return [...state, ...action.payload]
    }

    default:
      return state
  }
}

export default reducer

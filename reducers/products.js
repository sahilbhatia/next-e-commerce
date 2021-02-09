import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
  1: { imageUrl: '', name: '', price: 10 },
  2: { imageUrl: '', name: '', price: 20 },
  3: { imageUrl: '', name: '', price: 30 }
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload }
    }

    default:
      return state
  }
}

export default reducer

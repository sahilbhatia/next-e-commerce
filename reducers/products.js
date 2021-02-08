import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
  1: { imageUrl: '', name: '', price: 10 },
  2: { imageUrl: '', name: '', price: 10 },
  3: { imageUrl: '', name: '', price: 10 }
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload }
    }

    case 'SET_COUNT': {
      return { ...state, count: 0 }
    }

    default:
      return state
  }
}

export default reducer

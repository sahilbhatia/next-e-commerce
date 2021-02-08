import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
  name: 'Mandar'
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

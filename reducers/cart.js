import { HYDRATE } from 'next-redux-wrapper'

/*
[
  { id: 1, quantity: 1 },
  { id: 2, quantity: 1 }
]
*/

const initialState = []

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

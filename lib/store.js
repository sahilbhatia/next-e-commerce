import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'

import { localStorage } from './localStorage'
import rootReducer from './reducer'
import rootSaga from './saga'

const persistedState = localStorage.loadState()

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    persistedState,
    bindMiddleware([sagaMiddleware])
  )

  store.subscribe(() => {
    localStorage.saveState(store.getState())
  })

  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

// remove { debug: true } to remove console logs
export const wrapper = createWrapper(makeStore, { debug: true })

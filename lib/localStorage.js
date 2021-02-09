// methods to persist redux in local storage

const saveState = (state) => {
  try {
    if (typeof window !== 'undefined') {
      const serializedState = JSON.stringify(state)
      window.localStorage.setItem('state', serializedState)
    }
  } catch (error) {
    console.log('Error: ', error)
  }
}

const loadState = () => {
  try {
    if (typeof window !== 'undefined') {
      const serializedState = window.localStorage.getItem('state')
      const state = JSON.parse(serializedState)
      return state
    } else {
      return undefined
    }
  } catch (error) {
    console.log('Error: ', error)
    return undefined
  }
}

export const localStorage = { saveState, loadState }

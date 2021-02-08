import { useDispatch } from 'react-redux'
import { wrapper } from '../store'
import { setCount } from '../actions'

const Index = () => {
  const dispatch = useDispatch()

  // Example for basic redux store updation. Remove later.
  const buttonClicked = () => {
    dispatch(setCount())
  }

  return (
    <div>
      <button onClick={buttonClicked}>Click Me</button>
    </div>
  )
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {})

export default Index

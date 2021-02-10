import { useRouter } from 'next/router'
import { useProducts } from '../utils/fetcher'

const Login = () => {
  const router = useRouter()

  const onLogin = () => {
    router.replace('/dashboard')
  }

  const { products, error, isLoading } = useProducts()

  return (
    <>
      <input placeholder="email" /> <br />
      <input placeholder="password" /> <br />
      <button onClick={onLogin} type="button">
        Login
      </button>
      <div>{products ? JSON.stringify(products) : null}</div>
    </>
  )
}

export default Login

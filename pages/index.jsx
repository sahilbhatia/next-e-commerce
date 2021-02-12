import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter()

  const onLogin = () => {
    router.replace('/dashboard')
  }

  return (
    <>
      <input placeholder="email" /> <br />
      <input placeholder="password" /> <br />
      <button onClick={onLogin} type="button">
        Login
      </button>
    </>
  )
}

export default Login

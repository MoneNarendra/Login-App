import './index.css'

const Login = props => {
  const {event} = props
  return (
    <button type="button" className="btn" onClick={event}>
      Login
    </button>
  )
}

export default Login

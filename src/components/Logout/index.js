import './index.css'

const Logout = props => {
  const {event} = props
  return (
    <button type="button" className="btn" onClick={event}>
      Logout
    </button>
  )
}
export default Logout

import {Component} from 'react'
import './index.css'
import Login from '../Login'
import Message from '../Message'
import Logout from '../Logout'

class Home extends Component {
  state = {isLogin: false}

  loginUser = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    const message = isLogin ? 'Welcome User' : 'Please Login'
    return (
      <div className="home">
        <div className="inner-con">
          <div>
            <Message msg={message} />

            {isLogin ? (
              <Logout event={this.loginUser} />
            ) : (
              <Login event={this.loginUser} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home

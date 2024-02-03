import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isLoggedIn: true}

  changeBtn = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      this.setState({isLoggedIn: false})
    } else {
      this.setState({isLoggedIn: true})
    }
  }
  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="bg-container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        {isLoggedIn ? (
          <button type="button" onClick={this.changeBtn}>
            Subscribe
          </button>
        ) : (
          <button type="button" onClick={this.changeBtn}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}
export default Welcome

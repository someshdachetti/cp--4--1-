// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  incrementButton = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="bgCard">
        <h1 className="heading">
          the Button Clicked <span className="span"> {count} </span> Times
        </h1>
        <br />
        <p>Click the button to Increse</p>
        <button className="button" onClick={this.incrementButton}>
          Click
        </button>
      </div>
    )
  }
}
export default ClickCounter

import React, {Component} from 'react';
import ReactDOM from 'react-dom'; // !把元素插到界面去
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import PropTypes from 'prop-types';

// let Clock = () => {
//   return <h1>{new Date().toLocaleString()}</h1>
// }

class Input extends Component{
  static defaultProps = {
  }
  static propTypes = {
    //age: PropTypes.number.isRequired
  }

  constructor () {
    super()
    this.state = {
      val: '111'
    }
  }

  handleInput(ev) {
    console.log(ev.target.value)
    this.setState({
      val: ev.target.value
    })
  }

  handleClick(ev) {
    this.setState({
      val: 10
    })
  }

  render () {
    return <div>
      <p onClick={this.handleClick.bind(this)}>{this.state.val}</p>
      <input type="text" value={this.state.val} onChange={this.handleInput.bind(this)} />
    </div>
  }
}


ReactDOM.render(<Input />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

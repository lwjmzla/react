import React, {Component} from 'react';
import ReactDOM from 'react-dom'; // !把元素插到界面去
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import PropTypes from 'prop-types';

// let Clock = () => {
//   return <h1>{new Date().toLocaleString()}</h1>
// }

class Sum extends Component{
  static defaultProps = {
  }
  static propTypes = {
    //age: PropTypes.number.isRequired
  }

  constructor () {
    super()
    this.state = {
      val1: 0,
      val2: 0,
      val3: 0
    }
  }

  handleInput1(ev) {
    const inputNum = Boolean(ev.target.value) ? parseInt(ev.target.value) : 0
    this.setState({
      val1: inputNum,
      val3: inputNum + parseInt(this.state.val2)
    })
  }
  handleInput2(ev) {
    const inputNum = Boolean(ev.target.value) ? parseInt(ev.target.value) : 0
    this.setState({
      val2: inputNum,
      val3: parseInt(this.state.val1) + inputNum
    })
  }
  selectALL(ev) {
    ev.target.select()
    console.log(this.refs.a)
  }

  render () {
    return <div>
      <input type="text" ref="a" value={this.state.val1} onChange={this.handleInput1.bind(this)} onClick={this.selectALL.bind(this)} />
      +
      <input type="text" value={this.state.val2} onChange={this.handleInput2.bind(this)} onClick={this.selectALL.bind(this)} />
      =
      <input type="text" value={this.state.val3} readOnly />
    </div>
  }
}


ReactDOM.render(<Sum />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

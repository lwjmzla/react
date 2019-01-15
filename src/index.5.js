import React, {Component} from 'react';
import ReactDOM from 'react-dom'; // !把元素插到界面去
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import PropTypes from 'prop-types';

// let Clock = () => {
//   return <h1>{new Date().toLocaleString()}</h1>
// }

class Person extends Component{
  static defaultProps = {
    name: '无名',
    age: 0
  }
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
  }

  constructor () {
    super()
    this.state = {
      happy: true
    }
  }

  handleClick(ev) {
    ev.preventDefault()
    console.log(ev)
    this.setState({
      happy: !this.state.happy
    })
  }

  render () {
    console.log(this.props)
    let heart = this.state.happy ? '开心' : '不开心'
    return <div>
      <p><span>姓名：{this.props.name}</span></p>
      <p>心情：{heart}</p>
      <button onClick={this.handleClick.bind(this)}>改变</button>
    </div>
  }
}


ReactDOM.render(<Person age={10} />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

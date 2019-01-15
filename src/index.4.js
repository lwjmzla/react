import React, {Component} from 'react';
import ReactDOM from 'react-dom'; // !把元素插到界面去
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// let Clock = () => {
//   return <h1>{new Date().toLocaleString()}</h1>
// }

class Clock extends Component{
  constructor () {
    super() // !用来初始化this的,将父类中的this对象继承给子类的   如果要使用this.props,就必须给super加参数：super(props)
    this.state = { // ! 可能这是个特别的字段  需要动态更新 都放在这里
      time: new Date().toLocaleString()
    }
  }
  // 生命周期，挂载前
  componentWillMount() {
    console.log(1)
  }
  // 生命周期，挂载后
  componentDidMount() {
    console.log(2)
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleString()
      })
    }, 1000)
  }

  handleClick(ev) {
    ev.preventDefault()
    console.log(ev)
    console.log(this)
  }

  render () {
    return <h1 onClick={this.handleClick.bind(this)}>
      <span>1111</span>
      <span>{this.state.time}</span>
    </h1>
  }
}


ReactDOM.render(<Clock />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

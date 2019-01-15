import React, {Component} from 'react';
import ReactDOM from 'react-dom'; // !把元素插到界面去
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// let Clock = () => {
//   return <h1>{new Date().toLocaleString()}</h1>
// }
console.log(1)

class Clock extends Component{
  constructor () {
    super()
    this.state = { // ! 可能这是个特别的字段  需要动态更新 都放在这里  明天放到git里呀
      time: new Date().toLocaleString()
    }
  }
  // 生命周期，挂载后
  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleString()
      })
    }, 1000)
  }
  render () {
    return <h1>{this.state.time}</h1>
  }
}


ReactDOM.render(<Clock />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

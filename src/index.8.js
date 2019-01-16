import React, {Component} from 'react';
import ReactDOM from 'react-dom'; // !把元素插到界面去
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css'

class Panel extends Component{
  static defaultProps = {
  }
  static propTypes = {
    //age: PropTypes.number.isRequired
  }
  constructor () {
    super()
    this.state = {
      color1: 'red',
      color2: 'blue',
      name: 'lwj'
    }
  }

  handleClick(ev) {
    this.setState({
      color1: 'pink',
      color2: 'pink'
    })
  }

  componentWillMount() {
    //console.log(1)
  }
  
  componentDidMount() {
    //console.log(3)
  }
  shouldComponentUpdate(newProps, newState, newContext) {
    return true
  }
  componentWillUpdate(newProps, newState, newContext){
    // console.log(this.state)
    // console.log(newState)
  }
  componentDidUpdate = (prevProps, prevState) => {
    // console.log(prevState)
    // console.log(this.state)
  }
  

  render () {
    return <div className="panel panel-default">
      <button onClick={this.handleClick.bind(this)}>变粉</button>
      <PanelH color={this.state.color1}></PanelH>
      <PanelB color={this.state.color2}></PanelB>
    </div>
  }
}
class PanelH extends Component{

  constructor () {
    super()
    this.state = {
    }
  }
  componentWillReceiveProps(newProps){
    console.log(1)
  }
  shouldComponentUpdate(newProps, newState, newContext) {
    console.log(2)
    return true
  }
  componentWillUpdate(newProps, newState, newContext){
    console.log(3)
    // console.log(this.state)
    // console.log(newState)
  }
  componentDidUpdate(prevProps, prevState){
    console.log(5)
    // console.log(newProps)
    // console.log(newState)
  }

  render () {
    console.log(4)
    return <div className="panel-heading" style={{color:this.props.color}}>
      {this.props.color}
    </div>
  }
}
class PanelB extends Component{

  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    return <div className="panel-body" style={{color:this.props.color}}>
      body
    </div>
  }
}


ReactDOM.render(<Panel />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

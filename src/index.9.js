import React, {Component} from 'react';
import ReactDOM from 'react-dom'; // !把元素插到界面去
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import jsonp from 'jsonp'

class Panel extends Component{
  static defaultProps = {
  }
  static propTypes = {
    //age: PropTypes.number.isRequired
  }
  constructor () {
    super()
    this.timer = null
    this.state = {
      words: [],
      index: -1
    }
  }

  componentDidMount() {
  }
  
  
  handleChange = (ev) => {
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
    const wd = ev.target.value
    if (!wd.length) { 
      this.setState({ words: [] })
      return 
    }
    
    this.timer = setTimeout(() => {
      jsonp('https://www.baidu.com/su?wd=' + wd, {param: 'cb'}, (err, data) => {
        if (err) { console.log(err);return }
        console.log(data)
        this.defaultVal = wd
        this.setState({ words: data.s, index: -1 })
      })
    }, 300);
  }

  handleKeyDown = (ev) => {
    if (this.state.words.length) {
      if (ev.keyCode === 38) { // 上
        if (this.state.index <= this.state.words.length && this.state.index > 0 ) {
          this.setState({ index: this.state.index - 1 })
          this.refs.inputEl.value = this.state.words[this.state.index - 1]
        } else {
          this.setState({ index: this.state.words.length })
          this.refs.inputEl.value = this.defaultVal
        }
      } else if (ev.keyCode === 40){ // 下
        if (this.state.index >= -1 && this.state.index < this.state.words.length - 1 ) {
          this.setState({ index: this.state.index + 1 })
          this.refs.inputEl.value = this.state.words[this.state.index + 1]
        } else {
          this.setState({ index: -1 })
          this.refs.inputEl.value = this.defaultVal
        }
      } else if (ev.keyCode === 13) {
        window.location.href = 'https://www.baidu.com/s?wd=' + ev.target.value
      }
    }
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <div className="panel panel-default">
              <div className="panel-heading">
                <input type="text" ref="inputEl" className="form-control" onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {
                    this.state.words.map((word, index) => {
                      return <li className={"list-group-item "+ (index === this.state.index ? 'active' : '') } key={index}>{word}</li>
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


ReactDOM.render(<Panel />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

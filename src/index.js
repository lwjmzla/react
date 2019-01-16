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
      words: ['a', 'b']
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
    if (!wd.length) { return }
    
    this.timer = setTimeout(() => {
      jsonp('https://www.baidu.com/su?wd=' + wd, {param: 'cb'}, (err, data) => {
        if (err) { console.log(err);return }
        console.log(data)
      })
    }, 300);
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <div className="panel panel-default">
              <div className="panel-heading">
                <input type="text" className="form-control" onChange={this.handleChange} />
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {
                    this.state.words.map((word, index) => {
                      return <li className="list-group-item" key={index}>{word}</li>
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

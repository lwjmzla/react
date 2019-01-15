import React from 'react';
import ReactDOM from 'react-dom'; // !把元素插到界面去
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const ele = <h1 className="haha" id="abc">1111111</h1>  // ! 这三者基本一样   会返回一个obj
console.log(React.createElement('h1', {id: 'abc'}, '1111111')) // ! 这三者基本一样
const eleObj = { // ! 这三者基本一样
  type: 'h1',
  props: {
    className: 'red',
    id: 'abc',
    children: ['11111', {
      type: 'h2',
      props: {
        className: 'blue',
        id: 'bcd',
        children: ['2222']
      }
    }]
  }
}

function render(eleObj, container) {
  let eleCreate = document.createElement(eleObj.type)
  let obj = eleObj.props
  for (var key in obj) {
    if (key === 'className') {
      eleCreate.setAttribute('class', obj[key])
    } else if (key === 'children') {
      obj[key].forEach((item) => {
        if (typeof item === 'string') {
          eleCreate.innerHTML = item
        } else {
          render(item, eleCreate)
        }
      })
    } else {
      eleCreate.setAttribute(key, obj[key])
    }
  }
  container.appendChild(eleCreate)
}
render(eleObj, document.getElementById('root'))

// ReactDOM.render(ele, document.getElementById('root')); // !渲染流程如上

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
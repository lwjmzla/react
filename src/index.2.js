import React from 'react';
import ReactDOM from 'react-dom'; // !把元素插到界面去
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const arr = ['大','','小']
const style = {backgroundColor: 'red'}
let ele = <div>
  {
    arr.map((item, index) => {
      return item.length > 0 ? <span className={index ? '1' : '2'} key={index} style={style}>{item}</span> : null
    })
  }
</div>
ReactDOM.render(ele, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

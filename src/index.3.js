import React from 'react';
import ReactDOM from 'react-dom'; // !把元素插到界面去
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let Nsg = (obj) => {
  console.log(obj)
  return <div>{obj.name}</div>
}
//ReactDOM.render(Nsg({name: 'lwj'}), document.getElementById('root'));
ReactDOM.render(<Nsg name='lwj' style={{background: 'red'}}></Nsg>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

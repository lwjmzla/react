import React, {Component} from 'react';
import ReactDOM from 'react-dom'; // !把元素插到界面去
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css'

import TodoHeader from './component/TodoHeader.js'
import TodoItem from './component/TodoItem.js'

class TodoApp extends Component{
  static defaultProps = {
  }
  static propTypes = {
    //age: PropTypes.number.isRequired
  }
  constructor (props) {
    super(props)
    this.state = {
      todos: [
        {id: Date.now(),title: '111111111',completed: false},
        {id: Date.now()+1,title: '2222222222',completed: true}
      ]
    }
  }
  componentWillMount() {
    //console.log(1)
  }
  componentDidMount() {
    //console.log(3)
  }
  // ! 定义方法
  addTodo = (obj) => {
    let todos = [...this.state.todos, obj]
    this.setState({
      todos
    })
  }
  toggleCompleted = (obj) => {
    let todos = this.state.todos.map((item, index) => {
      if (item.id === obj.id) {
        item.completed = !item.completed
      }
      return item
    })
    this.setState({
      todos
    })
  }
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="panel panel-default">
              <div className="panel-heading">
                <TodoHeader addTodo={this.addTodo}></TodoHeader>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {
                    this.state.todos.map((todo, index) => {
                      return <TodoItem todo={todo} key={index} toggleCompleted={this.toggleCompleted}></TodoItem>
                    })
                  }
                </ul>
              </div>
              <div className="panel-footer"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


ReactDOM.render(<TodoApp />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

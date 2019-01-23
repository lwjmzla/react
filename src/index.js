import React, {Component} from 'react';
import ReactDOM from 'react-dom'; // !把元素插到界面去
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css'

import TodoHeader from './component/TodoHeader.js'
import TodoItem from './component/TodoItem.js'
import TodoFooter from './component/TodoFooter.js'

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
        // {id: Date.now(),title: '111111111',completed: false},
        // {id: Date.now()+1,title: '2222222222',completed: true}
      ],
      allSelected: false,
      curView: 'all'
    }
  }
  componentWillMount() {
    //console.log(1)
    const todos = JSON.parse(localStorage.getItem('__TODOS__')) || []
    this.setState({todos})
  }
  componentDidMount() {
    //console.log(3)
  }
  // ! 定义方法
  addTodo = (obj) => {
    let todos = [...this.state.todos, obj]
    this.setState({
      todos,
      allSelected: false
    })
  }
  deleTodo = (obj) => {
    let todos = this.state.todos.filter((item, index) => {
      return item.id !== obj.id
    })
    this.setState({
      todos
    })
    setTimeout(() => {
      this.checkAllSelected()
    }, 0)
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
    setTimeout(() => {
      this.checkAllSelected()
    }, 0)
  }
  toggleAll = (ev) => {
    const originStatus = this.state.allSelected
    let todos = this.state.todos.map((item, index) => {
      if (originStatus) {
        item.completed = false
      } else {
        item.completed = true
      }
      return item
    })
    this.setState({
      todos,
      allSelected: !originStatus
    })
  }
  checkAllSelected = () => {
    if (!this.state.todos.length) {
      this.setState({
        allSelected: false
      })
      return
    }
    let flag = true
    this.state.todos.forEach((item, index) => {
      if (!item.completed) {
        flag = false
      }
    })
    this.setState({
      allSelected: flag
    })
  }
  showView = (viewName) => {
    this.setState({
      curView: viewName
    })
  }
  deleFinished = () => {
    let todos = this.state.todos.filter((item, index) => {
      return item.completed === false
    })
    this.setState({
      todos
    })
    setTimeout(() => {
      this.checkAllSelected()
    }, 0)
  }

  render () {
    let unfinishedNum = 0
    let unfinishedTodos = []
    let finishedTodos = []
    this.state.todos.forEach((item, index) => {
      if (!item.completed) {
        unfinishedNum++
        unfinishedTodos.push(item)
      } else {
        finishedTodos.push(item)
      }
    })
    let showTodos = []
    if (this.state.curView === 'all') {
      showTodos = this.state.todos
    } else if (this.state.curView === 'unfinished') {
      showTodos = unfinishedTodos
    } else {
      showTodos = finishedTodos
    }

    localStorage.setItem('__TODOS__', JSON.stringify(this.state.todos))

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
                  <li className="list-group-item">
                    <input type="checkbox" ref="all" id="all" checked={this.state.allSelected} onChange={this.toggleAll} />
                    <label htmlFor="all">全选</label>
                  </li>
                  {
                    showTodos.map((todo, index) => {
                      return <TodoItem todo={todo} key={index} toggleCompleted={this.toggleCompleted} deleTodo={this.deleTodo}></TodoItem>
                    })
                  }
                </ul>
              </div>
              <div className="panel-footer">
                <TodoFooter unfinishedNum={unfinishedNum} curView={this.state.curView} showView={this.showView} deleFinished={this.deleFinished}></TodoFooter>
              </div>
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

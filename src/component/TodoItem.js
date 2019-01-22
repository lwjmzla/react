import React from 'react'

export default class TodoItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  changeHandler = (ev) => {
    this.props.toggleCompleted(this.props.todo)
  }
  render() {
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-md-1">
            <input type="checkbox" checked={this.props.todo.completed} onChange={this.changeHandler} />
          </div>
          <div className={"col-md-10 "+(this.props.todo.completed ? 'line-through' : '')}>
            {this.props.todo.title}
          </div>
          <div className="col-md-1">
            <button className="btn btn-danger btn-xs">X</button>
          </div>
        </div>
      </li>
    )
  }
}
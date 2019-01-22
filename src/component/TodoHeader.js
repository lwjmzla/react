import React from 'react'

export default class TodoHeader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  handleKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      if (ev.target.value === '') { return }
      this.props.addTodo({
        id: Date.now(),
        title: ev.target.value,
        completed: false
      })
      this.refs.inputEl.value = ''
    }
  }
  handleSubmit = (ev) => {
    ev.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input ref="inputEl" onKeyDown={this.handleKeyDown} type="text" className="form-control" autoFocus={true} placeholder="输入想做的事" />
        </div>
      </form>
    )
  }
}
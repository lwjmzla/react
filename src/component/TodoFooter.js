import React from 'react'

export default class TodoFooter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="row">
        <div className="col-xs-4">
          还有  <span style={{color: 'red'}}>{this.props.unfinishedNum}</span>  件待办事项
        </div>
        <div className="col-xs-5">
          <button onClick={() => this.props.showView('all')} className={"btn btn-default btn-sm "+ (this.props.curView === 'all' ? 'btn-success' : '')}>全部</button>
          <button onClick={() => this.props.showView('unfinished')} className={"btn btn-default midBtn btn-sm "+ (this.props.curView === 'unfinished' ? 'btn-success' : '')}>未完成</button>
          <button onClick={() => this.props.showView('finished')} className={"btn btn-default btn-sm "+ (this.props.curView === 'finished' ? 'btn-success' : '')}>已完成</button>
        </div>
        <div className="col-xs-3">
          <button className="btn btn-default btn-sm btn-danger" onClick={() => this.props.deleFinished()}>删除已完成的</button>
        </div>
      </div>
    )
  }
}
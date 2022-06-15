import React, { Component } from 'react'
import ButtonCheck from '../buttonpluss/ButtonCheck'
import TaskContent from './TaskContent'

export default class TaskItem extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }


  render() {
    const { task, handleDeleteTask, handleCompleteTask } = this.props
    return (
      <div className='task-item'>
        <div className='task-content'>
          <TaskContent content={task.taskName} isCompleted={task.isCompleted} />
        </div>
        <div className="btn-icon">
          {
            !task.isCompleted &&
            <ButtonCheck completed onClick={() => handleCompleteTask(task.id)}
            />
          }
          <ButtonCheck remove onClick={() => handleDeleteTask(task.id)} />
        </div>
      </div>
    )
  }
}

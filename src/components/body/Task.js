import React, { Component } from 'react'
import TaskItem from './TaskItem'
import './style.css'
export default class Task extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    const { listTasks, handleDeleteTask, handleCompleteTask } = this.props
    return (
      <div className="task-container">
        {listTasks && listTasks.length > 0 && listTasks.map(item => (
          <TaskItem
            key={item.id}
            task={item}
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
          />
        ))}
      </div>
    )
  }
}

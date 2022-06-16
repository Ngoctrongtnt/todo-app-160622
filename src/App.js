// import Header from './components/header/Header';
import FooterTodo from '../src/components/footer/Footer';
import Task from './components/body/Task';
// import { listTasks } from './listTask/ListTask'
import Input from './components/input/Input'
import ButtonPluss from './components/buttonpluss/ButtonPluss'
import { defaultValueTasks } from './listTask/ListTask'
import Header from './components/header/Header';
import './App.css';
// import Form from '../src/components/form/Form'
import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      listTasks: JSON.parse(localStorage.getItem('listTask')) || [],
      txtInput: '',
    }
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleCompleteTask = this.handleCompleteTask.bind(this);
  }

  handleChangeInput(event) {
    this.setState({
      txtInput: event.target.value
    })
  }

  handleAddTask() {
    if (!this.state.txtInput) {
      alert("Please enter To Do")
      return;
    }

    const newTask = {
      ...defaultValueTasks,
      id: Math.floor(Math.random() * 10000),
      taskName: this.state.txtInput,
    }

    this.setState(prevState => {
      // const jsonTask = JSON.stringify(newTask)
      localStorage.setItem('listTask', JSON.stringify([newTask, ...prevState.listTasks]))
      // const tasks = JSON.parse(localStorage.getItem(this.state.txtInput))
      // console.log(tasks)

      return {
        ...prevState,
        listTasks: [newTask, ...prevState.listTasks],
        txtInput: ''
      }
    })
  }
  handleDeleteTask(id) {
    const listTasks = [...this.state.listTasks];
    const indexDelete = listTasks.findIndex(task => task.id === id)
    if (indexDelete !== -1) {
      listTasks.splice(indexDelete, 1)
      this.setState({
        listTasks: [...listTasks]
      })
    }
  }
  handleCompleteTask(id) {
    const listTasks = [...this.state.listTasks];
    const indexUpdate = listTasks.findIndex(task => task.id === id)
    if (indexUpdate !== -1) {
      const taskReplace = {
        ...listTasks[indexUpdate],
        isCompleted: true
      }
      listTasks.splice(indexUpdate, 1, taskReplace)
      this.setState({
        listTasks: listTasks
      })
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="title__input__gr">
          <Input
            handleChangeInput={this.handleChangeInput}
            value={this.state.txtInput}
          />
          <ButtonPluss onClick={this.handleAddTask} />
        </div>
        <Task
          listTasks={this.state.listTasks}
          handleDeleteTask={this.handleDeleteTask}
          handleCompleteTask={this.handleCompleteTask}
        />
        <FooterTodo />
        {/* <Form /> */}
      </div>
    )
  }
}





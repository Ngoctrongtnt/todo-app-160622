import React, { Component } from 'react';
import { listTasks } from '../../listTask/ListTask'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
// import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import './style.css';
export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listTasks: listTasks,
            txtInput: ''
        }
    }

    // handleChangeInput = (event) => {
    //     const { name, value } = event.target
    //     this.setState({
    //         [name]: value
    //     })
    // }
    /* or
     handleChangeInputTask(e) {
    this.setState({
    txtInput: e.target.value
    })
    }*/

    // handleAddTask() {
    //     if (!this.state.txtInput.trim()) return

    //     const newTask = {
    //         ...defaultValueTasks,
    //         id: new Date().getTime(),
    //         taskName: this.state.txtInput,
    //     }
    //     console.log(newTask)
    //     this.setState(prevState => {
    //         return {
    //             ...prevState,
    //             listTasks: [newTask, ...prevState.listTasks],
    //             txtInput: ''
    //         }
    //     })
    // }
    // handleSubmid = () => {
    //     this.props.handleAddTask({
    //         id: Math.random(),
    //         taskName: this.state.txtInput,
    //         isCompleted: false,
    //     })
    //     console.log('Your inpput value is: ', this.state);
    // }
    render() {

        return (
            <div >
                <h1 className='title__title'>TO DO LIST APPLICATION</h1>
            </div>
        )
    }
}


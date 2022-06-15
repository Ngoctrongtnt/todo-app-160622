import React, { Component } from 'react'
import './style.css'
export default class Input extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }
  render() {
    return (
      <input className="input"
        id='txtInput'
        name='txtInput'
        type='text'
        onChange={this.props.handleChangeInput}
        value={this.props.value}
        placeholder='Add new task in here'
      />
    )
  }
}

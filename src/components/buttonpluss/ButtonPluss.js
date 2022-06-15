import React, { Component } from 'react'
import './style.css'
export default class ButtonPluss extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <button
        className='input__btn-circle-plus'
        onClick={this.props.onClick}
      >+</button>
    )
  }
}

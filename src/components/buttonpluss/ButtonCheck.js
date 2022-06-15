import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons'
export default class ButtonCheck extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    const { completed, remove } = this.props

    if (completed) {
      return <button className='btn btn-completed' onClick={this.props.onClick}>
        <FontAwesomeIcon icon={faCheck} />
      </button>
    }

    if (remove) {
      return <button className='btn btn-remove' onClick={this.props.onClick}><FontAwesomeIcon icon={faClose} /></button>
    }

    return null
  }
}

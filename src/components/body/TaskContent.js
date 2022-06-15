import React, { Component } from 'react'

export default class TaskContent extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    const { content, isCompleted } = this.props

    return (
      <p
        style={{
          color: isCompleted ? '#0e99f5' : 'black',
          fontWeight: 700,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '460px'
        }}
      >
        {content}
      </p>
    )
  }
}

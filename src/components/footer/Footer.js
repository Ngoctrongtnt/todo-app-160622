import React, { Component } from 'react';
import './style.css';

export default class FooterTodo extends Component {
  render() {
    return (
      <div className='footer'>
        <a href='google.com' className='btn-pre'> &#8249;</a>
        <div className='number'>
          <a href='google.com' className='btn-1'> 1</a>
          <a href='google.com' className='btn-2'> 2</a>
          <a href='google.com' className='btn-3'> 3</a>
        </div>
        <a href='google.com' className='btn-next'> &#8250; </a>
      </div>
    )
  }
}
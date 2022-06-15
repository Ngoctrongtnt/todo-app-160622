import React, { Component } from 'react'
export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',

    }
  }
  handleChangeInput = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
  }

  render() {
    return (
      <div><form>
        <input
          type="text"
          name="username"
          onChange={(e) => this.handleChangeInput(e)}
          placeholder="username"
        />

        <input
          type="password"
          name="password"
          onChange={(e) => this.handleChangeInput(e)}
          placeholder="password"
        />
        <button type="hidden" name=""
          onClick={(e) => this.handleSubmit(e)}
        >
          Đăng Nhập</button>

      </form></div >
    )
  }
}
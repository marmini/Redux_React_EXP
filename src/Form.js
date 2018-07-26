import React, { Component } from 'react'
import {connect} from 'react-redux'

class Form extends Component {
  constructor () {
    super()
    this.addSubmit = this.addSubmit.bind(this)
  }

  addSubmit () {
    const shape = this.getShape.value
    const color = this.getColor.value
    const count = 0
    const data = {
      shape,
      color,
      count
    }

    this.props.dispatch({
      type: 'ADD_POST',
      data })
  }

  render () {
    return (
      <div>
        <h3>Select Shape & Color</h3>

        <select type='text' ref={(input) => this.getShape = input} >
          <option value=''>Select Shape</option>
          <option value='square'>Square</option>
          <option value='circle'>Circle</option>
          <option value='rectangle'>Rectangle</option>
        </select>

        <select ref={(input) => this.getColor = input} >
          <option value=''>Select Color</option>
          <option value='red'>Red</option>
          <option value='blue'>Blue</option>
          <option value='green'>Green</option>
        </select>

        <button onClick={this.addSubmit}>Add</button>

      </div>
    )
  }
}
export default connect()(Form)

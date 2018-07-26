import React, { Component } from 'react'
import './Shapes.css'

export default class Shapes extends Component {
  constructor () {
    super()
    this.countIncrementer = this.countIncrementer.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    console.log('nextprops', nextProps)
  }

  countIncrementer () {
    const shape = this.props.post.shape
    const color = this.props.post.color
    const count = this.props.post.count
    const data = {
      shape,
      color,
      count
    }

    this.props.dispatch({
      type: 'COUNT_INC',
      data
    })
  }

  render () {
    console.log('each post', this.props.post)

    return (
      <div>
        <div>
          {(() => {
            switch (this.props.post.shape) {
              case 'square': return (
                <div className='col-sm-4'>
                  <div className='square-css' style={{ backgroundColor: this.props.post.color }}
                    onClick={this.countIncrementer}>{this.props.post.count}</div>

                </div>
              )
              case 'circle': return (
                <div className='col-sm-4'>
                  <div className='circle-css' style={{ backgroundColor: this.props.post.color, textAlign: 'center' }}
                    onClick={this.countIncrementer}>{this.props.post.count}</div>

                </div>
              )
              case 'rectangle': return (
                <div className='col-sm-4'>
                  <div className='rectangle-css' style={{ backgroundColor: this.props.post.color, textAlign: 'center' }}
                    onClick={this.countIncrementer}>{this.props.post.count}</div>

                </div>
              )
            }
          })()}
        </div>
      </div>
    )
  }
}

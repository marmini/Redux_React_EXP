import React, { Component } from 'react'

import Shapes from './Shapes'
import { connect } from 'react-redux'

class SecondComp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      shape: []
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log('#####', nextProps.posts)
    this.setState({shape: nextProps.posts})
    console.log(nextProps)
  }

  render () {
    console.log('fkghfdkjfdh', this.props)

    return (
      <div>
        {this.state.shape.map((post, i) => {
          return <Shapes post={post} dispatch={this.props.dispatch} />
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('inside state to props', state)

  return {
    posts: state.postReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondComp)

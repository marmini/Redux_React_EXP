import React, { Component } from 'react'
import Form from './Form'
import SecondComp from './SecondComp'
import { connect } from 'react-redux'

class App extends Component {
  render () {
    console.log('this.props.posts', this.props.posts)

    return (
      <div>
        <Form />
        <SecondComp />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state to props app', state)
  return {
    posts: state.postReducer
  }
}
export default connect(mapStateToProps)(App)

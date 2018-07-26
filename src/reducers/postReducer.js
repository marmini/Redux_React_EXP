const initialState = []

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST': {
      console.log('adding post')

      for (var i = 0; i < state.length; i++) {
        if (action.data.shape === state[i].shape && action.data.color === state[i].color) {
          action.data.count = state[i].count
        }
      }
      console.log('action.data', action.data)
      return state.concat([action.data])
    }

    case 'COUNT_INC': {
      var shapes = state
      for (var i = 0; i < shapes.length; i++) {
        if (action.data.shape === shapes[i].shape && action.data.color === shapes[i].color) {
          shapes[i].count = action.data.count + 1
        }
      }
      return state.splice().concat(shapes)
    }
    default:
      return state
  }
}

export default postReducer

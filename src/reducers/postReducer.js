const initialState=[]

const postReducer = (state = initialState, action) => {
 switch(action.type) {
    case 'ADD_POST':{
      for(var i=0;i<state.length;i++){
        if(action.data.shape===state[i].shape && action.data.color===state[i].color){
          action.data.count= state[i].count
        }
      }
      console.log("action.data",action.data);
      return state.concat([action.data]);
      //  return [...initialState,action.data]
    }
    case 'COUNT_INC':{
      for(var i=0;i<state.length;i++){
        if(action.data.shape===state[i].shape && action.data.color===state[i].color){
          state[i].count=action.data.count+1
        }
      }
      return state ;
    }
    default:
      return state;
  }
}

export default postReducer;
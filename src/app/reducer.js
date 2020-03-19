const initState = { counter: 0 }

<<<<<<< HEAD
export default function appReducer(state = initState, action){
 switch(action.type){
  case 'APPLICATION_INCREASE': return ({...state, counter: state.counter + action.payload})
  case 'APPLICATION_DECREASE': return({...state, counter: state.counter - action.payload})
  default: return state;
 }
=======
const initState = {
  counter: 0,
  user: null
};

export default function appReducer(state = initState, action) {
  switch (action.type) {
    case 'APPLICATION_INCREASE':
      return ({
        ...state,
        counter: state.counter + action.payload
      });
    case 'APPLICATION_DECREASE':
      return ({
        ...state,
        counter: state.counter - action.payload
      });
    case 'SIGN-IN_SUCCESS':
    case 'APPLICATION-AUTH':
      return {
        ...state,
        user: action.payload
      };
    case 'APPLICATION-SIGN-OUT':
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
>>>>>>> 7cb75d5f23130679f7409a6be362c1fbe4c792d6
}

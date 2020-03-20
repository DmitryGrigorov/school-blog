import cloneDeep from 'lodash/cloneDeep'

const initState = {
 dataForm: {
  title: '',
  body: ''
 }
}

const merge = (state, someObject) => {
 const clonnedState = cloneDeep(state)

 return Object.assign(clonnedState, someObject);
}

const newPostReducer = (state = initState, action) => {
 switch (action.type){
  case 'NEWPOST_CHANGE-DATA-FORM':
   return merge(state, {
    dataForm:{
     ...state.dataForm,
     [action.payload.fieldId]: action.payload.value
    }
   })

  default:
   return state
 }
}



export default  newPostReducer
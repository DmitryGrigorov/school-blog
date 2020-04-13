import cloneDeep from 'lodash/cloneDeep'

const initState = {
 dataForm: {
  title: '',
  content: ''
 }
}

const merge = (state, someObject) => {
 const clonnedState = cloneDeep(state)

 return Object.assign(clonnedState, someObject);
}

const addPostReducer = (state = initState, action) => {
 switch (action.type){
  case 'ADD-POST_CHANGE-FORM':
   return merge(state, {
    dataForm:{
     ...state.dataForm,
     [action.payload.fieldId]: action.payload.value
    }
   })
  case 'ADD-POST_CLEAR-PAGE':
   return {
    ...state,
    dataForm: {title: '', content: ''}
   }

  default:
   return state
 }
}



export default addPostReducer
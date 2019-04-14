const events = (state=[], action) => {
  switch(action.type){
    case 'ADD_EVENT':
    return[
      ...state, {
        id: action.id,
        text: action.text
      }
    ]

    case 'DELETE_EVENT':
      return state.map(event => console.log(event))

    default:
    return state
  }
}

export default events
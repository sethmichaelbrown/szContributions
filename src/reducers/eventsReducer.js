let nextId = 0

const eventsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EVENT_ITEM':
      return [
        ...state, {
          id: nextId++,
          text: action.text,
          completed: false
        }
      ]

    case 'TOGGLE_EVENT_ITEM':
      return state.map(eventItem =>
        eventItem.id === action.id ?
          { ...eventItem, completed: !eventItem.completed }
          :
          eventItem
      )

    default:
      return state
  }
}

export default eventsReducer
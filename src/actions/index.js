import {
  ADD_EVENT_ITEM,
  TOGGLE_EVENT_ITEM
} from './actionsTypes.js'

let nextId = 0

export const addEventItem = (text) => ({
  type: ADD_EVENT_ITEM,
  id: nextId++,
  text
})

export const toggleEventItem = (id) => ({
  type: TOGGLE_EVENT_ITEM,
  id
})
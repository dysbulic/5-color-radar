import update from 'immutability-helper'
import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

export const reducers = {
  setActive: (state, action) => (
    update(state, { active: { $set: action.payload } })
  ),
  setOrigin: (state, action) => (
    update(state, { origin: { $set: action.payload } })
  ),
  setPosition: (state, { payload: { id, position }}) => {
    console.info({ id, position })
    update(state, { positions: { test: { $set: position } } })
  },
}

const initialState = {
  active: undefined,
  origin: undefined,
  positions: {},
}
const positionSlice = createSlice({
  name: 'pos',
  initialState,
  reducers,
})

export const Store = configureStore({
  reducer: positionSlice.reducer,
})

//export const { setActive } = positionSlice.actions

export const setActive = (type) => (
  Store.dispatch(positionSlice.actions.setActive(type))
)
export const setOrigin = (origin) => (
  Store.dispatch(positionSlice.actions.setOrigin(origin))
)
export const setPosition = (id, position) => {
  Store.dispatch(positionSlice.actions.setPosition({ id, position }))
}

export default positionSlice.reducer
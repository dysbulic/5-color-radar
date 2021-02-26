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
  setPosition: (state, { payload: { id, position }}) => (
    update(state, { positions: { $merge: { [id]: position } } })
  ),
  setHandle: (state, { payload: { id, handle }}) => (
    update(state, { handles: { $merge: { [id]: handle } } })
  ),
  setTransform: (state, { payload: { id, transform }}) => (
    update(state, { transforms: { $merge: { [id]: transform } } })
  ),
  setWeight: (state, { payload: { id, weight }}) => (
    update(state, { weights: { $merge: { [id]: weight } } })
  ),
  setWeights: (state, { payload }) => (
    update(state, { weights: { $set: payload } })
  ),
  setConflict: (state, action) => (
    update(state, { conflict: { $set: action.payload } })
  ),
}

const initialState = {
  active: undefined,
  origin: undefined,
  positions: {},
  handles: {},
  transforms: {},
  weights: {},
}
const positionSlice = createSlice({
  name: 'pos',
  initialState,
  reducers,
})

export const store = configureStore({
  reducer: positionSlice.reducer,
})

//export const { setActive } = positionSlice.actions

export const setActive = (type) => (
  store.dispatch(positionSlice.actions.setActive(type))
)
export const setOrigin = (origin) => (
  store.dispatch(positionSlice.actions.setOrigin(origin))
)
export const setPosition = (id, position) => {
  store.dispatch(positionSlice.actions.setPosition({ id, position }))
}
export const setHandle = (id, handle) => {
  store.dispatch(positionSlice.actions.setHandle({ id, handle }))
}
export const setTransform = (id, transform) => {
  store.dispatch(positionSlice.actions.setTransform({ id, transform }))
}
export const setWeight = (id, weight) => {
  store.dispatch(positionSlice.actions.setWeight({ id, weight }))
}
export const setWeights = (weights) => {
  store.dispatch(positionSlice.actions.setWeights(weights))
}
export const setConflict = (conflict) => (
  store.dispatch(positionSlice.actions.setConflict(conflict))
)

export default positionSlice.reducer
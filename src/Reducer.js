import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer

/*
  const reducer = (state, action) => {
    console.info(action.payload)
    switch(action.type) {
      case 'move':
        return {...state, ...{ pos: {
          x: action.payload.clientX,
          y: action.payload.clientY,
        } } }
      case 'press':
        return {...state, ...{ listening: true } }
      case 'release':
        return {...state, ...{ listening: false } }
      default:
        throw new Error(`Unknown Type: ${action.type}`)
    }
  }
  const initialState = {}
  const [state, dispatch] = useReducer(reducer, initialState)

  const onMouseMove = (evt) => {
    if(state.listening) {
      dispatch({ type: 'move', payload: evt })
    }
  }
  const onMouseUp = (evt) => {
    dispatch({ type: 'release', payload: evt })
  }
*/
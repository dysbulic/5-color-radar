// order the colors appear in clockwise from the top
export const colors = [
  'white', 'blue', 'black', 'red', 'green'
]

// order of the conflicts going clockwise from the top
// this could be derived from the `colors` order, allowing
// the colors to change throughout dynamically, but
// I can't be bothered at the moment 🐰
export const conflicts = [
  'green-blue', 'white-black',
  'blue-red', 'black-green', 
  'red-white', 
]

// extrema for the fundamental conflicts
export const reasons = {
  'green-blue': { left: 'Nature', right: 'Nurture' },
  'white-black': { left: 'Group', right: 'Individual' },
  'blue-red': { left: 'Reason', right: 'Emotion' },
  'black-green': { left: 'Leveraging', right: 'Preserving' },
  'red-white': { left: 'Chaos', right: 'Order' },
}

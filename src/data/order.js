// order the colors appear in clockwise from the top
export const colors = [
  'white', 'blue', 'black', 'red', 'green'
]

// order of the conflicts going clockwise from the top
// this could be derived from the `colors` order, allowing
// the colors to change throughout dyanimcally, but
// I can't be bothered at the moment 🐰
export const conflicts = [
  'green-blue', 'white-black',
  'blue-red', 'black-green', 
  'red-white', 
]

export const reasons = {
  'red-white': { left: 'Chaos', right: 'Order' },
  'white-black': { left: 'Group', right: 'Individual' },
  'black-green': { left: 'Exploitation', right: 'Preservation' },
  'green-blue': { left: 'Nature', right: 'Nurture' },
  'blue-red': { left: 'Reason', right: 'Emotion' },
}


// MetaGame specific mapping of colors to terms
// The deeper I get into this, the worse an idea leaving
// the canon seems. There's just too much built using
// an existing vocabulary to just abandon it…
export const names = {
  white: 'Justice', blue: 'Wisdom', red: 'Chaos',
  black: 'Ambition', green: 'Balance',
}
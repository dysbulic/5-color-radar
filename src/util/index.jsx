import { conflicts as order } from '../data/order'

// https://stackoverflow.com/a/64628011/264008
export const Range = (
  function*(total = 0, step = 1, from = 0) {
    for(let i = 0; i < total; yield from + i++ * step) {}
  }
)

// capirtalize the first letter of a string
export const capitalize = (str) => (
  str && str.length > 0 ? (
    `${str[0].toUpperCase()}${str.substring(1)}`
  ) : (
    str
  )
)

// radians to degrees
export const toDeg = (rad) => rad * 180 / Math.PI

// making BigInt available
export const BigInt = window.BigInt

// convert BigInt to web safe base64
export const btoa = (big) => (
  Buffer.from(big.toString(16), 'hex').toString('base64')
)
// convert from base64 to a BigInt
export const atob = (b64) => (
  BigInt(`0x${Buffer.from(b64, 'base64').toString('hex') || '00'}`)
)

// Proxy function for a hash that returns 0 if falsey
export const defZero = {
  get: (target, name) => (
    name in target ? target[name] : 0
  )
}

// Converts a set of normalized handles for conflicts
// (-1≤x≤1; 0≤y≤1) into a set of weights for the different
// colors
export const normsToWeights = (handles) => {
  const weights = {}
  const defined = n => n !== undefined
  if(Object.values(handles).filter(defined).length > 0) {
    // order the normalized scores
    const ordered = Object.fromEntries(
      order
      .map((id) => (
        [id, handles[id] ?? { x: 0, y: 0.5 }]
      ))
      .filter(defined)
    )

    const axes = Object.keys(ordered)
    const scores = Object.values(ordered)
    for(let idx = 1; idx <= scores.length; idx++) {
      const p1 = scores[(idx + scores.length - 2) % scores.length]
      const p2 = scores[(idx + 1) % scores.length]
      let l = 0.05 // minimum size
      const portance = (p1.y + p2.y) / 2 // mean of distance from center
      const viction = (p2.x + -p1.x) / 2
      l += 0.7 * portance
      l += 0.25 * viction
      const color = axes[(idx + 1) % scores.length].split('-')[0]
      weights[color] = l
    }
  }
  return weights
}

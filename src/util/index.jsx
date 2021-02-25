// https://stackoverflow.com/a/64628011/264008
export const Range = (
  function*(total = 0, step = 1, from = 0) {
    for(let i = 0; i < total; yield from + i++ * step) {}
  }
)

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

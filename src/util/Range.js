// https://stackoverflow.com/a/64628011/264008
export default function*(total = 0, step = 1, from = 0) {
  for(let i = 0; i < total; yield from + i++ * step) {}
}
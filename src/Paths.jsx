const paths = [
  'M 0,0 l 75,0 a 75,75 0 0 1 0,0 z',
  'M 0,0 l 75,0 a 75,75 0 0 1 -75,75 z',
  'M 0,0 l 75,0 a 75,75 0 1 1 -150,0 z',
  'M 0,0 l 75,0 a 75,75 0 1 1 -75,-75 z',
  'M 0,0 l 75,0 a 75,75 0 1 1 -22,-53 z',
  'M 0,0 l 75,0 a 75,75 0 1 1 0,-0.1 z',
]
const colors = [
  'green', 'purple', 'red', 'blue',
  'yellow', 'cyan'
]

export default () => (
  <svg viewBox="-100 -100 200 200">
    {paths.map((p, i) => (
      <path key={i} d={p} stroke={colors[i]} fill="none"/>
    ))}
  </svg>
)
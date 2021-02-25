import combos from './data/combos'
import { order } from './Test'



export default ({ scores }) => {
  const maxScore = Math.max(...Object.values(scores))
  const position = {}

  if(maxScore >= 0.5) { // Colorless if all ≤ 50%
    Object.entries(scores).forEach(([color, score]) => {
      if(score / maxScore >= 0.8) { // score is ≥ 80% of max
        position[color] = score
      }
    })
  }

  const mask = parseInt(
    order.map(c => position[c] ? '1' : '0').join(''),
    2
  )
  
  return (
    <h1>Result: {combos[mask]}</h1>
  )
}
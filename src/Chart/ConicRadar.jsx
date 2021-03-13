import { connect } from 'react-redux'
import { Range, capitalize } from '../util'
import { colors as order } from '../data/order'

const ConicRadar = ({ weights, size }) => {
  const numWeights = order.length
  const segment = 2 * Math.PI / numWeights
  const start = Math.PI / 2
  const thetas = [...Range(numWeights, segment, start)]
  const points = (
    order.map((color, i) => {
      const r = (weights[color] ?? 0) * size
      return {
        color,
        x: r * Math.cos(thetas[i]),
        y: r * -Math.sin(thetas[i]),
      }
    })
  )

  return (
    <g>
      <defs key='defs'>
        <polygon id='spread'
          points={points.map(p => `${p.x},${p.y}`).join(' ')}
        />
        <clipPath id='spreadclip'>
          <use href='#spread'
            transform={`translate(${size},${size})`}
          />
        </clipPath>
      </defs>
      {/* Conic gradients are only supported for HTML elements */}
      <foreignObject
        key='foreign'
        x={-size} y={-size}
        width={size * 2} height={size * 2}
      >
        <div id='coloredspread' key='coloredspread'/>
      </foreignObject>
      <use key='use' href='#spread' fill='none' stroke='black'/>
      {points.map((p, i) => (
        <circle key={p.color}
          cx={p.x} cy={p.y} r={0.05 * size}
          className='point'
          style={{ fill: p.color }}
        >
          <title>{`${capitalize(p.color)}: ${(weights[p.color] * 100).toFixed(1)}%
          `}</title>
        </circle>
      ))}
    </g>
  )
}

export default connect(
  (state) => {
    const { weights } = state
    return { weights }
  },
)(ConicRadar)
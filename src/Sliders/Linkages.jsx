import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { conflicts as order, colors } from '../data/order'

// Converts a set of normalized handles for conflicts
// (-1≤x≤1; 0≤y≤1) into a set of weights for the different
// colors
export const normsToWeights = (handles) => {
  const weights = []
  const defined = n => n !== undefined
  if(Object.values(handles).filter(defined).length > 0) {
    // order the normalized scores
    const norms = Object.fromEntries(
      order.map((out, id) => (
        handles[id] && [id, handles[id]]
      ))
    )

    const scores = Object.values(norms)
    console.info( { SCRs: scores })
    for(let idx = 1; idx <= scores.length; idx++) {
      const p1 = scores[(idx + scores.length - 2) % scores.length]
      const p2 = scores[(idx + 1) % scores.length]
      let l = 0.05 // minimum size
      const portance = (p1.y + p2.y) / 2 // mean of distance from center
      const viction = (p2.x + -p1.x) / 2
      l += 0.7 * portance
      l += 0.25 * viction 
      weights.push(l)
    }
  }
  return weights
}

const Linkages = ({
  handles, size,
}) => {
  const [polygon, setPolygon] = useState()
  const r = size / 2 // radius for polar coordinates
  const revOrder = [...order].reverse()

  const plot = () => {
    const offset = 3 * Math.PI / 10
    const arc = 2 * Math.PI / 5
    const points = (
      normsToWeights(handles).map((w, idx) => {
        const theta = offset + idx * arc
        return {
          x: r * w * Math.cos(theta),
          y: r * w * Math.sin(theta),
        }
      })
    )
    console.info({ handles })
    points.reverse()
    ;(points.length > 0) && setPolygon(points)
  }
  useEffect(plot, [plot, handles, r])

  return (
    (!polygon ? null : (
      <>
        {polygon.map((point, idx) => {
          const color = (
            colors[idx]
          )
          return (
            <g key={idx} className='link'>
              <circle className='joint'
                cx={point.x} cy={point.y}
                fill={color} stroke={color}
                strokeWidth={5}
                strokeOpacity='0.25'
                fillOpacity='0.5'
                r={25}
              />
            </g>
          )
        })}
        <polygon
          points={polygon.map(p => `${p.x},${p.y}`).join(' ')}
          stroke='black' fill='white' fillOpacity={0.5}
        />
      </>
    )
  ))
}

export default connect(
  (state) => {
    const { handles, transforms } = state
    return { handles, transforms }
  },
)(Linkages)
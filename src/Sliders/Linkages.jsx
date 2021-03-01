import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { colors } from '../data/order'
import { normsToWeights } from '../util'

const Linkages = ({
  handles, size,
}) => {
  const [polygon, setPolygon] = useState()
  const r = size / 2 // radius for polar coordinates

  const plot = () => {
    const offset = 3 * Math.PI / 10
    const arc = 2 * Math.PI / 5
    const points = (
      Object.values(normsToWeights(handles)).map((w, idx) => {
        const theta = offset + idx * arc
        return {
          x: r * w * Math.cos(theta),
          y: r * w * Math.sin(theta),
        }
      })
    )
    points.reverse()
    ;(points.length > 0) && setPolygon(points)
  }
  
  useEffect(plot, [plot, handles, r])

  return (
    (!polygon ? null : (
      <>
        {polygon.map((point, idx) => {
          const color = colors[idx]
          
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
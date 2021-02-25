import { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const order = [
  'green-blue', 'white-black',
  'blue-red', 'black-green', 
  'red-white', 
]

const Linkages = ({
  handles, size,
}) => {
  const [polygon, setPolygon] = useState()
  const r = size / 2 // radius for polar coordinates

  useEffect(() => {
    const defined = n => n !== undefined
    if(Object.values(handles).filter(defined).length > 0) {
      // order the normalized scores
      const norms = order.reduce((out = {}, id) => {
        out[id] = handles[id] // out.tap(o => o[id] = handles[id])
        return out
      })
      const offset = 3 * Math.PI / 10
      const arc = 2 * Math.PI / 5
      const scores = Object.values(norms)
      const points = []
      for(let idx = 1; idx <= scores.length; idx++) {
        const p1 = scores[(idx + scores.length - 2) % scores.length]
        const p2 = scores[(idx + 1) % scores.length]
        const theta = offset + idx * arc
        let l = 0.05 * r // minimum size
        const portance = (p1.y + p2.y) / 2 // mean of distance from center
        const viction = (p2.x + -p1.x) / 2
        console.info(portance, viction)
        l += 0.7 * r * portance
        l += 0.25 * r * viction 
        points.push({
          x: l * Math.cos(theta),
          y: l * Math.sin(theta),
        })
      }
      points.reverse()
      setPolygon(points )
    }
  }, [handles])



  return (
    !polygon ? null : (
      <>
        {polygon.map((point, idx) => (
          <g key={idx} className='link'>
            <circle className='joint'
              cx={point.x} cy={point.y}
              fill={order[idx].split('-')[1]}
              strokeOpacity='0.1'
              fillOpacity='0.25'
              r={25}
            />
          </g>
        ))}
        <polygon
          points={polygon.map(p => `${p.x},${p.y}`).join(' ')}
          stroke='black' fill='white' fillOpacity={0.5}
        />
      </>
    )
  )
}

export default connect(
  (state) => {
    const { handles, transforms } = state
    return { handles, transforms }
  },
)(Linkages)
import { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'

const order = [
  'red-white', 'white-black',
  'black-green', 'green-blue',
  'blue-red'
]

const Linkages = ({
  handles, r,
}) => {
  const [polygon, setPolygon] = useState()

  useEffect(() => {
    const defined = n => n !== undefined
    if(Object.values(handles).filter(defined).length > 0) {
      // order the normalized scores
      const norms = order.reduce((out, id) => {
        out[id] = handles[id]
        return out
      }, {})
      const offset = 3 * Math.PI / 10
      const arc = 2 * Math.PI / 5
      const scores = Object.values(norms)
      const points = scores.map((p1, idx) => {
        //const p2 = scores[(idx + scores.length - 2) % scores.length]
        const p2 = scores[(idx + 2) % scores.length]
        const theta = offset + idx * arc
        const l = 0.8 * r * (p1.y + p2.y) / 2 + 0.05 * r
        return {
          x: l * Math.cos(theta),
          y: l * Math.sin(theta),
        }
      })
      setPolygon(points.map(p => `${p.x},${p.y}`).join(' '))
    }
  }, [handles])

  return (
    <g>
      {/*Object.entries(centers).map(([id, handle], idx) => (
        <g key={id} className='link'>
          <circle className='joint'
            cx={handle.x} cy={handle.y}
            r={25}
          />
        </g>
      ))*/}
      <polygon points={polygon} stroke='black' fill='white' fillOpacity={0.5}/>
    </g>
  )
}

export default connect(
  (state) => {
    const { handles, transforms } = state
    return { handles, transforms }
  },
)(Linkages)
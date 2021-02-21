import { useState } from 'react'
import { connect } from 'react-redux'
import { setActive, setOrigin } from './Reducer' 
import './Sliders.scss'

const toDeg = (rad) => rad * 180 / Math.PI

export const Side = ({
  rot = 0, shrink = 0.9, colors = ['black', 'black'],
  r, l, active, origin, positions
}) => {
  const abbr = `${colors[0][0]}${colors[1][0]}`.toUpperCase()
  const position = positions[abbr]
  const toEdge = Math.sqrt(Math.abs((l / 2) ** 2 - r ** 2))
  const x = { 1: -l / 2 * shrink, 2: l / 2 * shrink }
  const [viction, setViction] = useState(0)
  const [portance, setPortance] = useState(0)
  const [last, setLast] = useState()
  const mouseDown = (evt) => {
    setOrigin({ x: evt.clientX, y: evt.clientY })
    setActive(abbr)
  }

  console.info({ viction, portance })

  if(active === abbr) {
    if(!origin) {
      console.warn('No Origin!')
    } else if(!position) {
      console.warn('No Position!')
    } else if(position.x !== last?.x || position.y !== last?.y) {
      const d = { x: position.x - origin.x, y: position.y - origin.y }
      const m = d.x === 0 ? 0 : d.y / d.x
      console.info({ d, m, max: Math.max(-0.9, Math.min(0.9, 4 * d.x / l)) })
      setViction(
        // This progresses at different speeds at different resolutions
        Math.max(-0.9, Math.min(0.9, 4 * d.x / l))
      )
      setPortance(
        // These values were determined by experimentation
        Math.max(-0.5, Math.min(0.31, 2 * d.y / r))
      )
      setLast(position)
    }
  }

  return (
    <>
      <defs>
        <linearGradient id={abbr}
          gradientUnits='userSpaceOnUse' // required for vertical lines
          x1={x[1]} y1={0} x2={x[2]} y2={0}
        >
          <stop offset='5%' stopColor={colors[0]}/>
          <stop offset='95%' stopColor={colors[1]}/>
        </linearGradient>
      </defs>
      <g className='side'
        transform={`
          translate(0, -${toEdge})
          rotate(${toDeg(rot)} 0 ${toEdge})
        `}
        onMouseDown={mouseDown}
      >
        <g transform={`translate(0, ${r * portance})`}>
          <line className='bg'
            x1={x[1]} y1={0}
            x2={x[2]} y2={0}
            markerStart={`url(#blackarrow)`}
            markerEnd={`url(#blackarrow)`}
          />
          <line
            x1={x[1]} y1={0}
            x2={x[2]} y2={0}
            stroke={`url(#${abbr})`}
            markerStart={`url(#${colors[0]}arrow)`}
            markerEnd={`url(#${colors[1]}arrow)`}
          />
          <circle cx={l / 2 * viction} cy={0} r={r / 10}/>
        </g>
      </g>
    </>
  )
}

export default connect(
  (state) => {
    console.info(state)
    const { active, origin, positions } = state
    return { active, origin, positions }
  },
)(Side)
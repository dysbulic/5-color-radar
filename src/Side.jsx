import { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { setActive, setOrigin, setHandle } from './Reducer' 
import './Sliders.scss'

const toDeg = (rad) => rad * 180 / Math.PI

export const Side = ({
  rot = 0, shrink = 0.9, colors = ['black', 'black'],
  r, l, active, origin, positions, 
}) => {
  const abbr = `${colors[0]}-${colors[1]}`
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
  const handle = useRef()
  const svg = (
    handle.current?.closest('svg')
    || document.querySelector('svg')
  )
  const pointFor = (pos) => {
    if(svg) {
      const p = svg.createSVGPoint()
      p.x = pos.x
      p.y = pos.y
      return p
    }
  }

  if(active === abbr) {
    if(!origin) {
      console.warn('No Origin!')
    } else if(!position) {
      console.warn('No Position!')
    } else if(position.x !== last?.x || position.y !== last?.y) {
      const d = { x: position.x - origin.x, y: position.y - origin.y }
      const m = d.x === 0 ? 0 : d.y / d.x
      //console.info({ d, m, max: Math.max(-0.9, Math.min(0.9, 4 * d.x / l)) })
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

  useEffect(() => {
    if(svg) {
      const point = pointFor({ x: l / 2 * viction, y: r * portance })
      // console.info(
      //   handle.current.getScreenCTM().inverse(),
      //   svg.getScreenCTM().inverse()
      // )
      point.matrixTransform(
        handle.current.getCTM().inverse()
      )
      //console.info('P1', point)
      // point.matrixTransform(
      //   svg.getScreenCTM().inverse()
      // )
      //console.info('P2', point)
      const { x, y } = point
      setHandle(abbr, { x, y })
    }
  }, [viction, portance])

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
      <g className='side '
        transform={`
          translate(0, -${toEdge})
          rotate(${toDeg(rot)} 0 ${toEdge})
        `}
        onMouseDown={mouseDown}
      >
        <g transform={`translate(0, ${position?.y ?? 0})`}>
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
          <circle
            cx={position?.x ?? 0} cy={0} r={r / 10}
            ref={handle}
          />
        </g>
      </g>
    </>
  )
}

export default connect(
  (state) => {
    const { active, origin, positions, handles } = state
    return { active, origin, positions, handles }
  },
)(Side)
import { useState, useMemo } from 'react'

const toRad = (deg) => deg * Math.PI / 180
const toDeg = (rad) => rad * 180 / Math.PI

export default ({
  rot = 0, shrink = 0.9, colors = ['black', 'black'],
  r = 10, l, setTracker
}) => {
  const [origin, setOrigin] = useState()
  const [viction, setViction] = useState(0)
  const [protance, setPortance] = useState(0)
  const toEdge = Math.sqrt(Math.abs((l / 2) ** 2 - r ** 2))
  const abbr = `${colors[0][0].toUpperCase()}${colors[1][0].toUpperCase()}`
  const x = { 1: -l / 2 * shrink, 2: l / 2 * shrink }
  const track = useMemo((pos) => {
    console.info({ pos, origin })
    if(!origin) {
      console.warn('No Origin!')
      return
    }
    const d = { x: pos.x - origin.x, y: pos.y - origin.y }
    const m = d.x === 0 ? 0 : d.y / d.x
    setViction(
      Math.max(-1, Math.min(1, d?.x ?? 0 / l))
    )
    setPortance(
      Math.max(-1, Math.min(1, d?.y ?? 0 / r))
    )
  })
  const startTrack = (evt) => {
    setOrigin({ x: evt.clientX, y: evt.clientY })
    setTracker(() => track)
  }
  return (
    <>
      <defs>
        <linearGradient id={abbr}
          gradientUnits='userSpaceOnUse'
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
        onMouseDown={startTrack}
      >
        <line
          x1={x[1]} y1={0}
          x2={x[2]} y2={0}
          stroke={`url(#${abbr})`}
          markerStart={`url(#${colors[0]}arrow)`}
          markerEnd={`url(#${colors[1]}arrow)`}
        />
        <circle cx={l / 2 * viction} cy={0} r={r / 10}/>
      </g>
    </>
  )
}


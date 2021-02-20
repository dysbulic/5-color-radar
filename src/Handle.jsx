import { useState } from 'react'
import './Sliders.scss'

// Generate a shortened version of the given line
// with a handle that allows it to be moved along
// a line perpendicular to itself.
export default ({ p1, p2, sarr, earr, stroke, dispatch, pos }) => {
  const [drag, setDrag] = useState(0)
  console.info(pos)
  const d = { x: p2.x - p1.x, y: p2.y - p1.y }
  const m = d.y / d.x
  const h = Math.sqrt(d.y ** 2 + d.x ** 2)
  const pad = h * 0.1
  const offset = {
    x: d.x * pad / h, // they're similar triangles
    y: d.y * pad / h,
  }
  const startDrag = (evt) => dispatch({ type: 'press', payload: evt })

  return (
    <g key={stroke} transform={`translate(${drag})`}>
      <line
        x1={p1.x + offset.x}
        y1={p1.y + offset.y}
        x2={p2.x - offset.x}
        y2={p2.y - offset.y}
        markerStart={`url(${sarr})`}
        markerEnd={`url(${earr})`}
        stroke={`url(${stroke})`}
      />
      <circle className='handle'
        draggable={true}
        cx={p1.x + d.x * h / 2 / h}
        cy={p1.y + d.y * h / 2 / h}
        r={h / 25}
        onMouseDown={startDrag}
      />
    </g>
  )
}
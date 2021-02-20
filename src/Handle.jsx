import { useEffect } from 'react'
import { useState } from 'react'
import './Sliders.scss'

// Generate a shortened version of the given line
// with a handle that allows it to be moved along
// a line perpendicular to itself.
export default ({ p1, p2, sarr, earr, stroke, dispatch, pos }) => {
  const [start, setStart] = useState(pos)
  const [preference, setPreference] = useState(0)
  const [importance, setImportance] = useState(0)
  const d = { x: p2.x - p1.x, y: p2.y - p1.y }
  const m = d.y / d.x
  const h = Math.sqrt(d.y ** 2 + d.x ** 2)
  const pad = h * 0.1
  const offset = {
    x: d.x * pad / h, // they're similar triangles
    y: d.y * pad / h,
  }
  const startDrag = (evt) => dispatch({ type: 'press', payload: evt })

  useEffect(() => {
    if(!pos || !start) {
      setStart(pos)
    } else {
      const delta = { x: pos.x - start.x, y: pos.y - start.y }
      setPreference(delta.x)
    }
  }, [pos])

  return (
    <g key={stroke} transform=''>
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
        cx={p1.x + (d.x - preference) * h / 2 / h}
        cy={p1.y + (d.y - preference) * h / 2 / h}
        r={h / 25}
        onMouseDown={startDrag}
      />
    </g>
  )
}
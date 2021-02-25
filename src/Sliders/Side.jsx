import { useEffect, useState, useRef, useMemo } from 'react'
import { connect } from 'react-redux'
import {
  setActive, setOrigin, setHandle as setNormHandle,
  setTransform, setConflict,
} from '../Reducer'
import { reasons } from '../data/order'
import { toDeg } from '../util'

export const bounds = {
  x: { min: -400, max: 400 },
  y: { min: -250, max: 150 },
}
export const extents = {
  x: Math.abs(bounds.x.min) + Math.abs(bounds.x.max),
  y: Math.abs(bounds.y.min) + Math.abs(bounds.y.max),
}

export const Side = ({
  rot = 0, shrink = 0.9, colors = ['black', 'black'],
  r, l, positions, handles, transforms
}) => {
  const id = useMemo(
    () => `${colors[0]}-${colors[1]}`,
    [colors]
  )
  const position = positions[id]
  const transform = transforms[id]
  const normHandle = handles[id] ?? { x: 0, y: 0 }
  const x = { 1: -l / 2 * shrink, 2: l / 2 * shrink }
  const toEdge = Math.sqrt(Math.abs((l / 2) ** 2 - r ** 2))
  const [handle, setHandle] = useState({ x: 0, y: 0 })
  const mouseDown = (evt) => {
    const conflict = reasons[id]
    setOrigin({ x: evt.clientX, y: evt.clientY })
    setActive(id)
    setConflict({
      left: { color: colors[0], text: conflict.left },
      right: { color: colors[1], text: conflict.right },
    })
  }
  const handleRef = useRef()
  const svg = (
    handleRef.current?.closest('svg')
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
  const matrixFor = (mat) => {
    if(svg) {
      const m = svg.createSVGMatrix()
      Object.keys(mat).forEach((attr) => {
        m[attr] = mat[attr]
      })
      return m
    }
  }

  const trans = () => {
    if(svg) {
      const { a, b, c, d, e, f } = (
        handleRef.current
        .getScreenCTM()
        .inverse()
        .multiply(
          svg.getScreenCTM()
        )
      )
      setTransform(id, { a, b, c, d, e, f })
    }
  }
  useEffect(trans, [id, svg])

  // useEffect(() => {
  //   setNormHandle(id, { x: 0, y: 0.325 })
  //   setHandle(id, { x: 0, y: 0 })
  // }, [id])

  const repos = () => {
    if(!position || !transform) {
      return
    } else if(!handleRef.current) {
      console.warn('No Handle!')
    } else {
      const p = pointFor(position)
      const trans = matrixFor(transform)
      const { x, y } = p.matrixTransform(trans)
      const bounded = {
        x: Math.min(Math.max(x, bounds.x.min), bounds.x.max),
        y: Math.min(Math.max(y, bounds.y.min), bounds.y.max),
      }
      const norm = {
        x: -1 + 2.0 * (bounded.x - bounds.x.min) / extents.x,
        y: 1 - (bounded.y - bounds.y.min) / extents.y,
      }
      setHandle(bounded)
      setNormHandle(id, norm)
    }
  }
  //useEffect(repos, [position, transform])

  return (
    <>
      <defs>
        <linearGradient id={id}
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
        ref={handleRef}
      >
        <g
          // ToDo: figure out why this is sometimes undefined
          transform={`translate(0, ${handle?.y ?? 0})`}
        >
          <line className='bg'
            x1={x[1]} y1={0}
            x2={x[2]} y2={0}
            markerStart={`url(#blackarrow)`}
            markerEnd={`url(#blackarrow)`}
          />
          <line
            x1={x[1]} y1={0}
            x2={x[2]} y2={0}
            stroke={`url(#${id})`}
            // the arrow markers are defined in the chart
            markerStart={`url(#${colors[0]}arrow)`}
            markerEnd={`url(#${colors[1]}arrow)`}
          />
          <g className='handle'>
            <circle
              cx={handle.x} cy={0} r={r / 10}
              style={{
                fillOpacity: (
                  0.5 * normHandle.y ?? 0
                ),
              }}
            />
            <circle
              cx={handle.x} cy={0} r={r / 25}
              style={{
                fill: colors[0],
                fillOpacity: 1 - (1 + normHandle.x) / 2,
              }}
            />
            <circle
              cx={handle.x} cy={0} r={r / 30}
              style={{
                fill: colors[1],
                fillOpacity: (1 + normHandle.x) / 2,
              }}
            />
          </g>
        </g>
      </g>
    </>
  )
}

export default connect(
  (state) => {
    const {
      active, origin, positions, handles, transforms
    } = state
    return { active, origin, positions, handles, transforms }
  },
)(Side)
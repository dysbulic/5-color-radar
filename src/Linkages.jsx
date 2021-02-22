import { useRef } from 'react'
import { connect } from 'react-redux'

const order = [
  'red-white', 'white-black',
  'black-green', 'green-blue',
  'blue-red'
]

const Linkages = ({
  handles, transforms, x = 0, y = 0
}) => {
  const linkRef = useRef()
  const svg = linkRef.current?.closest('svg')
  console.info({ svg })
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
      if(mat) {
        Object.keys(mat).forEach((attr) => {
          m[attr] = mat[attr]
        })
      }
      return m
    }
  }
  const centers = order.reduce((out, id) => {
    if(svg) {
      const transform = matrixFor(transforms[id])
      const point = pointFor(handles[id] ?? { x: 0, y: 0 })
      out[id] = point.matrixTransform(transform.inverse())
    }
    return out
  }, {})

  return (
    <g ref={linkRef}>
      {(() => {
        return Object.entries(centers).map(([id, handle], idx) => {
          return (
            <g className='link'>
              <circle className='joint'
                cx={handle.x} cy={handle.y}
                r={25}
              />
            </g>
          )
        })
      })()}
    </g>
  )
}

export default connect(
  (state) => {
    const { handles, transforms } = state
    return { handles, transforms }
  },
)(Linkages)
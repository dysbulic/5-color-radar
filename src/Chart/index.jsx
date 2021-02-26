import { connect } from 'react-redux'
import ConicRadar from './ConicRadar'
import { Range } from '../util'
import { colors as order } from '../data/order'
import './Chart.scss'

const Chart = ({ weights }) => {
  const numWeights = Object.keys(weights).length
  const segment = 2 * Math.PI / numWeights
  const start = Math.PI / 2
  const thetas = [...Range(numWeights, segment, start)]
  const numPolys = 10
  const incr = 10
  const size = numPolys * incr
   // percentage of distance to edge to draw color circle
  const circCent = 0.7

  const Circles = ({ points }) => (
    <g id='circles' key='circles'>
      {points.map((p, i) => (
        <g id={order[i]} key={order[i]}>
          <circle
            cx={circCent * p.x}
            cy={circCent * p.y}
            r={0.4 * size}
            mask='url("#surround")'
            fill={order[i]}
          >
            <title>{order[i].toUpperCase()}</title>
          </circle>
          <circle
            cx={circCent * p.x}
            cy={circCent * p.y}
            r={0.4 * size}
            mask='url("#outside")'
            fill='none' stroke='black'
            strokeWidth={incr / 2}
          >
            <title>{order[i].toUpperCase()}</title>
          </circle>
        </g>
      ))}
    </g>
  )

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%" height="100%"
      viewBox={[
        -size * 1.1, -size * 1.1, size * 2.2, size * 2.2
      ].join(' ')}
    >
      <title>Magic: The Gathering Five Color Disposition Radar Chart</title>
      {/* The pentagon is taller on top than the bottom & needs to be shifted */}
      <g transform={`translate(
        0, ${(size - size * Math.cos(segment / 2)) / 2}
      )`}>
        <g id='rings'>
          {[...Range(numPolys, 1, 1)].map((idx) => {
            const last = idx === numPolys
            const dist = idx * incr
            const points = thetas.map((theta) => (
              {
                x: dist * Math.cos(theta),
                y: dist * -Math.sin(theta),
              }
            ))
            const path = points.map(
              p => `${p.x},${p.y}`
            ).join(' ')
 
            return (
              <>
                {last && (
                  <defs key='defs'>
                    <polygon id='outer'
                      points={path}
                    />
                    <mask id='surround'>
                      <use id='surrmask' href='#outer'/>
                    </mask>
                    <mask id='outside'>
                      <use id='outmask' href='#outer'/>
                    </mask>
                  </defs>
                )}
                {last
                  ? <>
                    <use
                      id='outeruse'
                      key='outer'
                      href='#outer'
                      className='ring'
                    />
                    <Circles {...{ points }}/>
                  </> : (
                    <polygon
                      key={idx}
                      className='ring '
                      points={path}
                    />
                  )
                }
              </>
            )
          })}
        </g>
        <ConicRadar {...{ size }}/>
      </g>
   </svg>
  )
}

export default connect(
  (state) => {
    const { weights } = state
    return { weights }
  },
)(Chart)
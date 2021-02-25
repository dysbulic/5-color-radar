import ConicRadar from './ConicRadar'
import { Range } from '../util'
import { colors as order } from '../data/order'
import './Chart.scss'

export default ({ scores }) => {
  const numScores = Object.keys(scores).length
  const segment = 2 * Math.PI / numScores
  const start = Math.PI / 2
  const thetas = [...Range(numScores, segment, start)]
  const numPolys = 10
  const incr = 10
  const size = numPolys * incr

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%" height="100%"
      viewBox={[-size * 1.1, -size * 1.1, size * 2.2, size * 2.2].join(' ')}
      id="5-color-radar"
    >
      <title>Magic: The Gathering Five Color Disposition Radar Chart</title>
      {/* The pentagon is taller on top than the bottom & needs to be shifted */}
      <g transform={`translate(0, ${(size - size * Math.cos(segment / 2)) / 2})`}>
        {[...Range(numPolys, 1, 1)].map((idx) => {
          const last = idx === numPolys
          const dist = idx * incr
          const points = thetas.map((theta) => (
            {
              x: dist * Math.cos(theta),
              y: dist * -Math.sin(theta),
            }
          ))
          const circPercent = 0.7 // percentage of distance to edge to draw color circle
          return <>
            {last &&
              <>
                <path id='web' key='web'
                  d={points.map(p => `M0,0l${p.x},${p.y}`).join('')}
                />
                {points.map((p, i) => (
                  <g id={order[i]} key={order[i]}>
                    <circle
                      cx={circPercent * p.x}
                      cy={circPercent * p.y}
                      r={0.4 * size}
                      mask='url("#surround")'
                      fill={order[i]}
                    >
                      <title>{order[i].toUpperCase()}</title>
                    </circle>
                    <circle
                      cx={circPercent * p.x}
                      cy={circPercent * p.y}
                      r={0.4 * size}
                      mask='url("#outside")'
                      fill='none' stroke='black'
                      strokeWidth={incr / 2}
                    >
                      <title>{order[i].toUpperCase()}</title>
                    </circle>
                  </g>
                ))}
              </>
            }
            <g id={`poly${idx}`} key={`poly${idx}`}>
              {last
                ? (
                  <>
                    <defs>
                      <polygon id='outer'
                        points={points.map(p => `${p.x},${p.y}`).join(' ')}
                      />
                      <mask id='surround'>
                        <use id='surrmask' href='#outer'/>
                      </mask>
                      <mask id='outside'>
                        <use id='outmask' href='#outer'/>
                      </mask>
                    </defs>
                    <use id='outeruse' href='#outer' className='ring'/>
                  </>
                ) : (
                  <polygon
                    className='ring '
                    points={points.map(p => `${p.x},${p.y}`).join(' ')}
                  />
                )
              }
            </g>
          </>
        })}
        <ConicRadar {...{ scores, size }}/>
      </g>
   </svg>
  )
}
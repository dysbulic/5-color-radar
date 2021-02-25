import Range from './Range'
import { order } from './Test'
import './Chart.scss'

export const ConicRadar = ({ scores }) => {
  const size = 100
  const segment = 2 * Math.PI / scores.length
  const start = Math.PI / 2
  const thetas = [...Range(scores.length, segment, start)]
  const points = (
    Object.entries(order)
    .map((color, i) => {
      const r = scores[color] * size
      return {
        color,
        x: r * Math.cos(thetas[i]),
        y: r * -Math.sin(thetas[i]),
      }
    })
  )
  return (
    <g>
      <defs key='defs'>
        <polygon id='spread'
          points={points.map(p => `${p.x},${p.y}`).join(' ')}
        />
        <clipPath id='spreadclip'>
          <use href='#spread'
            transform={`translate(${size},${size})`}
          />
        </clipPath>
      </defs>
      {/* Conic gradients are only supported for HTML elements */}
      <foreignObject
        key='foreign'
        x={-size} y={-size}
        width={size * 2} height={size * 2}
      >
        <div id='coloredspread' key='coloredspread'/>
      </foreignObject>
      <use key='use' href='#spread' fill='none' stroke='black'/>
      {points.map((p, i) => (
        <circle key={p.key}
          cx={p.x} cy={p.y} r={0.25 * size}
          className='point'
          style={{ fill: order[i] }}
        >
          <title>{`${p.key.toUpperCase()}: ${(scores[p.key] * 100).toFixed(1)}%`}</title>
        </circle>
      ))}
    </g>
  )
}

export default ({ colors, attrs, scores }) => {
  scores = order.map(color => scores[color])
  const segment = 2 * Math.PI / scores.length
  const start = Math.PI / 2
  const thetas = [...Range(scores.length, segment, start)]
  const numPolys = 10
  const incr = 10
  const size = numPolys * incr

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%" height="100%"
      viewBox="-110 -110 220 220"
      version="1.1"
      id="5-color-radar"
    >
      <title>Magic: The Gathering Five Color Personality Radar Chart</title>
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
      </g>
   </svg>
  )
}
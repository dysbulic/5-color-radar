import Range from './Range'
import './Chart.scss'

export default ({ colors, attrs, scores }) => {
  const numSides = Object.keys(colors).length
  const numPolys = 10
  const incr = 10
  const size = numPolys * incr
  const segment = 2 * Math.PI / numSides
  const start = Math.PI / 2
  const thetas = [...Range(numSides, segment, start)]
  const angles = Object.keys(colors).reduce((out, key, idx) => {
    out[key] = thetas[idx]
    return out
  }, {})

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
          const points = Object.entries(angles).map(([key, theta]) => (
            {
              x: dist * Math.cos(theta),
              y: dist * -Math.sin(theta),
              key,
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
                  <g id={attrs[p.key]} key={attrs[p.key]}>
                    <circle
                      cx={circPercent * p.x}
                      cy={circPercent * p.y}
                      r={0.4 * size}
                      mask='url("#surround")'
                      fill={Object.values(colors)[i]}
                    >
                      <title>{attrs[p.key]}</title>
                    </circle>
                    <circle
                      cx={circPercent * p.x}
                      cy={circPercent * p.y}
                      r={0.4 * size}
                      mask='url("#outside")'
                      fill='none' stroke='black'
                      strokeWidth={incr / 2}
                    >
                      <title>{attrs[p.key]}</title>
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
        {(() => {
          const points = Object.entries(scores).map(([key, score], i) => {
            const r = score * size
            return {
              x: r * Math.cos(angles[key]),
              y: r * -Math.sin(angles[key]),
              key,
            }
          })
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
                  cx={p.x} cy={p.y} r={0.25 * incr}
                  className='point'
                  style={{ fill: colors[p.key] }}
                >
                  <title>{`${attrs[p.key]}: ${(scores[p.key] * 100).toFixed(1)}%`}</title>
                </circle>
              ))}
            </g>
          )
        })()}
      </g>
   </svg>
  )
}
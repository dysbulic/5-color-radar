import { connect } from 'react-redux'

const order = [
  'red-white', 'white-black',
  'black-green', 'green-blue',
  'blue-red'
]

const Linkages = ({
  handles, positions, x = 0, y = 0
}) => {
  return (
    order.map((id, idx) => {
      const position = positions[id]
      if(!position) return null
      const prev = (
        position[order[idx - 1]]
        ?? { x: 0, y: 0 }
      )
      const l = prev && (
        Math.sqrt((position.x - prev.x) ** 2 + (position.y - prev.y) ** 2)
      )
      return (
        <g key={id}>
          <circle
            cx={position.x} cy={position.y}
            r={50}
            fill='red'
          />
          {idx > 0 && (
            <g transform={`
              translate(${position.x}, ${position.y})
              rotate(0)
            `}>
              <rect
                x={10} y={-l / 2}
                height={2 * 10} width={l}
                fill='green' stroke='black'
              />
            </g>
          )}
        </g>
      )
    })
  )
}

export default connect(
  (state) => {
    const { handles, positions } = state
    return { handles, positions }
  },
)(Linkages)
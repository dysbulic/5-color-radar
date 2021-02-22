import { useRef } from 'react'
import { chakra } from '@chakra-ui/react'
import { connect } from 'react-redux'
import { setActive, setPosition } from './Reducer'
import Ambition from './icons/ambition.svg'
import Balance from './icons/balance.svg'
import Chaos from './icons/chaos.svg'
import Justice from './icons/justice.svg'
import Wisdom from './icons/wisdom.svg'
import Side from './Side'
import Linkages from './Linkages'
import './Sliders.scss'

const SVG = chakra('svg', {
  baseStyle: {
    maxH: '100vh',
  },
})

// draw a five pointed star inscribed in a circle
const Sliders = ({ active }) => {
  const r = 500 // the radius of the circle
  // the length of the star's sides
  const l = r * Math.sin(4 * Math.PI / 5) / Math.sin(Math.PI / 10)
  const svg = useRef()

  const pointFor = (pos) => {
    if(svg.current) {
      const p = svg.current.createSVGPoint()
      p.x = pos.x
      p.y = pos.y
      return p
    }
  }

  const BgImage = ({ x = 0, y = 0, image, name }) => (
    <g className={`bg ${name.toLowerCase()}`}
      transform={`translate(${x - (r / 4)}, ${y - (r / 4)})`}
    >
      <rect
        x={-r / 8} y={-r / 16}
        width={6 * r / 8} height={6 * r / 8}
        rx={r / 10} ry={r / 10}
      />
      <image
        xlinkHref={image}
        width={r / 2} height={r / 2}
        filter='url(#shadow)'
      />
      <text
        textAnchor='middle'
        x={2 * r / 8} y={5 * r / 8}
      >{name}</text>
    </g>
  )

  const StarSide = ({ colors, rot }) => (
    <Side {...{ colors, rot, l, r }}/>
  )

  const mouseMove = (evt) => {
    if(!!active && !!svg.current) {
      const pos = { x: evt.clientX, y: evt.clientY }
      const p = pointFor(pos)
      const { x, y } = p.matrixTransform(
        svg.current.getScreenCTM().inverse()
      )
      setPosition(active, { x, y })
    }
  }
  const mouseUp = (evt) => {
    setActive(false)
  }

  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%" height="100%"
      viewBox={[-r * 1.6, -r * 1.6, 3.2 * r, 3.15 * r].join(' ')}
      onMouseMove={mouseMove} onMouseUp={mouseUp}
      preserveAspectRatio='xMidYMid meet'
      ref={svg}
    >
      <defs>
        <filter id="shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="8">
            <animate attributeName='stdDeviation' values='8; 10; 8' dur='1s' begin='0s' repeatCount='indefinite'/>
          </feGaussianBlur>
          <feOffset dx="0" dy="5" result="offsetblur"/>
          <feFlood floodColor="black">
            <animate attributeName='floodColor' values='black; orange; black; red; blue; white' dur='4s' begin='0s' repeatCount='indefinite'/>
          </feFlood>
          <feComposite in2="offsetblur" operator="in"/>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <path id='head' d="M 0 0 L 10 5 L 0 10 z"/>
        {
          ['white', 'blue', 'black', 'green', 'red']
          .map((color) => (
            <marker id={`${color}arrow`} key={color}
              viewBox="0 0 10 10" refX="5" refY="5"
              markerWidth="4" markerHeight="8"
              orient="auto-start-reverse"
            >
              <use href='#head' fill={color}/>
            </marker>
          ))
        }
      </defs>
      <title>Magic: The Gathering Five Color Personality Slider</title>
      <g className='images'>
        <BgImage
          x={0} y={-(r + r / 4)}
          image={Justice} name='Justice'
        />
        <BgImage
          x={(r * Math.sin(Math.PI / 5)) / Math.sin(Math.PI / 2) + r / 4}
          y={(r * Math.sin(3 * Math.PI / 10)) / Math.sin(Math.PI / 2) + r / 4}
          image={Ambition} name='Ambition'
        />
        <BgImage
          x={-(r * Math.sin(Math.PI / 5) / Math.sin(Math.PI / 2) + r / 4)}
          y={(r * Math.sin(3 * Math.PI / 10)) / Math.sin(Math.PI / 2) + r / 4}
          image={Chaos} name='Chaos'
        />
        <BgImage
          x={-(r * Math.sin(2 * Math.PI / 5) / Math.sin(Math.PI / 2) + r / 4)}
          y={-(r * Math.sin(Math.PI / 10) / Math.sin(Math.PI / 2) + r / 4)}
          image={Balance} name='Balance'
        />
        <BgImage
          x={r * Math.sin(2 * Math.PI / 5) / Math.sin(Math.PI / 2) + r / 4}
          y={-(r * Math.sin(Math.PI / 10) / Math.sin(Math.PI / 2) + r / 4)}
          image={Wisdom} name='Wisdom'
        />
      </g>
      <g className='links'>
        <Linkages/>
      </g>
      <g className='sides' transform={`translate(0, ${r / 8})`}>
        <StarSide rot={-4 * Math.PI / 10} colors={['red', 'white']}/>
        <StarSide rot={4 * Math.PI / 10} colors={['white', 'black']}/>
        <StarSide rot={-8 * Math.PI / 10} colors={['black', 'green']}/>
        <StarSide rot={0} colors={['green', 'blue']}/>
        <StarSide rot={8 * Math.PI / 10} colors={['blue', 'red']}/>
      </g>
    </SVG>
  )
}

export default connect(
  (state) => ({ active: state.active }),
)(Sliders)
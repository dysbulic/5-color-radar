import {
  useRef, useState, useEffect, useCallback,
} from 'react'
import {
  chakra, Box, Heading, Spacer, Stack, Text, Flex,
} from '@chakra-ui/react'
import { connect } from 'react-redux'
import {
  setActive, setConflict, setPosition
} from '../Reducer'
import Side from './Side'
import Linkages from './Linkages'
import './index.scss'
import { colors as order } from '../data/order'
import { capitalize } from '../util'

import White from '../icons/White.svg'
import Blue from '../icons/Blue.svg'
import Black from '../icons/Black.svg'
import Red from '../icons/Red.svg'
import Green from '../icons/Green.svg'

const SVG = chakra('svg', {
  baseStyle: {
    maxH: 'calc(100vh - 3.75rem)',
  },
})

// draw a five pointed star inscribed in a circle
const Sliders = ({ active, conflict }) => {
  const [images, setImages] = useState()
  const r = 500 // the radius of the circle
  // the length of the star's sides
  const l = r * Math.sin(4 * Math.PI / 5) / Math.sin(Math.PI / 10)
  const d = r * 0.75 // distance out to place icons
  const svg = useRef()

  const pointFor = (pos) => {
    if(svg.current) {
      const p = svg.current.createSVGPoint()
      p.x = pos.x
      p.y = pos.y
      return p
    }
  }

  const load = useCallback(async () => {
    try {
      const images = {}
      for(let name of order) {
        const path = `../icons/${capitalize(name)}.svg`
        images[name] = (await import(`${path}`))
      }
      setImages(images)
    } catch(err) {
      console.warn("Couldn't Load Images", err)
      setImages({ White, Blue, Black, Red, Green })
    }
  }, [])

  useEffect(() => load(), [load])
  
  const BgImage = ({ x = 0, y = 0, name }) => (
    <g className={`bg ${name.toLowerCase()}`}
      transform={`translate(${x - (r / 4)}, ${y - (r / 4)})`}
    >
      <rect
        x={-r / 8} y={-r / 16}
        width={6 * r / 8} height={6 * r / 8}
        rx={r / 10} ry={r / 10}
      />
      {images?.[name] && (
        <image
          xlinkHref={images[name]}
          width={r / 2} height={r / 2}
          filter='url(#shadow)'
        />
      )}
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
    if(active && svg.current) {
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
    setConflict(false)
  }
  const mouseOut = (evt) => {
    // ToDo: handle mouse outs of the document as release events
    if(evt.target === svg.current) {
      mouseUp(evt)
    }
    evt.stopPropagation()
  }

  return (
    <Flex direction='column' w='100%' align='center'>
      <Box minH='3.75rem'>
        {!!conflict && (
          <Box
            align='center' className='conflict'
            ml='3rem' w='100%'
            background={`linear-gradient(
              to left,
              transparent, ${conflict.right.color},
              ${conflict.left.color}, transparent
            )`}
          >
            <Heading maxW='25rem' p={2}>
              <Stack direction='row'>
                <Text color={conflict.left.color}
                  style={{ WebkitTextStrokeColor: conflict.right.color }}
                >
                  {conflict.left.text}
                </Text>
                <Spacer/>
                <Text color={conflict.right.color}
                  style={{ WebkitTextStrokeColor: conflict.left.color }}
                >
                  {conflict.right.text}
                </Text>
              </Stack>
            </Heading>
          </Box>
        )}
      </Box>
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%" height="100%"
        viewBox={[-r * 1.6, -r * 1.35, 3.2 * r, 2.7 * r].join(' ')}
        onMouseMove={mouseMove} onMouseUp={mouseUp} onMouseOut={mouseOut}
        preserveAspectRatio='xMidYMid meet'
        ref={svg}
      >
        <defs>
          <filter id="shadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="8">
              <animate
                attributeName='stdDeviation'
                values='8; 10; 8'
                dur='1s' begin='0s' repeatCount='indefinite'
              />
            </feGaussianBlur>
            <feOffset dx="0" dy="5" result="offsetblur"/>
            <feFlood floodColor="black">
              <animate
                attributeName='floodColor'
                values='black; orange; black; red; blue; white'
                dur='4s' begin='0s' repeatCount='indefinite'
              />
            </feFlood>
            <feComposite in2="offsetblur" operator="in"/>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <path id='head' d="M 0 0 L 10 5 L 0 10 z"/>
          {
            order
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
            x={0} y={-(d + r / 4)}
            name='White'
          />
          <BgImage
            x={(d * Math.sin(Math.PI / 5)) / Math.sin(Math.PI / 2) + r / 4}
            y={(d * Math.sin(3 * Math.PI / 10)) / Math.sin(Math.PI / 2) + r / 4}
            name='Black'
          />
          <BgImage
            x={-(d * Math.sin(Math.PI / 5) / Math.sin(Math.PI / 2) + r / 4)}
            y={(d * Math.sin(3 * Math.PI / 10)) / Math.sin(Math.PI / 2) + r / 4}
            name='Red'
          />
          <BgImage
            x={-(d * Math.sin(2 * Math.PI / 5) / Math.sin(Math.PI / 2) + r / 4)}
            y={-(d * Math.sin(Math.PI / 10) / Math.sin(Math.PI / 2))}
            name='Green'
          />
          <BgImage
            x={d * Math.sin(2 * Math.PI / 5) / Math.sin(Math.PI / 2) + r / 4}
            y={-(d * Math.sin(Math.PI / 10) / Math.sin(Math.PI / 2))}
            name='Blue'
          />
        </g>
        <g className='links' transform={`translate(0, ${r / 8})`}>
          <Linkages {...{ size: 2 * r }}/>
        </g>
        <g className='sides' transform={`translate(0, ${r / 8})`}>
          <StarSide rot={-4 * Math.PI / 10} colors={['red', 'white']}/>
          <StarSide rot={4 * Math.PI / 10} colors={['white', 'black']}/>
          <StarSide rot={-8 * Math.PI / 10} colors={['black', 'green']}/>
          <StarSide rot={0} colors={['green', 'blue']}/>
          <StarSide rot={8 * Math.PI / 10} colors={['blue', 'red']}/>
        </g>
      </SVG>
    </Flex>
  )
}

export default connect(
  (state) => {
    const { active, conflict } = state
    return { active, conflict }
  },
)(Sliders)
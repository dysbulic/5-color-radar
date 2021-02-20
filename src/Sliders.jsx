import { useState, useReducer } from 'react'
import Handle from './Handle'
import Ambition from './icons/ambition.svg'
import Balance from './icons/balance.svg'
import Chaos from './icons/chaos.svg'
import Wisdom from './icons/wisdom.svg'
import Justice from './icons/justice.svg'
import './Sliders.scss'

export default () => {
  // draw a five pointed star inscribed in a circle
  const r = 500
  const p1 = { x: r, y: 0 }
  const p2 = {
    x: r * -Math.cos(Math.PI / 5),
    y: r * -Math.sin(Math.PI / 5),
  } // ϴ = Π - (2)(2Π/5) = Π / 5
  const p3 = {
    x: r * Math.sin(Math.PI / 10) / Math.sin(Math.PI / 2),
    y: r * Math.sin(2 * Math.PI / 5) / Math.sin(Math.PI / 2),
  }
  const p4 = {
    x: r * Math.sin(Math.PI / 10) / Math.sin(Math.PI / 2),
    y: (
      r * Math.sin(2 * Math.PI / 5) / Math.sin(Math.PI / 2)
    - r * Math.sin(4 * Math.PI / 5) / Math.sin(Math.PI / 10)
    ),
  }
  const p5 = {
    x: r * -Math.cos(Math.PI / 5),
    y: r * Math.sin(Math.PI / 5),
  } // ϴ = Π - (2)(2Π/5) = Π / 5
 
  const reducer = (state, action) => {
    console.info(action.payload)
    switch(action.type) {
      case 'move':
        return {...state, ...{ pos: {
          x: action.payload.clientX,
          y: action.payload.clientY,
        } } }
      case 'press':
        return {...state, ...{ listening: true } }
      case 'release':
        return {...state, ...{ listening: false } }
      default:
        throw new Error(`Unknown Type: ${action.type}`)
    }
  }
  const initialState = {}
  const [state, dispatch] = useReducer(reducer, initialState)
  const onMouseMove = (evt) => {
    if(state.listening) {
      dispatch({ type: 'move', payload: evt })
    }
  }
  const onMouseUp = (evt) => {
    dispatch({ type: 'release', payload: evt })
  }

  const BgImage = ({ x = 0, y = 0, image, name }) => (
    <g className='bg' transform={`translate(${x}, ${y})`}>
      <rect
        x={-r / 8} y={-r / 16}
        width={6 * r / 8} height={6 * r / 8}
        rx={r / 10} ry={r / 10}
      />
      <image xlinkHref={image} width={r / 2} height={r / 2} filter='url(#shadow)'/>
      <text textAnchor='middle' x={2 * r / 8} y={5 * r / 8}>{name}</text>
    </g>
  )

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%" height="100%"
      viewBox={[-r * 1.5, -r * 1.57, 3 * r, 3 * r].join(' ')}
      version="1.1"
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      <defs>
        <filter id="shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="8"/>
          <feOffset dx="0" dy="5" result="offsetblur"/>
          <feFlood flood-color="black"/>
          <feComposite in2="offsetblur" operator="in"/>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <linearGradient id='RW'>
          <stop offset='5%' stopColor='white'/>
          <stop offset='95%' stopColor='red'/>
        </linearGradient>
        <linearGradient id='WB'>
          <stop offset='5%' stopColor='white'/>
          <stop offset='95%' stopColor='black'/>
        </linearGradient>
        {/* horizontal lines require gradientUnits="userSpaceOnUse" */}
        <linearGradient id='BG' gradientUnits="userSpaceOnUse"
          x1={p3.x} y1={p3.y} x2={p4.x} y2={p4.y}
        >
          <stop offset='5%' stopColor='black'/>
          <stop offset='95%' stopColor='green'/>
        </linearGradient>
        <linearGradient id='GU'>
          <stop offset='0%' stopColor='blue'/>
          <stop offset='100%' stopColor='green'/>
        </linearGradient>
        <linearGradient id='UR'>
          <stop offset='0%' stopColor='blue'/>
          <stop offset='100%' stopColor='red'/>
        </linearGradient>
        <path id='head' d="M 0 0 L 10 5 L 0 10 z"/>
        {
          Object.entries({
            w: 'white', u: 'blue',
            b: 'black', g: 'green',
            r: 'red'
          })
          .map(([sym, color]) => (
            <marker id={`${sym}arrow`} key={color}
              viewBox="0 0 10 10" refX="5" refY="5"
              markerWidth="6" markerHeight="8"
              orient="auto-start-reverse"
            >
              <use href='#head' fill={color}/>
          </marker>
          ))
        }
      </defs>
      <title>Magic: The Gathering Five Color Personality Slider</title>
      {/* This is a hackish mess. The math wouldn't work out… */}
      <BgImage
        x={r * Math.cos(Math.PI / 5) - 250}
        y={r * Math.sin(Math.PI / 5) + 75}
        image={Ambition} name='Ambition'
      />
      <BgImage
        x={r * Math.cos(3 * Math.PI / 5) + 600}
        y={r * -Math.sin(3 * Math.PI / 5) + 150}
        image={Chaos} name='Chaos'
      />
      <BgImage
        x={0 - 125} y={-r - 250}
        image={Balance} name='Balance'
      />
      <BgImage
        x={r * Math.cos(3 * Math.PI / 5) - 525}
        y={r * -Math.sin(3 * Math.PI / 5) + 125}
        image={Justice} name='Justice'
      />
      <BgImage
        x={r * -Math.cos(Math.PI / 5) - 25}
        y={r * Math.sin(2 * Math.PI / 5) - 100}
        image={Wisdom} name='Wisdom'
      />
      <g transform='rotate(-18)'>
        <Handle {...{ dispatch, pos: state.pos, p1, p2 }} sarr='#rarrow' earr='#warrow' stroke='#RW'/>
        <Handle {...{ dispatch, pos: state.pos, p1: p2, p2: p3 }} sarr='#warrow' earr='#barrow' stroke='#WB'/>
        <Handle {...{ dispatch, pos: state.pos, p1: p3, p2: p4 }} sarr='#barrow' earr='#garrow' stroke='#BG'/>
        <Handle {...{ dispatch, pos: state.pos, p1: p4, p2: p5 }} sarr='#garrow' earr='#uarrow' stroke='#GU'/>
        <Handle {...{ dispatch, pos: state.pos, p1: p5, p2: p1 }} sarr='#uarrow' earr='#rarrow' stroke='#UR'/>
      </g>
   </svg>
  )
}
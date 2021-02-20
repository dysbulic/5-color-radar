import { useState, useReducer } from 'react'
import Handle from './Handle'
import Ambition from './icons/ambition.svg'
import Balance from './icons/balance.svg'
import Chaos from './icons/chaos.svg'
import Justice from './icons/justice.svg'
import Wisdom from './icons/wisdom.svg'
import './Sliders.scss'

const toRad = (deg) => deg * Math.PI / 180
const toDeg = (rad) => rad * 180 / Math.PI

// draw a five pointed star inscribed in a circle
export default () => {
  const r = 500 // the radius of the circle
  // the length of the star's sides
  const l = r * Math.sin(4 * Math.PI / 5) / Math.sin(Math.PI / 10)
 
  const BgImage = ({ x = 0, y = 0, image, name }) => (
    <g className='bg' transform={`translate(${x - (r / 4)}, ${y - (r / 4)})`}>
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
      viewBox={[-r * 1.6, -r * 1.6, 3.2 * r, 3.15 * r].join(' ')}
      version="1.1"
      //onMouseMove={onMouseMove}
      //onMouseUp={onMouseUp}
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
        <linearGradient id='BG' gradientUnits="userSpaceOnUse">
          <stop offset='5%' stopColor='black'/>
          <stop offset='95%' stopColor='green'/>
        </linearGradient>
        <linearGradient id='GU'>
          <stop offset='5%' stopColor='blue'/>
          <stop offset='95%' stopColor='green'/>
        </linearGradient>
        <linearGradient id='UR'>
          <stop offset='5%' stopColor='blue'/>
          <stop offset='95%' stopColor='red'/>
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
      <BgImage
        x={(r * Math.sin(Math.PI / 5)) / Math.sin(Math.PI / 2) + r / 4}
        y={(r * Math.sin(3 * Math.PI / 10)) / Math.sin(Math.PI / 2) + r / 4}
        image={Ambition} name='Ambition'
      />
      <BgImage
        x={r * Math.sin(2 * Math.PI / 5) / Math.sin(Math.PI / 2) + r / 4}
        y={-(r * Math.sin(Math.PI / 10) / Math.sin(Math.PI / 2) + r / 4)}
        image={Chaos} name='Chaos'
      />
      <BgImage
        x={0} y={-(r + r / 4)}
        image={Balance} name='Balance'
      />
      <BgImage
        x={-(r * Math.sin(2 * Math.PI / 5) / Math.sin(Math.PI / 2) + r / 4)}
        y={-(r * Math.sin(Math.PI / 10) / Math.sin(Math.PI / 2) + r / 4)}
        image={Justice} name='Justice'
      />
      <BgImage
        x={-(r * Math.sin(Math.PI / 5) / Math.sin(Math.PI / 2) + r / 4)}
        y={(r * Math.sin(3 * Math.PI / 10)) / Math.sin(Math.PI / 2) + r / 4}
        image={Wisdom} name='Wisdom'
      />
      {/*
      <g transform={`
        translate(${r * Math.sin(Math.PI / 5) / Math.sin(Math.PI / 2) + r / 4}, 0)
        rotate(${(3 * Math.PI / 10) * 180 / Math.PI})
      `}>
      */}
      <g transform={`translate(0, ${r / 8})`}>
      <circle r={r} stroke='red' fill='none' strokeWidth={3}/>
      <g transform={`
        translate(0, -${Math.sqrt(Math.abs((l / 2) ** 2 - r ** 2))})
        rotate(${toDeg(4 * Math.PI / 10)} 0 ${Math.sqrt(Math.abs((l / 2) ** 2 - r ** 2))})
      `}>
        <line x1={-l / 2} y1={0} x2={l / 2} y2={0} stroke='black'/>
      </g>
      <g transform={`
        translate(0, -${Math.sqrt(Math.abs((l / 2) ** 2 - r ** 2))})
        rotate(-${toDeg(4 * Math.PI / 10)} 0 ${Math.sqrt(Math.abs((l / 2) ** 2 - r ** 2))})
      `}>
        <line x1={-l / 2} y1={0} x2={l / 2} y2={0} stroke='black'/>
      </g>
      <g transform={`
        translate(0, -${Math.sqrt(Math.abs((l / 2) ** 2 - r ** 2))})
      `}>
        <line x1={-l / 2} y1={0} x2={l / 2} y2={0} stroke='black'/>
      </g>
      <g transform={`
        translate(0, -${Math.sqrt(Math.abs((l / 2) ** 2 - r ** 2))})
        rotate(-${toDeg(8 * Math.PI / 10)} 0 ${Math.sqrt(Math.abs((l / 2) ** 2 - r ** 2))})
      `}>
        <line x1={-l / 2} y1={0} x2={l / 2} y2={0} stroke='black'/>
      </g>
      <g transform={`
        translate(0, -${Math.sqrt(Math.abs((l / 2) ** 2 - r ** 2))})
        rotate(${toDeg(8 * Math.PI / 10)} 0 ${Math.sqrt(Math.abs((l / 2) ** 2 - r ** 2))})
      `}>
        <line x1={-l / 2} y1={0} x2={l / 2} y2={0} stroke='black'/>
      </g>
      </g>
      {/*
        <Handle {...{ dispatch, pos: state.pos, p1, p2 }} sarr='#rarrow' earr='#warrow' stroke='#RW'/>
        <Handle {...{ dispatch, pos: state.pos, p1: p2, p2: p3 }} sarr='#warrow' earr='#barrow' stroke='#WB'/>
        <Handle {...{ dispatch, pos: state.pos, p1: p3, p2: p4 }} sarr='#barrow' earr='#garrow' stroke='#BG'/>
        <Handle {...{ dispatch, pos: state.pos, p1: p4, p2: p5 }} sarr='#garrow' earr='#uarrow' stroke='#GU'/>
        <Handle {...{ dispatch, pos: state.pos, p1: p5, p2: p1 }} sarr='#uarrow' earr='#rarrow' stroke='#UR'/>
      */}
    </svg>
  )
}
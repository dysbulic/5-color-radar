import './Combos.scss'

export default () => (
  <svg version="1.1" viewBox="0 0 164.02 159.17" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <circle id="target" r="5%">
        <animate attributeType="XML" attributeName="r" 
          dur="1s" repeatCount="indefinite" 
          from="6%" to=".5%"/>
        <animate attributeType="CSS" attributeName="stroke-width" 
          calcMode="paced" dur="1s"
          from="2" to="0.5" repeatCount="indefinite"/>
        <animate attributeType="CSS" attributeName="stroke" 
          dur="1s" from="red" to="orange" repeatCount="indefinite"/>
        <animate attributeType="CSS" attributeName="opacity" 
          calcMode="paced" dur="1s"
          from="0" to="1" repeatCount="indefinite"/>
      </circle>
    </defs>
    <title>MTG Five Color Combinations</title>
    <g id='circles' transform="translate(-22.216 -55.357)">
      <path d="m126.23 84.316a61.793 61.793 0 0 1 35.788 79.694 61.793 61.793 0 0 1-79.672 35.838 61.793 61.793 0 0 1-35.888-79.649 61.793 61.793 0 0 1 79.626-35.938"/>
      <path d="m119 103.75a41.06 41.06 0 0 1 23.78 52.955 41.06 41.06 0 0 1-52.94 23.813 41.06 41.06 0 0 1-23.846-52.925 41.06 41.06 0 0 1 52.91-23.88"/>
      <path d="m111.59 122.82a20.336 20.336 0 0 1 11.778 26.227 20.336 20.336 0 0 1-26.22 11.794 20.336 20.336 0 0 1-11.811-26.212 20.336 20.336 0 0 1 26.205-11.827"/>
    </g>
    <g transform="translate(-22.216 -55.357)">
      <g>
        <rect className='blue bar' transform="matrix(-.93819 .34613 .34613 .93819 0 0)" x="-27.982" y="168.69" width="43.49" height="1.3198"/>
        <rect className='red bar' transform="matrix(-.57907 .81528 .81528 .57907 0 0)" x="-8.3933" y="166.51" width="43.49" height="1.3198"/>
        <rect className='black bar' transform="rotate(55.035)" x="112.9" y="-4.719" width="43.49" height="1.3198"/>
        <rect className='white bar' transform="rotate(90.107)" x="161.62" y="-105.2" width="43.49" height="1.3198"/>
        <rect className='green bar' transform="rotate(20.251)" x="167.63" y="96.578" width="43.49" height="1.3198"/>
        <rect className='blue bar' transform="matrix(-.93819 .34613 .34613 .93819 0 0)" x="-134.18" y="169.24" width="43.49" height="1.3198"/>
        <rect className='red bar' transform="matrix(-.57907 .81528 .81528 .57907 0 0)" x="96.601" y="167.17" width="43.49" height="1.3198"/>
        <rect className='black bar' transform="rotate(55.035)" x="215.77" y="-4.6557" width="43.49" height="1.3198"/>
        <rect className='green bar' transform="rotate(20.251)" x="63.553" y="96.965" width="43.49" height="1.3198"/>
        <rect className='white bar' transform="rotate(90.107)" x="58.829" y="-105.16" width="43.49" height="1.3198"/>
      </g>
      <g className='partition' id='WUBRG'>
        <g transform="translate(-.75238 9.3577)"><g className='handle'>
          <path className='red' d="m105.26 137.21a4.5883 4.5883 0 0 1-4.295-3.0248l4.3137-1.5635z"/>
          <path className='black' d="m109.6 134.2a4.5883 4.5883 0 0 1-4.2979 3.0086l-0.01-4.5883z"/>
          <path className='blue' transform="rotate(-69.691)" d="m-83.428 145.93a4.5883 4.5883 0 0 1-4.4317 3.4371l-0.0098-4.5883z"/>
          <path className='green' transform="rotate(140.34)" d="m7.9105-167.74a4.5883 4.5883 0 0 1-4.6592 2.9951l0.35144-4.5748z"/>
          <path className='white' transform="rotate(214.41)" d="m-157.52-48.348a4.5883 4.5883 0 0 1-4.2979 3.0085l-0.01-4.5883z"/>
        </g></g>
        <text><tspan x="104.52714" y="149.84612" text-anchor="middle">WUBRG</tspan></text>
      </g>
      <g className='partition pulse' id='Aggression'>
        <g transform="translate(-2.2915 1.5732)">
          <path className='red' d="m89.116 151.8a4.5883 4.5883 0 0 1-5.8731-2.7517l4.3137-1.5635z"/>
          <path className='black' transform="rotate(-38.484)" d="m-18.89 171.42a4.5883 4.5883 0 0 1-5.886 2.7286l1.5782-4.3084z"/>
          <path className='green' transform="rotate(140.34)" d="m31.038-167.88a4.5883 4.5883 0 0 1-5.8751 2.7326l1.5673-4.3123z"/>
          <path className='white' transform="rotate(230.85)" d="m-165.38-23.648a4.5883 4.5883 0 0 1-5.6774 2.7994l1.3696-4.3791z"/>
        </g>
        <text><tspan x="88.826691" y="157.08694" text-anchor="end">Aggression</tspan></text>
      </g>
      <g className='partition' id='Altruism'>
        <g transform="matrix(-.64542 .76383 .76383 .64542 44.502 -44.454) rotate(4.0434 112.45 301.65)">
          <path className='red' d="m89.116 151.8a4.5883 4.5883 0 0 1-5.8731-2.7517l4.3137-1.5635z"/>
          <path className='blue' transform="rotate(-38.484)" d="m-18.837 171.27a4.5883 4.5883 0 0 1-2.2939 2.73 4.5883 4.5883 0 0 1-3.556 0.26302l1.4662-4.3478z"/>
          <path className='white' transform="rotate(140.34)" d="m31.038-167.88a4.5883 4.5883 0 0 1-5.8751 2.7326l1.5673-4.3123z"/>
          <path className='green' transform="rotate(230.85)" d="m-165.38-23.648a4.5883 4.5883 0 0 1-5.6774 2.7994l1.3696-4.3791z"/>
        </g>
        <text><tspan x="94.016281" y="132.82716" text-anchor="middle">Altruism</tspan></text>
      </g>
      <g className='partition' id='Growth'>
        <g transform="rotate(141.57 111.1 138.72) rotate(4.0434 112.45 301.65)">
          <path className='white' d="m89.116 151.8a4.5883 4.5883 0 0 1-5.8731-2.7517l4.3137-1.5635z"/>
          <path className='green' transform="rotate(-38.484)" d="m-18.837 171.27a4.5883 4.5883 0 0 1-2.2939 2.73 4.5883 4.5883 0 0 1-3.556 0.26302l1.4662-4.3478z"/>
          <path className='blue' transform="rotate(140.34)" d="m31.038-167.88a4.5883 4.5883 0 0 1-5.8751 2.7326l1.5673-4.3123z"/>
          <path className='black' transform="rotate(230.85)" d="m-165.38-23.648a4.5883 4.5883 0 0 1-5.6774 2.7994l1.3696-4.3791z"/>
        </g>
        <text><tspan x="115.37243" y="132.5842" text-anchor="middle">Growth</tspan></text>
      </g>
      <g className='partition' id='Artifice'>
        <g transform="rotate(217.22 111.57 143.42) rotate(4.0434 112.45 301.65)">
          <path className='blue' d="m89.116 151.8a4.5883 4.5883 0 0 1-5.8731-2.7517l4.3137-1.5635z"/>
          <path className='red' transform="rotate(-38.484)" d="m-18.837 171.27a4.5883 4.5883 0 0 1-2.2939 2.73 4.5883 4.5883 0 0 1-3.556 0.26302l1.4662-4.3478z"/>
          <path className='black' transform="rotate(140.34)" d="m31.038-167.88a4.5883 4.5883 0 0 1-5.8751 2.7326l1.5673-4.3123z"/>
          <path className='white' transform="rotate(230.85)" d="m-165.38-23.648a4.5883 4.5883 0 0 1-5.6774 2.7994l1.3696-4.3791z"/>
        </g>
        <text><tspan x="126.24714" y="156.67242" text-anchor="middle">Artifice</tspan></text>
      </g>
      <g className='partition' id='Chaos'>
        <g transform="rotate(196.95 107.26 152.42) rotate(4.0434 112.45 301.65)">
          <g transform="translate(8.2708 -4.8021)">
            <path className='green' d="m89.116 151.8a4.5883 4.5883 0 0 1-5.8731-2.7517l4.3137-1.5635z"/>
            <path className='blue' transform="rotate(-38.484)" d="m-18.837 171.27a4.5883 4.5883 0 0 1-2.2939 2.73 4.5883 4.5883 0 0 1-3.556 0.26302l1.4662-4.3478z"/>
            <path className='black' transform="rotate(140.34)" d="m31.038-167.88a4.5883 4.5883 0 0 1-5.8751 2.7326l1.5673-4.3123z"/>
            <path className='red' transform="rotate(230.85)" d="m-165.38-23.648a4.5883 4.5883 0 0 1-5.6774 2.7994l1.3696-4.3791z"/>
          </g>
        </g>
        <text><tspan x="111.35828" y="169.47418" text-anchor="middle">Chaos</tspan></text>
      </g>
      <g className='partition' id='Esper'>
        <g transform="rotate(141.57 123.78 144.87) rotate(4.0434 112.45 301.65)">
          <path className='black' transform="rotate(33.468)" d="m157.82 77.772a4.5883 4.5883 0 0 1-4.2998 1.4893 4.5883 4.5883 0 0 1-3.4679-2.9462l4.3137-1.5635z"/>
          <path className='blue' transform="rotate(-38.484)" d="m-18.659 169.42a4.5883 4.5883 0 0 1-1.8634 4.2103 4.5883 4.5883 0 0 1-4.5798 0.47306l1.8821-4.1845z"/>
          <path className='white' transform="rotate(230.85)" d="m-166.04-28.017a4.5883 4.5883 0 0 1 0.5745 4.5948 4.5883 4.5883 0 0 1-3.7215 2.7554l-0.49646-4.5614z"/>
        </g>
        <text><tspan x="139.82114" y="136.28549" text-anchor="middle">Esper</tspan></text>
      </g>
      <g className='partition' id='Sultai'>
        <g transform="rotate(-58.809 129.64 111.85) rotate(4.0434 112.45 301.65)">
          <path className='black' transform="rotate(33.468)" d="m157.82 77.772a4.5883 4.5883 0 0 1-4.2998 1.4893 4.5883 4.5883 0 0 1-3.4679-2.9462l4.3137-1.5635z"/>
          <path className='blue' transform="rotate(-38.484)" d="m-18.659 169.42a4.5883 4.5883 0 0 1-1.8634 4.2103 4.5883 4.5883 0 0 1-4.5798 0.47306l1.8821-4.1845z"/>
          <path className='green' transform="rotate(230.85)" d="m-166.04-28.017a4.5883 4.5883 0 0 1 0.5745 4.5948 4.5883 4.5883 0 0 1-3.7215 2.7554l-0.49646-4.5614z"/>
        </g>
        <text><tspan x="145.07784" y="164.37773" text-anchor="middle">Sultai</tspan></text>
      </g>
      <g className='partition' id='Jund'>
        <g transform="rotate(-72.679 109.77 172.89) rotate(4.0434 112.45 301.65)">
          <path className='black' transform="rotate(33.468)" d="m157.82 77.772a4.5883 4.5883 0 0 1-4.2998 1.4893 4.5883 4.5883 0 0 1-3.4679-2.9462l4.3137-1.5635z"/>
          <path className='red' transform="rotate(-38.484)" d="m-18.659 169.42a4.5883 4.5883 0 0 1-1.8634 4.2103 4.5883 4.5883 0 0 1-4.5798 0.47306l1.8821-4.1845z"/>
          <path className='green' transform="rotate(230.85)" d="m-166.04-28.017a4.5883 4.5883 0 0 1 0.5745 4.5948 4.5883 4.5883 0 0 1-3.7215 2.7554l-0.49646-4.5614z"/>
        </g>
        <text><tspan x="82.65567" y="183.77724" text-anchor="middle">Jund</tspan></text>
      </g>
      <g className='partition' id='Grixis'>
        <g transform="rotate(96.582 99.904 173.95) rotate(4.0434 112.45 301.65)">
          <path className='black' transform="rotate(33.468)" d="m157.82 77.772a4.5883 4.5883 0 0 1-4.2998 1.4893 4.5883 4.5883 0 0 1-3.4679-2.9462l4.3137-1.5635z"/>
          <path className='blue' transform="rotate(-38.484)" d="m-18.659 169.42a4.5883 4.5883 0 0 1-1.8634 4.2103 4.5883 4.5883 0 0 1-4.5798 0.47306l1.8821-4.1845z"/>
          <path className='red' transform="rotate(230.85)" d="m-166.04-28.017a4.5883 4.5883 0 0 1 0.5745 4.5948 4.5883 4.5883 0 0 1-3.7215 2.7554l-0.49646-4.5614z"/>
        </g>
        <text><tspan x="125.85937" y="183.6033" text-anchor="middle">Grixis</tspan></text>
      </g>
      <g className='partition' id='Temur'>
        <g transform="rotate(-37.797 96.898 198.95) rotate(4.0434 112.45 301.65)">
          <path className='red' transform="rotate(33.468)" d="m157.82 77.772a4.5883 4.5883 0 0 1-4.2998 1.4893 4.5883 4.5883 0 0 1-3.4679-2.9462l4.3137-1.5635z"/>
          <path className='blue' transform="rotate(-38.484)" d="m-18.659 169.42a4.5883 4.5883 0 0 1-1.8634 4.2103 4.5883 4.5883 0 0 1-4.5798 0.47306l1.8821-4.1845z"/>
          <path className='green' transform="rotate(230.85)" d="m-166.04-28.017a4.5883 4.5883 0 0 1 0.5745 4.5948 4.5883 4.5883 0 0 1-3.7215 2.7554l-0.49646-4.5614z"/>
        </g>
        <text><tspan x="63.165764" y="164.39967" text-anchor="middle">Temur</tspan></text>
      </g>
      <g className='partition' id='Naya'>
        <g transform="rotate(121.14 87.156 127.95) rotate(4.0434 112.45 301.65)">
          <path className='white' transform="rotate(33.468)" d="m157.82 77.772a4.5883 4.5883 0 0 1-4.2998 1.4893 4.5883 4.5883 0 0 1-3.4679-2.9462l4.3137-1.5635z"/>
          <path className='red' transform="rotate(-38.484)" d="m-18.659 169.42a4.5883 4.5883 0 0 1-1.8634 4.2103 4.5883 4.5883 0 0 1-4.5798 0.47306l1.8821-4.1845z"/>
          <path className='green' transform="rotate(230.85)" d="m-166.04-28.017a4.5883 4.5883 0 0 1 0.5745 4.5948 4.5883 4.5883 0 0 1-3.7215 2.7554l-0.49646-4.5614z"/>
        </g>
        <text><tspan x="72.989021" y="136.0551" text-anchor="end">Naya</tspan></text>
      </g>
      <g className='partition' id='Abzan'>
        <g transform='rotate(-82.349 61.852 131.97)'>
          <path className='black' transform="rotate(33.468)" d="m157.82 77.772a4.5883 4.5883 0 0 1-4.2998 1.4893 4.5883 4.5883 0 0 1-3.4679-2.9462l4.3137-1.5635z"/>
          <path className='white' transform="rotate(-38.484)" d="m-18.659 169.42a4.5883 4.5883 0 0 1-1.8634 4.2103 4.5883 4.5883 0 0 1-4.5798 0.47306l1.8821-4.1845z"/>
          <path className='green' transform="rotate(230.85)" d="m-166.04-28.017a4.5883 4.5883 0 0 1 0.5745 4.5948 4.5883 4.5883 0 0 1-3.7215 2.7554l-0.49646-4.5614z"/>
        </g>
        <text><tspan x="79.214195" y="116.41006" text-anchor="middle">Abzan</tspan></text>
      </g>
      <g className='partition' id='Bant'>
        <g transform="rotate(-48.11 50.939 117.02) rotate(4.0434 112.45 301.65)">
          <path className='white' transform="rotate(33.468)" d="m157.82 77.772a4.5883 4.5883 0 0 1-4.2998 1.4893 4.5883 4.5883 0 0 1-3.4679-2.9462l4.3137-1.5635z"/>
          <path className='green' transform="rotate(-38.484)" d="m-18.659 169.42a4.5883 4.5883 0 0 1-1.8634 4.2103 4.5883 4.5883 0 0 1-4.5798 0.47306l1.8821-4.1845z"/>
          <path className='blue' transform="rotate(230.85)" d="m-166.04-28.017a4.5883 4.5883 0 0 1 0.5745 4.5948 4.5883 4.5883 0 0 1-3.7215 2.7554l-0.49646-4.5614z"/>
        </g>
        <text><tspan x="103.94183" y="108.98739" text-anchor="middle">Bant</tspan></text>
      </g>
      <g className='partition' id='Jeskai'>
        <g transform="matrix(.92202 .38715 .38715 -.92202 -18.084 206.31) rotate(4.0434 112.45 301.65)">
          <g transform="translate(-1.6747 .4394)">
            <path className='white' transform="rotate(33.468)" d="m157.82 77.772a4.5883 4.5883 0 0 1-4.2998 1.4893 4.5883 4.5883 0 0 1-3.4679-2.9462l4.3137-1.5635z"/>
            <path className='blue' transform="rotate(-38.484)" d="m-18.659 169.42a4.5883 4.5883 0 0 1-1.8634 4.2103 4.5883 4.5883 0 0 1-4.5798 0.47306l1.8821-4.1845z"/>
            <path className='red' transform="rotate(230.85)" d="m-166.04-28.017a4.5883 4.5883 0 0 1 0.5745 4.5948 4.5883 4.5883 0 0 1-3.7215 2.7554l-0.49646-4.5614z"/>
          </g>
        </g>
        <text><tspan x="129.69531" y="116.34969" text-anchor="middle">Jeskai</tspan></text>
      </g>
      <g className='partition' id='Mardu'>
        <g transform="rotate(130.11 92.762 165.99) rotate(4.0434 112.45 301.65)">
          <path className='white' transform="rotate(33.468)" d="m157.82 77.772a4.5883 4.5883 0 0 1-4.2998 1.4893 4.5883 4.5883 0 0 1-3.4679-2.9462l4.3137-1.5635z"/>
          <path className='red' transform="rotate(-38.484)" d="m-18.659 169.42a4.5883 4.5883 0 0 1-1.8634 4.2103 4.5883 4.5883 0 0 1-4.5798 0.47306l1.8821-4.1845z"/>
          <path className='black' transform="rotate(230.85)" d="m-166.04-28.017a4.5883 4.5883 0 0 1 0.5745 4.5948 4.5883 4.5883 0 0 1-3.7215 2.7554l-0.49646-4.5614z"/>
        </g>
        <text><tspan x="111.05529" y="190.504" text-anchor="middle">Mardu</tspan></text>
      </g>
      <g className='partition' id='Azorius'>
        <g transform="matrix(.94702 .32117 .32117 -.94702 9.4846 203.42)">
          <path className='white' transform="rotate(33.468)" d="m157.82 77.772a4.5883 4.5883 0 0 1-6.432 0.47023 4.5883 4.5883 0 0 1-0.54859-6.4258l3.5266 2.9352z"/>
          <path className='blue' transform="rotate(-38.484)" d="m-21.502 165.66a4.5883 4.5883 0 0 1 2.8325 3.6744 4.5883 4.5883 0 0 1-1.821 4.2671 4.5883 4.5883 0 0 1-4.6127 0.49717l1.8821-4.1845z"/>
        </g>
        <text><tspan x="141.59886" y="99.746872" text-anchor="middle">Azorius</tspan></text>
      </g>
      <g className='partition' id='Simic'>
        <g transform="matrix(.96486 -.26276 -.26276 -.96486 58.623 246.09)">
          <path className='blue' transform="rotate(33.468)" d="m157.82 77.772a4.5883 4.5883 0 0 1-6.432 0.47023 4.5883 4.5883 0 0 1-0.54859-6.4258l3.5266 2.9352z"/>
          <path className='green' transform="rotate(-38.484)" d="m-21.502 165.66a4.5883 4.5883 0 0 1 2.8325 3.6744 4.5883 4.5883 0 0 1-1.821 4.2671 4.5883 4.5883 0 0 1-4.6127 0.49717l1.8821-4.1845z"/>
        </g>
        <text><tspan x="109.75101" y="87.734589" text-anchor="middle">Simic</tspan></text>
      </g>
      <g className='partition' id='Selesnya'>
        <g>
          <path className='white' transform="matrix(-.093379 .99563 .99563 .093379 0 0)" d="m88.404 80.425a4.5883 4.5883 0 0 1-6.432 0.47023 4.5883 4.5883 0 0 1-0.54859-6.4258l3.5266 2.9352z"/>
          <path className='green' transform="matrix(-.97557 .21968 .21968 .97557 0 0)" d="m-45.53 100.49a4.5883 4.5883 0 0 1 2.8325 3.6744 4.5883 4.5883 0 0 1-1.821 4.2671 4.5883 4.5883 0 0 1-4.6127 0.49718l1.8821-4.1845z"/>
        </g>
        <text><tspan x="66.688622" y="101.44799" text-anchor="middle">Selesnya</tspan></text>
      </g>
      <g className='partition' id='Boros'>
        <g>
          <path className='white' transform="matrix(.50201 .86486 .86486 -.50201 0 0)" d="m131.5-17.406a4.5883 4.5883 0 0 1-6.432 0.47023 4.5883 4.5883 0 0 1-0.54859-6.4258l3.5266 2.9352z"/>
          <path className='red' transform="matrix(-.66678 .74525 .74525 .66678 0 0)" d="m60.84 111.15a4.5883 4.5883 0 0 1 2.8325 3.6744 4.5883 4.5883 0 0 1-1.821 4.2671 4.5883 4.5883 0 0 1-4.6127 0.49718l1.8821-4.1845z"/>
        </g>
        <text><tspan x="49.726765" y="129.3829" text-anchor="middle">Boros</tspan></text>
      </g>
      <g className='partition' id='Gruul'>
        <g>
          <path className='green' transform="matrix(.93672 .35007 .35007 -.93672 0 0)" d="m104.12-133.7a4.5883 4.5883 0 0 1-6.432 0.47022 4.5883 4.5883 0 0 1-0.54859-6.4258l3.5266 2.9352z"/>
          <path className='red' transform="matrix(-.042637 .99909 .99909 .042637 0 0)" d="m162.93 49.092a4.5883 4.5883 0 0 1 2.8325 3.6744 4.5883 4.5883 0 0 1-1.821 4.2671 4.5883 4.5883 0 0 1-4.6127 0.49718l1.8821-4.1845z"/>
        </g>
        <text><tspan x="44.100929" y="171.7877" text-anchor="middle">Gruul</tspan></text>
      </g>
      <g className='partition' id='Rakdos'>
        <g transform="matrix(.92202 .38715 .38715 -.92202 -6.161 189.42)">
          <path className='black' transform="rotate(252.65)" d="m-56.753 96.652a4.5883 4.5883 0 0 1-6.432 0.47023 4.5883 4.5883 0 0 1-0.54859-6.4258l3.5266 2.9352z"/>
          <path className='red' transform="rotate(180.7)" d="m-105.93-32.501a4.5883 4.5883 0 0 1 2.8325 3.6744 4.5883 4.5883 0 0 1-1.821 4.2671 4.5883 4.5883 0 0 1-4.6127 0.49718l1.8821-4.1845z"/>
        </g>
        <text><tspan x="104.40408" y="211.60379" text-anchor="middle">Rakdos</tspan></text>
      </g>
      <g className='partition' id='Izzet'>
        <g transform="matrix(.92202 .38715 .38715 -.92202 -6.161 189.42)">
          <path className='blue' transform="rotate(106.27)" d="m16.873-142.15a4.5883 4.5883 0 0 1-6.432 0.47023 4.5883 4.5883 0 0 1-0.54859-6.4258l3.5266 2.9352z"/>
          <path className='red' transform="rotate(34.322)" d="m143.93-36.482a4.5883 4.5883 0 0 1 2.8325 3.6744 4.5883 4.5883 0 0 1-1.821 4.2671 4.5883 4.5883 0 0 1-4.6127 0.49718l1.8821-4.1845z"/>
        </g>
        <text><tspan x="137.68175" y="200.42857" text-anchor="middle">Izzet</tspan></text>
      </g>
      <g className='partition' id='Golgari'>
        <g transform="matrix(.92202 .38715 .38715 -.92202 -6.161 189.42)">
          <path className='black' transform="rotate(217.21)" d="m-68.437 25.024a4.5883 4.5883 0 0 1-6.432 0.47023 4.5883 4.5883 0 0 1-0.54859-6.4258l3.5266 2.9352z"/>
          <path className='green' transform="rotate(145.25)" d="m-41.447-65.802a4.5883 4.5883 0 0 1 2.8325 3.6744 4.5883 4.5883 0 0 1-1.821 4.2671 4.5883 4.5883 0 0 1-4.6127 0.49718l1.8821-4.1845z"/>
        </g>
        <text><tspan x="71.357056" y="200.75182" text-anchor="middle">Golgari</tspan></text>
      </g>
      <g className='partition' id='Dimir'>
        <g transform="matrix(.083185 -.99653 -.99653 -.083185 301.64 263.01)">
          <path className='black' transform="rotate(33.468)" d="m157.82 77.772a4.5883 4.5883 0 0 1-6.432 0.47023 4.5883 4.5883 0 0 1-0.54859-6.4258l3.5266 2.9352z"/>
          <path className='blue' transform="rotate(-38.484)" d="m-21.502 165.66a4.5883 4.5883 0 0 1 2.8325 3.6744 4.5883 4.5883 0 0 1-1.821 4.2671 4.5883 4.5883 0 0 1-4.6127 0.49717l1.8821-4.1845z"/>
        </g>
        <text><tspan x="163.48483" y="171.2668" text-anchor="middle">Dimir</tspan></text>
      </g>
      <g className='partition' id='Orzhov'>
        <g transform="matrix(-.58943 -.80782 -.80782 .58943 333.01 104.92)">
          <path className='white' transform="rotate(33.468)" d="m157.82 77.772a4.5883 4.5883 0 0 1-6.432 0.47023 4.5883 4.5883 0 0 1-0.54859-6.4258l3.5266 2.9352z"/>
          <path className='black' transform="rotate(-38.484)" d="m-21.502 165.66a4.5883 4.5883 0 0 1 2.8325 3.6744 4.5883 4.5883 0 0 1-1.821 4.2671 4.5883 4.5883 0 0 1-4.6127 0.49717l1.8821-4.1845z"/>
        </g>
        <text><tspan x="158.04478" y="129.43413" text-anchor="middle">Orzhov</tspan></text>
      </g>
      <g className='partition' id='Green'>
        <g>
          <path className='green' d="m29.01 109.91a4.7495 4.7495 0 0 1 2.6261 6.1785 4.7495 4.7495 0 0 1-6.1759 2.6323 4.7495 4.7495 0 0 1-2.6386-6.1732 4.7495 4.7495 0 0 1 6.1705-2.6448"/>
        </g>
        <text><tspan x="26.594273" y="122.32647" text-anchor="middle">Green</tspan></text>
      </g>
      <g className='partition' id='Red'>
        <g>
          <path className='red' d="m59.322 205.24a4.7495 4.7495 0 0 1 2.6261 6.1785 4.7495 4.7495 0 0 1-6.1759 2.6323 4.7495 4.7495 0 0 1-2.6386-6.1732 4.7495 4.7495 0 0 1 6.1705-2.6448"/>
        </g>
        <text><tspan x="65.481499" y="212.30121" text-anchor="middle">Red</tspan></text>
      </g>
      <g className='partition' id='Black'>
        <g>
          <path className='black' d="m153.36 205a4.7495 4.7495 0 0 1 2.6261 6.1786 4.7495 4.7495 0 0 1-6.1759 2.6323 4.7495 4.7495 0 0 1-2.6386-6.1732 4.7495 4.7495 0 0 1 6.1706-2.6448"/>
        </g>
        <text><tspan x="144.78781" y="210.83403" text-anchor="end">Black</tspan></text>
      </g>
      <g className='partition' id='Blue'>
        <g>
          <path className='blue' d="m183.13 109.73a4.7495 4.7495 0 0 1 2.6261 6.1785 4.7495 4.7495 0 0 1-6.1759 2.6323 4.7495 4.7495 0 0 1-2.6386-6.1732 4.7495 4.7495 0 0 1 6.1705-2.6448"/>
        </g>
        <text><tspan x="181.51454" y="122.67811" text-anchor="middle">Blue</tspan></text>
      </g>
      <g className='partition' id='White'>
        <g>
          <path className='white' d="m106.14 55.836a4.7495 4.7495 0 0 1 2.6261 6.1785 4.7495 4.7495 0 0 1-6.1759 2.6323 4.7495 4.7495 0 0 1-2.6386-6.1732 4.7495 4.7495 0 0 1 6.1705-2.6448"/>
        </g>
        <text><tspan x="106.52623" y="67.853714" text-anchor="start">White</tspan></text>
      </g>
    </g>
  </svg>
)
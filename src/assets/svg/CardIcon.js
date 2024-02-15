import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function CardIcon(props) {
  return (
    <Svg
      width={22}
      height={20}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_6_810)">
        <Path
          d="M0 3.564a2.376 2.376 0 012.372-2.376h16.606a2.376 2.376 0 012.372 2.376v11.879a2.376 2.376 0 01-2.372 2.376H2.372A2.376 2.376 0 010 15.443V3.563zm4.151 7.127a.595.595 0 00-.593.594c0 .327.267.594.593.594H17.2a.595.595 0 00.593-.594.595.595 0 00-.593-.594H4.15zm-.593 2.97c0 .327.267.594.593.594h2.373a.595.595 0 000-1.188H4.15a.595.595 0 00-.593.594zm4.745 0c0 .327.267.594.593.594h4.744a.595.595 0 000-1.188H8.896a.595.595 0 00-.593.594zm6.82-10.097a.888.888 0 00-.89.89v1.783c0 .493.397.89.89.89h2.965c.493 0 .89-.397.89-.89V4.455a.888.888 0 00-.89-.891h-2.965z"
          fill={props.color}

        />
      </G>
      <Defs>
        <ClipPath id="clip0_6_810">
          <Path fill="#fff" d="M0 0H21.35V19.0067H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default CardIcon

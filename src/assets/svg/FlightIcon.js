import * as React from "react"
import Svg, { Path } from "react-native-svg"

function FlightIcon(props) {
  return (
    <Svg
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20.125 8.797a2.537 2.537 0 00-1.938-.897h-2.899l-3.617-6.32a2.444 2.444 0 00-4.075-.36 2.279 2.279 0 00-.308 2.057L8.932 7.9H5.074l-1.2-1.61a2.06 2.06 0 00-1.727-.933A1.76 1.76 0 00.491 7.72l1.59 2.723-1.59 2.723a1.759 1.759 0 001.653 2.364 2.06 2.06 0 001.727-.933l1.203-1.61h3.858l-1.644 4.622a2.278 2.278 0 00.308 2.057 2.445 2.445 0 004.075-.36l3.617-6.32h2.9a2.551 2.551 0 001.937-4.19z"
        fill={props.color}

      />
    </Svg>
  )
}

export default FlightIcon
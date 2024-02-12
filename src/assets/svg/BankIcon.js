import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BankIcon(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.642 7.95a2.161 2.161 0 01.135-2.27 4.172 4.172 0 011.476-1.328L8.888.9a4.577 4.577 0 014.224 0l6.634 3.456a4.171 4.171 0 011.476 1.327 2.16 2.16 0 01.135 2.27A2.4 2.4 0 0119.22 9.23H2.78A2.4 2.4 0 01.642 7.95zm20.089 11.896a1.77 1.77 0 00-1.77-1.77v-6.192a.885.885 0 00-1.769 0v6.192H14.54v-6.192a.885.885 0 00-1.77 0v6.192H9.231v-6.192a.885.885 0 00-1.77 0v6.192H4.809v-6.192a.885.885 0 00-1.77 0v6.192a1.77 1.77 0 00-1.769 1.77.885.885 0 000 1.769h19.462a.885.885 0 000-1.77z"
        fill={props.color}
      />
    </Svg>
  )
}

export default BankIcon
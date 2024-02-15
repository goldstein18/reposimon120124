import * as React from "react"
import Svg, { Path } from "react-native-svg"

function UsersIcon(props) {
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
        d="M6.634 11.5a3.98 3.98 0 110-7.962 3.98 3.98 0 010 7.962zm5.75 9.73H.884A.885.885 0 010 20.345v-.442a6.634 6.634 0 0113.269 0v.442a.884.884 0 01-.885.885zM15.48 7.961a3.98 3.98 0 110-7.96 3.98 3.98 0 010 7.96zM14.223 9.75a6.038 6.038 0 00-4.13 2.504 8.436 8.436 0 014.346 4.554h5.906a.885.885 0 00.885-.884v-.034a6.199 6.199 0 00-7.007-6.14z"
        fill={props.color}

      />
    </Svg>
  )
}

export default UsersIcon

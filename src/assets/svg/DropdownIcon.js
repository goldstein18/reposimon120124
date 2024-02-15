import * as React from "react";
import Svg, { Path } from "react-native-svg";
const DropdownIcon = (props) => (
  <Svg
    width={15}
    height={10}
    viewBox="0 0 15 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6.74966 9.00038C7.1647 9.41542 7.83872 9.41542 8.25376 9.00038L14.6288 2.62538C15.0438 2.21034 15.0438 1.53632 14.6288 1.12128C14.2137 0.706238 13.5397 0.706238 13.1247 1.12128L7.50005 6.74589L1.87544 1.1246C1.4604 0.709558 0.786377 0.709558 0.371338 1.1246C-0.0437012 1.53964 -0.0437012 2.21366 0.371338 2.6287L6.74634 9.0037L6.74966 9.00038Z"
      fill="#9D9D9D"
    />
  </Svg>
);
export default DropdownIcon;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
import theme from "../../utils/theme";
const RadioIcon = (props) => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11.1888 0C5.2661 0 0.459229 4.80687 0.459229 10.7296C0.459229 16.6524 5.2661 21.4592 11.1888 21.4592C17.1116 21.4592 21.9185 16.6524 21.9185 10.7296C21.9185 4.80687 17.1116 0 11.1888 0ZM11.1888 19.3133C6.44635 19.3133 2.60515 15.4721 2.60515 10.7296C2.60515 5.98712 6.44635 2.14592 11.1888 2.14592C15.9313 2.14592 19.7725 5.98712 19.7725 10.7296C19.7725 15.4721 15.9313 19.3133 11.1888 19.3133Z"
      fill={props.checked ? theme.blue : "#9D9D9D"}
    />
  </Svg>
);
export default RadioIcon;

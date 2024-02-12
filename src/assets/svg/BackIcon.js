import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import Svg, { G, Image, Path } from "react-native-svg";
import { TouchableOpacity } from "react-native";

function BackIcon({ props, backScreen }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack(backScreen)}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 28 28"
        style={{
          width: 16,
          height: 16,
        }}
      >
        <G id="Layer_2" data-name="Layer 2">
          <G id="Layer_1-2" data-name="Layer 1">
            <Path d="M28,14.38a3.32,3.32,0,0,1-.62,1.28,2,2,0,0,1-1.32.68H6.34c0,.11.06.11.1.13A4.86,4.86,0,0,1,8,17.78c1.74,2,3.47,4.07,5.22,6.1a2.68,2.68,0,0,1,.62,2.57,1.84,1.84,0,0,1-3,1.09,2.6,2.6,0,0,1-.36-.38Q5.59,21.48.71,15.78a2.63,2.63,0,0,1-.43-3,2.58,2.58,0,0,1,.42-.6L10.5.77a1.83,1.83,0,0,1,3,.06,2.73,2.73,0,0,1,0,3c-.1.14-.22.28-.33.42L8.72,9.41,7.63,10.67a7,7,0,0,1-1.28,1H25.77a2,2,0,0,1,1.79.89A3.49,3.49,0,0,1,28,13.68Z" />
          </G>
        </G>
      </Svg>
    </TouchableOpacity>
  );
}

export default BackIcon;

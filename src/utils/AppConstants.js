import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage as rf } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Octicons from "@expo/vector-icons/Octicons";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
export const dimensionized = { SCREEN_WIDTH, SCREEN_HEIGHT };
export const normalized = { hp, wp };
export const normalizedFont = { rf };
export const AppFonts = {
  commonFont: {
    smallest: rf(1.5),
    small: rf(2),
    mdSmall: rf(1.7),
    medium: rf(2.5),
    large: rf(3),
    extraLarge: rf(5),
    logoFont: rf(6),
  },
};
export const AppIcons = {
  commonIcons: {
    smallest: 18,
    small: 24,
    medium: 25,
    large: 35,
    extraLarge: 30,
  },
};

export const AppColors = {
  primaryColor: {
    darkBlack: "#000000",
    darkWhite: "#FFFFFF",
    skyBlue: "#3dc1c8",
    lightBlack: "#4e637c",
    lightBlack1: "#010022",
    darkGrey: "#8b8b8b",
  },
  secondaryColor: {
    lightBlack: "#182233",
    lightBlack1: "#8e8d9c",
    shadedBlack: "#364257",
    lightWhite: "#C3CBD8",
    placeHolderCol: "#7587A6",
    darkBlue: "#3083FF",
    lightGrey: "#edeef2",
    lightestGrey: "#f7f7f7",
    lightBlue: "#4f637d",
    pink: "#f6c5c5",
    green: "#83d7b7",
    red: "#daaa9c",
    txtgrey: "#838384",
    txtGrey1: "#a0a0ad",
    btnBg: "#edeff2",
    activeFieldBorder: '#B7B7B7'
  },
  radiantColor: {
    darkBlue: "#0551BF",
    white: "#FFFFFF",
    lightBlue: "#CADEFF",
  },
  errorColor: {
    red: "#f44336",
  },
};
export {
  AntDesign,
  Feather,
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
  EvilIcons,
  MaterialCommunityIcons,
  Entypo,
  Octicons,
};

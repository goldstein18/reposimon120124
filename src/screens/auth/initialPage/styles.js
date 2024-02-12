import { StyleSheet, Dimensions } from "react-native";
import { AppColors, normalized, AppFonts } from "../../../utils/AppConstants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primaryColor.lightBlack,
  },
  topHeight: {
    height: normalized.hp("20%"),
  },
  middleHeight: {
    height: normalized.hp("50%"),
    alignItems: "center",
    justifyContent: "center",
  },
  bottomHeight: {
    height: normalized.hp("20%"),
    justifyContent: "center",
  },
  txtName: {
    color: AppColors.primaryColor.darkWhite,
    fontSize: AppFonts.commonFont.logoFont,
    fontWeight: "500",
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default styles;

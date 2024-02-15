import { StyleSheet, Dimensions } from "react-native";
import {
  AppColors,
  normalized,
  dimensionized,
  AppFonts,
} from "../../../utils/AppConstants";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: normalized.hp("100%"),
  },
  wrapTop: {
    // backgroundColor: "red",
    height: normalized.hp("12%"),
    justifyContent: "center",
  },
  wrapMiddle: {
    // backgroundColor: "pink",
    height: normalized.hp("70%"),
  },
  wrapEnd: {
    // backgroundColor: "green",
    height: normalized.hp("18%"),
  },
  setWidth: {
    alignSelf: "center",
    width: normalized.wp("90%"),
  },
  wrapFL: {
    backgroundColor: AppColors.primaryColor.darkWhite,
    width: "100%",
    height: "100%",
    borderRadius: 20,
    paddingHorizontal: normalized.wp("5%"),
    paddingVertical: normalized.hp("2%"),
    // marginTop: normalized.hp("5%"),
  },
  txtAdministra: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.medium,
    fontWeight: "600",
  },
  wrapItemName: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: normalized.hp("2%"),
    backgroundColor: AppColors.primaryColor.darkWhite,
    borderRadius: 20,
  },
  wrapRoundBox: {
    backgroundColor: AppColors.secondaryColor.lightGrey,
    borderRadius: 90,
    width: normalized.wp("15%"),
    height: normalized.wp("15%"),
    alignItems: "center",
    justifyContent: "center",
  },
  wrapImg: {
    width: normalized.wp("7%"),
    height: normalized.wp("7%"),
    alignItems: "center",
    justifyContent: "center",
  },
  innerImg: {
    width: "100%",
    height: "100%",
  },
  nameItem: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.small,
    fontWeight: "400",
    left: normalized.wp("5%"),
  },
});

export default styles;

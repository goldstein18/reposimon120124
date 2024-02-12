import { StyleSheet } from "react-native";
import {
  AppColors,
  AppFonts,
  normalized,
  dimensionized,
} from "../../utils/AppConstants";

const styles = StyleSheet.create({
  wrapItemName: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: normalized.hp("2%"),
    backgroundColor: AppColors.primaryColor.darkWhite,
    borderRadius: 20,
  },
  wrapItemName1: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: normalized.hp("3%"),
    backgroundColor: AppColors.primaryColor.darkWhite,
    borderRadius: 10,
    padding: normalized.wp("3%"),
  },
  nameItem: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.small,
    fontWeight: "400",
    left: normalized.wp("5%"),
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
  wrapBoxHistory: {
    marginTop: normalized.hp("2%"),
  },
  flexRowJustify: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  txtName: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.small,
    fontWeight: "600",
  },
  txtPrice: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.small,
    fontWeight: "400",
  },
  txtAddress: {
    color: AppColors.secondaryColor.lightBlack1,
    fontSize: AppFonts.commonFont.small,
    fontWeight: "400",
  },
  wrapRadiusBox: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#838392",
    margin: normalized.wp("1%"),
    paddingHorizontal: normalized.wp("1%"),
    alignItems: "center",
    width: normalized.wp("38%"),
    height: normalized.hp("6%"),
    justifyContent: "center",
  },
  wrapRadiusBox1: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#838392",
    margin: normalized.wp("1%"),
    paddingHorizontal: normalized.wp("3%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: normalized.wp("38%"),
    height: normalized.hp("6%"),
  },
  txtName1: {
    color: "#838392",
    fontSize: AppFonts.commonFont.mdSmall,
  },
});

export default styles;

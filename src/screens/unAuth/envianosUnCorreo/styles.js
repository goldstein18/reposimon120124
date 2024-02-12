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
    height: normalized.hp("12%"),
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: normalized.hp("1%"),
    // backgroundColor: "red",
  },
  wrapMiddle: {
    // backgroundColor: "pink",
    height: normalized.hp("60%"),
  },
  wrapEnd: {
    // backgroundColor: "green",
    height: normalized.hp("20%"),
  },

  setWidth: {
    alignSelf: "center",
    width: normalized.wp("90%"),
  },
  txtAdministra: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.medium,
    fontWeight: "600",
  },
  txtDino: {
    color: AppColors.secondaryColor.placeHolderCol,
    fontSize: AppFonts.commonFont.small,
    fontWeight: "400",
  },
  txtInp: {
    width: "100%",
    borderWidth: 1,
    marginTop: normalized.hp("1%"),
    height: normalized.hp("25%"),
    borderRadius: 10,
    padding: normalized.wp("2%"),
  },
});

export default styles;

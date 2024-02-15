import { StyleSheet } from "react-native";
import {
  AppColors,
  AppFonts,
  normalized,
  normalizedFont,
} from "../../utils/AppConstants";

const styles = StyleSheet.create({
  largeBtnWrap: {
    borderWidth: 1,
    borderColor: AppColors.secondaryColor.lightBlue,
    borderRadius: 30,
    paddingVertical: normalized.wp("3%"),
    paddingHorizontal: normalized.wp("8%"),
    alignItems: "center",
    justifyContent: "center",
  },
  mediumBtnWrap: {
    borderWidth: 1,
    borderColor: AppColors.secondaryColor.lightBlue,
    borderRadius: 30,
    paddingVertical: normalized.wp("2%"),
    paddingHorizontal: normalized.wp("8%"),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: normalized.wp("43%"),
  },
  initmediumBtnWrap: {
    borderRadius: 30,
    paddingVertical: normalized.wp("3%"),
    paddingHorizontal: normalized.wp("8%"),
    alignItems: "center",
    justifyContent: "center",
    width: normalized.wp("45%"),
  },
  txtTitle: {
    fontSize: AppFonts.commonFont.medium,
    fontWeight: "400",
  },
  txtMedTitle: {
    fontWeight: "400",
    fontSize: normalizedFont.rf(1.7),
  },
  txtInitMedTitle: {
    fontWeight: "400",
    fontSize: AppFonts.commonFont.small,
  },
});

export default styles;

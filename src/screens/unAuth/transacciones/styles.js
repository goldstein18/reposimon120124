import { StyleSheet, Dimensions } from "react-native";
import { AppColors, normalized, AppFonts } from "../../../utils/AppConstants";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: normalized.hp("100%"),
  },
  wrapTop: {
    // backgroundColor: "red",
    height: normalized.hp("8%"),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  wrapTop1: {
    // backgroundColor: "green",
    height: normalized.hp("8%"),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: normalized.wp("2%"),
  },

  wrapMiddle: {
    // backgroundColor: "pink",
    height: normalized.hp("63%"),
  },
  wrapEnd: {
    // backgroundColor: "green",
    height: normalized.hp("21%"),
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
  txtAdministra1: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.medium,
    fontWeight: "600",
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  bottomSheet: {
    width: '100%',
    height: normalized.hp('50%'),
    backgroundColor: AppColors.primaryColor.darkWhite,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28
  },
  actionContainer: {
    width: normalized.wp("90%"),
    alignSelf: 'center',
    marginTop: normalized.hp("5%"),
  },
  heading: {
    color: AppColors.primaryColor.darkBlack,
    textAlign: "center",
    fontSize: AppFonts.commonFont.medium,
    fontWeight: "700",
  },
  title: {
    color: AppColors.primaryColor.darkBlack,
    textAlign: "center",
    fontSize: AppFonts.commonFont.medium,
    fontWeight: "400",
    width: '70%',
    alignSelf: 'center',
    marginTop: normalized.hp("12%"),
  },
  buttonContainer: {
    marginTop: normalized.hp("12%"),
  }
});

export default styles;

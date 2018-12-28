import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

// Used via Metrics.baseMargin
const metrics = {
  marginSmall: 4,
  marginMedium: 8,
  marginMediumX2: 12,
  marginMediumX3: 16,
  marginLarge: 24,
  marginLargeX2: 30,
  paddingTiny: 3,
  paddingSmall: 6,
  paddingMedium: 12,
  doubleSection: 50,
  searchBarHeight: 30,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  tabBarHeight: (width < height ? height : width) / 12,
  navBarHeight: Platform.OS === "ios" ? 64 : 54,
  radiusTiny: 5,
  radiusSmall: 10,
  radiusMedium: 30,
  radiumLarge: 50,
  radiumXLarge: 60,
  radiumFull: 100,
  buttonSmall: 20,
  buttonMedium: 30,
  buttonLarge: 50,
  headerBarHeightIOS: 55,
  headerBarHeightAndroid: 54,
  icons: {
    extiny: 14,
    tiny: 18,
    exsmall: 20,
    ssmall: 23,
    small: 25,
    medium: 30,
    mediumX: 40,
    large: 45,
    xl: 50,
    xxl: 70
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    largeL: 65,
    largeX: 80,
    largeXL: 90,
    largeXX: 110,
    smallLogo: 130,
    logo: 150
  },
  topic: {
    footerImgHeight: (width < height ? height : width) / 5,
    addIconSize: 30
  }
};

export default metrics;

import { Dimensions, Platform, PixelRatio } from "react-native";
import Fonts from "./Fonts";
import Metrics from "./Metrics";
import Colors from "./Colors";

let { width, height } = Dimensions.get("window");
const ApplicationStyles = {
  container: {
    margin: Metrics.marginMedium
  }
};

export default ApplicationStyles;

import nomrmalizeText from "../utils/NormalizeText";

const type = {
  base: "ChalkboardSE-Regular",
  bold: "ChalkboardSE-Bold",
  light: "ChalkboardSE-Light"
};

const size = {
  largeX: nomrmalizeText(20),
  large: nomrmalizeText(18),
  regularX: nomrmalizeText(17),
  regular: nomrmalizeText(16),
  mediumX: nomrmalizeText(15),
  medium: nomrmalizeText(14),
  normal: nomrmalizeText(13),
  small: nomrmalizeText(12),
  tiny: nomrmalizeText(8.5)
};

const style = {
  description: {
    fontFamily: type.base,
    fontSize: size.medium
  },
  title: {
    fontWeight: "bold",
    fontSize: size.large
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: size.medium
  },
  header: {
    fontWeight: "700",
    fontSize: size.regularX
  }
};

export default {
  type,
  size,
  style
};

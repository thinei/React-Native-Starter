import { StyleSheet, Platform, PixelRatio, Dimensions } from "react-native";
import { Metrics, Fonts, Colors, ApplicationStyles } from "../../themes";

let { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    ...ApplicationStyles.screen,

    header: {
        fontSize: 24,
        marginTop: 20,
        marginBottom: 20,
        color: '#FF8C00',
        fontWeight: 'bold',
        textAlign: "center"
    },

    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }


});

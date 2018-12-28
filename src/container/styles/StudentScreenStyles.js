import { StyleSheet, Platform, PixelRatio, Dimensions } from "react-native";
import { Metrics, Fonts, Colors, ApplicationStyles } from "../../themes";

let { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    ...ApplicationStyles.screen,

    container: {
        margin: Metrics.marginMedium
    },

    buttonStyle: {
        flex: 1,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: Colors.secondary
    },
    textStyle: {
        color: Colors.secondary,
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    deleteIconStyle: {
        alignSelf: "center",
        paddingBottom: Metrics.marginSmall,
        marginRight: Metrics.marginSmall,
    },

    noDataViewAlign: {
        alignSelf: "center"
    },
    noDataTextAlign: {
        color: Colors.primary,
        fontSize: Fonts.size.large
    }
});

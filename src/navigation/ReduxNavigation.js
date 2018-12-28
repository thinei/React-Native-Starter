import React from "react";
import { connect } from "react-redux";
import AppNavigation from "./AppNavigation";
import { View } from "react-native";
import NavigationService from "./NavigationService";



class ReduxNavigation extends React.Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <AppNavigation
                    //get access to a navigator through a ref and pass it to the NavigationService
                    ref={navigatorRef => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }}
                />
            </View>
        );
    }


}

export default ReduxNavigation;

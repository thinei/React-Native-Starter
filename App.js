/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Provider } from 'react-redux';
import configureStore from "./src/store/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import NavigationService from './src/navigation/NavigationService';
import AppNavigator from './src/navigation/AppNavigation';
import ReduxNavigation from "./src/navigation/ReduxNavigation";

export default class App extends Component {
  render() {

    const { persistor, store } = configureStore();
    return (

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ReduxNavigation />
        </PersistGate>
      </Provider>


    );
  }

}


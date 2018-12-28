import React from "react";
import { Button, View, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import LoginScreen from '../container/LoginScreen';
import StudentListScreen from '../container/StudentListScreen';
import AddStudentScreen from '../container/AddStudentScreen';
import UpdateStudentScreen from '../container/UpdateStudentScreen';
import NavigationService from '../navigation/NavigationService';
import { Metrics, Colors } from "../themes";
import Ionicon from 'react-native-vector-icons/dist/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';
import reducers from "../reducers";

const MainNavigator = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
            navigationOptions: () => ({
                header: null
            })
        },
        StudentList: {
            screen: StudentListScreen,
            navigationOptions: () => ({
                headerTitle: 'Student',
                headerStyle: {
                    backgroundColor: Colors.primary,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerLeft: null,
                headerRight: (

                    <TouchableOpacity onPress={() => NavigationService.navigate('AddStudent')}>
                        <FontAwesomeIcon
                            name="plus"
                            size={Metrics.icons.small}
                            color="#fff"
                            style={{ marginRight: Metrics.marginMedium }}
                        />

                    </TouchableOpacity>

                )
            })
        },
        AddStudent: {
            screen: AddStudentScreen,
            navigationOptions: ({ navigation }) => ({
                headerTitle: 'Add Student',
                headerStyle: {
                    backgroundColor: Colors.primary,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerLeft:
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicon
                            name="md-arrow-round-back"
                            size={Metrics.icons.small}
                            color="#fff"
                            style={{ marginLeft: Metrics.marginMedium }}
                        />

                    </TouchableOpacity>
            })
        },
        UpdateStudent: {
            screen: UpdateStudentScreen,
            navigationOptions: ({ navigation }) => ({
                headerTitle: 'Update Student',
                headerStyle: {
                    backgroundColor: Colors.primary,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerLeft:
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicon
                            name="md-arrow-round-back"
                            size={Metrics.icons.small}
                            color="#fff"
                            style={{ marginLeft: Metrics.marginMedium }}
                        />

                    </TouchableOpacity>
            })
        }
    }, { initialRouteName: 'Login' }
);
const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
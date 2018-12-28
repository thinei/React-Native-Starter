import React, { Component } from 'react';
import { View, Text, Button, BackHandler, ToastAndroid } from 'react-native';

import StudentList from '../components/StudentList';

class StudentListScreen extends Component {

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
    handleBackButton() {
        ToastAndroid.show('Back Press Not Allow', ToastAndroid.SHORT);
        return true;
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <StudentList />
            </View>
        );
    }
}

export default StudentListScreen;
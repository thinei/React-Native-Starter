import React, { Component } from 'react';
import { View, Text } from 'react-native';

import UpdateStudentForm from '../components/UpdateStudentForm';

class UpdateStudentScreen extends Component {

    render() {

        return (
            <View>
                <UpdateStudentForm />
            </View>
        );
    }

}

export default UpdateStudentScreen;
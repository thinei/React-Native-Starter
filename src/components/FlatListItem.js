import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from "../container/styles/StudentScreenStyles";
import { Metrics, Colors } from "../themes";
import FontAwesomeicon from 'react-native-vector-icons/dist/FontAwesome5';

class FlatListItem extends Component {
    render() {

        const { buttonStyle, textStyle, deleteIconStyle } = styles;
        const { name, student_email } = this.props.student;

        return (
            <TouchableOpacity style={buttonStyle} onPress={this.props.onPress}>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 0.8 }}>
                        <Text style={textStyle}>{name}</Text>
                        <Text style={textStyle}>{student_email}</Text>
                    </View>
                    <View style={{ alignSelf: "center", flex: 0.2 }}>
                        <TouchableOpacity onPress={this.props.onFlatPress}>
                            <FontAwesomeicon
                                name="trash"
                                size={Metrics.icons.ssmall}
                                color={Colors.primary}
                                style={deleteIconStyle}
                            />

                        </TouchableOpacity>
                    </View>
                </View>


            </TouchableOpacity>
        );
    }
}

export default FlatListItem;

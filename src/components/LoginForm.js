import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Button from './common/Button';
import { changeText, loginUser, isLoggedIn } from '../modules/login/LoginAction';
import styles from "../container/styles/LoginScreenStyles";
import NavigationService from "../navigation/NavigationService";

class LoginForm extends Component {


    componentWillMount() {
        this.props.isLoggedIn();
    }

    render() {

        const { email, password, error, loading } = this.props;
        return (
            <View>

                <Text style={styles.header}> - LOGIN -</Text>
                <Card>
                    <CardSection>
                        <Input
                            label="Email"
                            placeholder="email@gmail.com"
                            value={email}
                            onChangeText={text => this.props.changeText({ prop: 'email', value: text })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            secureTextEntry
                            label="Password"
                            placeholder="password"
                            value={password}
                            onChangeText={text => this.props.changeText({ prop: 'password', value: text })}
                        />
                    </CardSection>

                    <Text style={styles.errorTextStyle}>{error}</Text>

                    <CardSection>
                        <Button text="Login" onPress={() => this.props.loginUser({ email, password })} />
                    </CardSection>

                </Card >
            </View>

        );
    }
}

const mapStateToProps = (state) => {
    const { email, password, error, loading } = state.authReducer;
    return { email, password, error, loading };
}

export default connect(mapStateToProps, { changeText, loginUser, isLoggedIn })(LoginForm);

//export default LoginForm;
import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button, Toast } from "native-base";
import { NavigationScreenProp } from "react-navigation";

import MyInput from "../../components/MyInput";
import { userType } from "../../utils/types";

interface Props {
    navigation: NavigationScreenProp<any, any>;
    users: Array<userType>;
    addUser: Function;
}

interface State {
    formValues: userType;
}

export default class Register extends Component<Props, State> {
    public static navigationOptions = {
        header: null,
    };

    public state = {
        formValues: {
            name: "",
            username: "",
            password: "",
        },
    };

    public gotoLogin = (): void => {
        this.props.navigation.navigate("Login");
    }

    public onChangeText = (val: string, field: string): void => {
        const { formValues } = this.state;
        formValues[[field]] = val;
        this.setState(() => ({
            formValues,
        }));
    }

    public registerUser = (): void => {
        let { users, addUser } = this.props;
        const { formValues } = this.state;

        const findUser = users.filter((user: userType) => user.username === formValues.username);
        if (findUser.length) {
            Toast.show({
                text: "User Already exist",
                buttonText: "Okay",
                duration: 3000,
            });
        } else {
            users.push(formValues);
            addUser(users);
            Toast.show({
                text: "Registerd User",
                buttonText: "Okay",
                duration: 3000,
            });
            this.gotoLogin();
        }

    }

    public render() {
        const { container, contentContainer } = styles;
        return (
            <SafeAreaView style={container}>
                <View style={contentContainer}>
                    <View style={{ marginBottom: 40 }}>
                        <Text style={{ fontSize: 26 }}>Register</Text>
                    </View>
                    <MyInput placeholder="Full Name" onChangeText={(val: string) => this.onChangeText(val, "name")} />
                    <MyInput placeholder="Username" onChangeText={(val: string) => this.onChangeText(val, "username")} />
                    <MyInput
                        placeholder="Password"
                        secureTextEntry
                        onChangeText={(val: string) => this.onChangeText(val, "password")} />
                    <Button rounded block onPress={this.registerUser}>
                        <Text style={{ color: "#fff" }}>Register</Text>
                    </Button>
                    <View>
                        <Button
                            transparent
                            style={{ alignSelf: "center" }}
                            onPress={this.gotoLogin}>
                            <Text>Already have an account?</Text>
                            <Text style={{ color: "red" }}>Login</Text>
                        </Button>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingHorizontal: 25,
        flex: 1,
        alignItems: "center",
    },
});
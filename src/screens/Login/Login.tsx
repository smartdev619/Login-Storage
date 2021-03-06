import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button, Toast } from "native-base";
import { NavigationScreenProp } from "react-navigation";

import {userType} from "../../utils/types";
import MyInput from "../../components/MyInput";

interface Props {
  navigation: NavigationScreenProp<any, any>;
  users: Array<userType>;
  user: userType;
  loginUser: Function;
}

interface State {
  formValues: userType;
}

export default class Login extends Component<Props, State> {
  public static navigationOptions = {
    header: null,
  };

  public state = {
    formValues: {
      username: "",
      password: "",
    },
  };

  constructor(props: Props) {
    super(props);
    console.log(props, "props");
    if (props.user) {
      props.navigation.navigate("Dashboard");
    }
  }

  public gotoRegister = (): void => {
    this.props.navigation.navigate("Register");
  }

  public onChangeText = (val: string, field: string): void => {
    const { formValues } = this.state;
    formValues[[field]] = val;
    this.setState(() => ({
      formValues,
    }));
  }

  public loginUser = (): void => {
    const { users, navigation, loginUser} = this.props;
    const {formValues: {username, password}} = this.state;
    const findUser = users.filter((user: userType) => user.username.toLowerCase() === username.toLowerCase() && user.password === password);
    if (findUser.length) {
      Toast.show({
        text: "Login Successfully",
        buttonText: "Okay",
        duration: 3000,
      });
      loginUser(findUser[0]);
      navigation.navigate("Dashboard");
    } else {
      Toast.show({
        text: "Incorrect Credentials",
        buttonText: "Okay",
        duration: 3000,
      });
    }
  }

  public render() {
    console.log(this.props);
    const { container, contentContainer } = styles;
    return (
      <SafeAreaView style={container}>
        <View style={contentContainer}>
          <View style={{ marginBottom: 40 }}>
            <Text style={{ fontSize: 26 }}>Login</Text>
          </View>
          <MyInput
            placeholder="Username"
            onChangeText={(val: string) => this.onChangeText(val, "username")} />
          <MyInput
            placeholder="Password"
            secureTextEntry
            onChangeText={(val: string) => this.onChangeText(val, "password")} />
          <Button rounded block onPress={this.loginUser}>
            <Text style={{ color: "#fff" }}>SIGN IN</Text>
          </Button>
          <View>
            <Button transparent style={{ alignSelf: "center" }} onPress={this.gotoRegister}>
              <Text>Don't have an account?</Text>
              <Text style={{ color: "red" }}>Sign Up</Text>
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
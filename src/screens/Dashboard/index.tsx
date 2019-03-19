import React, { Component } from "react";
import { NavigationScreenProp } from "react-navigation";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import {logoutUser} from "../../store/auth";
import {connect} from "react-redux";
import { Button } from "native-base";
import {userType} from "../../utils/types";


interface Props {
  user: userType;
  logoutUser: Function;
  navigation: NavigationScreenProp<any, any>;
}

class Dashboard extends Component<Props> {
  public static navigationOptions = {
    header: null,
  };

  public logout = () => {
    this.props.logoutUser();
    this.props.navigation.navigate("Login");
    }


  public render() {
    const { container, contentContainer } = styles;
    const {user} = this.props;
    return (
      <SafeAreaView style={container}>
        <View style={contentContainer}>
          <View style={{ marginBottom: 40 }}>
            <Text style={{ fontSize: 26 }}>Welcome to Dashboard</Text>
            {user && (
              <Text>{user.name}</Text>
            )}
          </View>
        </View>
        <Button onPress={this.logout}><Text>Logout</Text></Button>
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

const mapStateToProps = (state: any) => ({
  user: state.authStore.user,
});

const mapDispatchToProps = {
  logoutUser : () => logoutUser(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
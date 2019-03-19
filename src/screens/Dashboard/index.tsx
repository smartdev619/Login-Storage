import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

interface Props {
}

export default class Dashboard extends Component<Props> {
  public static navigationOptions = {
    header: null,
  };


  public render() {
    const { container, contentContainer } = styles;
    return (
      <SafeAreaView style={container}>
        <View style={contentContainer}>
          <View style={{ marginBottom: 40 }}>
            <Text style={{ fontSize: 26 }}>Welcome to Dashboard</Text>
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
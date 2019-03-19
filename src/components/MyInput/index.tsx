import React from "react";
import { StyleSheet } from "react-native";
import { Input, Item } from "native-base";

const MyInput = (props: any) => (
  <Item rounded style={styles.inputStyle}>
    <Input style={styles.inputS} {...props} />
  </Item>
);

const styles = StyleSheet.create({
  inputS: {
    marginLeft: 5,
  },
  inputStyle: {
    marginBottom: 20,
    backgroundColor: "#F3F3FB",
  },
});


export default MyInput;

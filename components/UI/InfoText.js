import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors.js";

const screenWidth = Dimensions.get("window").width

const Title = (props) => {
  return (
    <Text style={{ ...styles.info, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  info: {
    color: Colors.tertiary,
    fontFamily: "rubik-bold",
    fontSize: screenWidth < 375 ? 13.5 : 15.5,
  },
});

export default Title;

import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors.js";
const screenWidth = Dimensions.get("window").width

const Title = (props) => {
  return (
    <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    color: Colors.tertiary,
    fontFamily: "rubik-bold",
    fontSize: screenWidth < 375 ? 16 : 18,
  },
});

export default Title;

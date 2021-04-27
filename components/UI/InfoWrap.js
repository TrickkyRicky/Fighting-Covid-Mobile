import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/Colors.js";
const InfoWrap = (props) => {
  return (
    <React.Fragment>
      <View style={styles.infoSpacing}>{props.children}</View>
      <View style={styles.borderLine}></View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  infoSpacing: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  borderLine: {
    width: "100%",
    height: Platform.OS === "android" ? 1 : 1.75,
    backgroundColor: Platform.OS === "android" ? "#0ff" : Colors.quad,
    borderRadius: 20,
    shadowRadius: 7,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: "#0ff",
    shadowOpacity: 1,
  },
});

export default InfoWrap;

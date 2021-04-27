import React from "react";
import { Text, StyleSheet } from "react-native";
import AutoScrolling from "react-native-auto-scrolling";

const ScrollingText = (props) => {
  return (
    <AutoScrolling
      style={styles.scrolling}
      duration={35000}
      endPaddingWidth={450}
    >
      <Text style={styles.scrollText}>
        Station 1 was last used {props.dateS1}                             Station 2 was last used{props.dateS2}                             Station 3 was last used {props.dateS3}
      </Text>
    </AutoScrolling>
  );
};

const styles = StyleSheet.create({
  scrolling: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, .6)",
    width: "100%",
    paddingVertical: 5,
  },

  scrollText: {
    color: "white",
    fontSize: 20,
    fontFamily: "rubik-bold",
  },
});

export default ScrollingText;

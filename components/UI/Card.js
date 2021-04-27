import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../../constants/Colors.js";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>
      <View style={styles.pContainer}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 40,
    backgroundColor: Colors.primary,
    width: "90%",
    borderRadius: 6,
  },
  pContainer: {
    padding: 25,
  },
});

export default Card;

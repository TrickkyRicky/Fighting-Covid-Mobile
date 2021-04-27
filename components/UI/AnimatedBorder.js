import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import Colors from "../../constants/Colors.js";

const AnimatedBorder = (props) => {
  const left = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(left, {
          toValue: 100,
          duration: 1400,
          useNativeDriver: false,
          easing: Easing.linear,
        }),
        Animated.timing(left, {
          toValue: -.5,
          duration: 1400,
          useNativeDriver: false,
          easing: Easing.linear,
        }),
      ]),
      { iterations: "infinite" }
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Text style={styles.title}>Covid Stations</Text>
        <Animated.View
          style={[
            styles.box,
            {
              left,
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
  },
  border: {
    borderBottomWidth: 3,
    borderBottomColor: "rgba(0,255,255,.5)",
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 12 },
    shadowColor: "#0ff",
    shadowOpacity: 1.0,
    width: 110,
    position: "relative",
  },
  title: {
    color: Colors.tertiary,
    fontFamily: "rubik-bold",
    fontSize: 15,
  },
  box: {
    height: 1,
    width: 10,
    backgroundColor: "white",
    borderRadius: 2,
    position: "absolute",
    bottom: -1.5,
  },
});

export default AnimatedBorder;

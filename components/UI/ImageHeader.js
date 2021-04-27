import React, { useRef, useEffect } from "react";
import {StyleSheet, Animated, Easing } from "react-native";

const AnimatedBorder = (props) => {
  const rotate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotate, {
          toValue: 1,
          duration: 10000,
          useNativeDriver: false,
          easing: Easing.linear,
        }),
      ]),
      { iterations: "infinite" }
    ).start();
  }, []);

  const rotateData = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <Animated.Image
      source={require("../../assets/Images/iconLogoNoLabel.png")}
      style={{
        paddingLeft: 50,
        width: 35,
        height: 35,
        transform: [{ rotate: rotateData }],
      }}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({});

export default AnimatedBorder;

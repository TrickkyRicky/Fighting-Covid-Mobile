import React, { useEffect } from "react";
import {
  View,
  Image,
  Platform,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import LottieView from "lottie-react-native";
import Colors from "../constants/Colors.js";

const { width } = Dimensions.get("window");
const LoadingScreen = (props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.navigation.replace("Dashboard");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.screen}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/Images/iconLogo.png")}
      />
      <View style={styles.container}>
        {Platform.OS === "android" ? (
          <ActivityIndicator size="large" color="#0ff" />
        ) : (
          <LottieView
            source={require("../assets/waiting.json")}
            autoPlay
            loop
          ></LottieView>
        )}
      </View>
      <StatusBar barStyle="light-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  image: {
    width: width,
  },
  container: {
    width: "100%",
    height: Platform.OS === "android" ? "20%" : "30%",
  },
});

export default LoadingScreen;

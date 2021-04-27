import React from "react";
import { View, Image, Platform, StyleSheet } from "react-native";
import { DrawerItemList } from "@react-navigation/drawer";
import Colors from "../constants/Colors.js";

const DrawerHeader = (props) => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/Images/iconLogo.png")}
          resizeMode="contain"
        />
      </View>
      <DrawerItemList {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 0 : 60,
  },
  image: {
    width: 175,
    height: 175,
  },
  footer: {
    fontSize: 16,
    fontFamily: "rubik-bold",
    color: Colors.secondary,
  },
});

export default DrawerHeader;

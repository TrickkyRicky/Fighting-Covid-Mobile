import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import Card from "../UI/Card.js";
import Title from "../UI/Title.js";

const { width } = Dimensions.get("window");

const StationImage = (props) => {
  return (
    <Card style={styles.container}>
      <Title>{props.name} | Image</Title>
      <View style={{ alignItems: "center" }}>
        <Image
          style={styles.image}
          resizeMode="stretch"
          source={props.imagePath}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
  },
  image: {
    width: width * 0.78,
    height: 200,
  },
});

export default StationImage;

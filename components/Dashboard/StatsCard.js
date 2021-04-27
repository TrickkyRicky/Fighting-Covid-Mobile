import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors.js";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import Card from "../UI/Card.js";
import Title from "../UI/Title.js";

const screenWidth = Dimensions.get("window").width

const StatsCard = (props) => {
  let Icon;
  if (props.iconName === "soap") {
    Icon = <FontAwesome5 name="soap" size={36} color="white" />;
  } else if (props.iconName === "person-outline") {
    Icon = <Ionicons name="person-outline" size={36} color="white" />;
  } else if (props.iconName === "temperature-high") {
    Icon = <FontAwesome5 name="temperature-high" size={36} color="white" />;
  }

  return (
    <Card style={styles.container}>
      <Title style={styles.title}>{props.title}</Title>
      <View style={styles.iconContainer}>
        <View style={styles.iconStatContainer}>
          <Text style={styles.statInfo1}>{props.statValue}</Text>
          <MaterialCommunityIcons
            name={props.iconArrow}
            size={24}
            color={props.arrowColor}
          />
        </View>
        {Icon}
      </View>
      <Text style={styles.statInfo2}>
        {/* increases or decreases conditionally */}
        {props.analytics} From Yestardays Statistics
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 155,
  },
  title: {
    marginBottom: 15,
    fontSize: 16
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
  },
  iconStatContainer: {
    flexDirection: "row",
  },
  statInfo1: {
    color: Colors.tertiary,
    fontFamily: "rubik-bold",
    fontSize: 19,
    paddingRight: 5,
  },
  statInfo2: {
    marginBottom: 20,
    color: "#6c7293",
    fontFamily: "rubik",
    fontSize: screenWidth < 375 ? 12.5 : 14.5,
    paddingRight: 5,
  },
});

export default StatsCard;

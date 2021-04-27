import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import Colors from "../../constants/Colors.js";
import Card from "../UI/Card.js";
import Title from "../UI/Title.js";

const screenWidth = Dimensions.get("window").width;

const PieChartCard = (props) => {
  // pass props to data HOURLYUSAGE from redux
  const data = [
    {
      name: "Station 1",
      HourlyUsage: props.s1,
      color: "aqua",
      legendFontColor: "#6c7293",
      legendFontSize: 13.5,
    },
    {
      name: "Station 2",
      HourlyUsage: props.s2,
      color: "#FF6384",
      legendFontColor: "#6c7293",
      legendFontSize: 13.5,
    },
    {
      name: "Station 3",
      HourlyUsage: props.s3,
      color: "#FFCD56",
      legendFontColor: "#6c7293",
      legendFontSize: 13.5,
    },
  ];

  return (
    <Card style={styles.container}>
      <Title style={styles.chartTitle}>Hourly Usage Breakdown</Title>
      <PieChart
        data={data}
        width={screenWidth / 1.25}
        height={screenWidth < 375 ? 140 : 180}
        chartConfig={{
          fillShadowGradient: Colors.quad,
        }}
        accessor={"HourlyUsage"}
        backgroundColor={"transparent"}
        paddingLeft={screenWidth < 375 ? "-2" : "10"}
        center={[0, 0]}
        absolute
      />
      <View style={styles.THUContainer}>
        <View>
          <Text style={styles.updatesTitle}>Total Hourly Usage</Text>
          <Text style={styles.updatedText}>
            Last Updated: {props.lastUpdate}
          </Text>
        </View>
        <View>
          <Text style={styles.updatesNum}>
            {props.s1 + props.s2 + props.s3} Per/Hr
          </Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screenWidth < 375 ? 305 : 355,
  },
  chartTitle: {
    marginBottom: 0,
    fontSize: 16,
  },
  THUContainer: {
    backgroundColor: "#12151e",
    paddingVertical: 20,
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  updatesTitle: {
    color: Colors.tertiary,
    fontFamily: "rubik-bold",
    fontSize: screenWidth < 375 ? 13 : 16,
  },
  updatedText: {
    color: "#6c7293",
    fontSize: screenWidth < 375 ? 10.5 : 13.5,
    marginTop: 5,
  },
  updatesNum: {
    color: Colors.tertiary,
    fontFamily: "rubik-bold",
    fontSize: screenWidth < 375 ? 12 : 15.5,
  },
});

export default PieChartCard;

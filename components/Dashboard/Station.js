import React from "react";
import { Text, StyleSheet, Dimensions, ActivityIndicator } from "react-native";
import Colors from "../../constants/Colors.js";
import { BarChart } from "react-native-chart-kit";
import Card from "../UI/Card.js";
import InfoWrap from "../UI/InfoWrap.js";
import Title from "../UI/Title.js";
import InfoText from "../UI/InfoText.js";

const Station = (props) => {
  // remember to set props to data when connected to redux
  const data = {
    labels: ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: props.dataArray,
      },
    ],
  };

  const screenWidth = Dimensions.get("window").width;

  return (
    <Card style={styles.stationContainer}>
      <Title>{props.stationName}</Title>
      <InfoWrap>
        <InfoText>Daily Use : </InfoText>
        {props.loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <InfoText>{props.dailyUse}</InfoText>
        )}
      </InfoWrap>
      <InfoWrap>
        <InfoText>Amount of Solution: </InfoText>
        {props.loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <InfoText>{props.solution + "%"}</InfoText>
        )}
      </InfoWrap>
      <InfoWrap>
        <InfoText style={styles.info}>Average Temperature : </InfoText>
        {props.loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <InfoText>{props.temp.toFixed(0) + "\u00b0F"}</InfoText>
        )}
      </InfoWrap>
      <InfoWrap>
        <InfoText>Latest Usage : </InfoText>
        {props.loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <InfoText>{props.dateUsed}</InfoText>
        )}
      </InfoWrap>
      <Text style={styles.chartTitle}>Daily Station Usage</Text>
      <BarChart
        data={data}
        width={screenWidth / 1.35}
        height={220}
        fromZero={true}
        showValuesOnTopOfBars={true}
        chartConfig={{
          backgroundGradientFrom: Colors.primary,
          backgroundGradientTo: Colors.primary,
          fillShadowGradient: Colors.quad,
          fillShadowGradientOpacity: 1,
          barPercentage: 0.4,
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(248, 248, 248, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(248, 248, 248, ${opacity})`,
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#0ff",
          },
        }}
        bezier
        style={{
          borderRadius: 16,
          paddingRight: 30,
          borderRadius: 0,
          fontFamily: "rubik-bold",
        }}
        // verticalLabelRotation={30}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  stationContainer: {
    height: 610,
  },
  chartTitle: {
    color: Colors.tertiary,
    fontFamily: "rubik-bold",
    fontSize: 16,
    textAlign: "center",
    paddingTop: 30,
    marginBottom: 10,
  },
});

export default Station;

import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Card from "../UI/Card.js";
import InfoWrap from "../UI/InfoWrap.js";
import Title from "../UI/Title.js";
import InfoText from "../UI/InfoText.js";
import Colors from "../../constants/Colors.js";

const StationLogs = (props) => {
  return (
    <Card style={styles.container}>
      <Title>{props.name} | Logs</Title>
      <View style={styles.logBorder}>
        {props.logs.length === 0 ? (
          <View style={styles.infoContainer}>
            <InfoText style={styles.info}>
              There are no logs due to the station not being used today.
            </InfoText>
          </View>
        ) : (
          <ScrollView nestedScrollEnabled={true}>
            {props.logs.map((item, index) => {
              return (
                <InfoWrap key={index}>
                  <InfoText style={{ paddingLeft: 10 }}>{item}</InfoText>
                </InfoWrap>
              );
            })}
          </ScrollView>
        )}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 290,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  info: {
    textAlign: "center",
    fontSize: 18,
  },
  logBorder: {
    shadowRadius: 100,
    height: 180,
    borderWidth: 2,
    borderColor: Colors.secondary,
  },
});

export default StationLogs;

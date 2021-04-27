import React from "react";
import { StyleSheet } from "react-native";
import Card from "../UI/Card.js";
import InfoWrap from "../UI/InfoWrap.js";
import Title from "../UI/Title.js";
import InfoText from "../UI/InfoText.js";

const StationHighScores = (props) => {
  return (
    <Card style={styles.container}>
      <Title>{props.name} | HighScores</Title>
      <InfoWrap>
        <InfoText>Total Users: </InfoText>
        <InfoText>{props.total}</InfoText>
      </InfoWrap>

      <InfoWrap>
        <InfoText>Highest Temperature: </InfoText>
        <InfoText>{props.highestTemp + "\u00b0F"}</InfoText>
      </InfoWrap>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
  },
});

export default StationHighScores;

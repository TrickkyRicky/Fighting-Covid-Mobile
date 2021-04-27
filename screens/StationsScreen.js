import React, { useEffect } from "react";
import { ScrollView, View, StyleSheet, StatusBar } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { SafeAreaView } from "react-native-safe-area-context";
import moment from "moment";

import { MenuHeaderButton } from "../components/UI/HeaderButtons.js";
import ImageHeader from "../components/UI/ImageHeader";
import ScrollingText from "../components/UI/ScrollingText.js";

import Station from "../components/Dashboard/Station.js";
import StatsCard from "../components/Dashboard/StatsCard.js";
import PieChartCard from "../components/Dashboard/PieChartCard.js";
import CarouselCard from "../components/Dashboard/CarouselCard.js";

import Colors from "../constants/Colors.js";

import * as stationActions from "../store/actions/Stations.js";
import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
    };
  },
});

const convertTime = (date) => {
  const reformattedDate = ` ${moment(date.substr(0, 10), "MM/DD/YYYY").format(
    "MMMM Do"
  )} at ${date.substr(11, 13)} `;
  if (reformattedDate == " Invalid date at Invalid date ") {
    return " Loading... ";
  } else {
    return reformattedDate;
  }
};

const StationsScreen = (props) => {
  useEffect(() => {
    Permissions.getAsync(Permissions.NOTIFICATIONS)
      .then((statusObj) => {
        if (statusObj.status !== "granted") {
          return Permissions.askAsync(Permissions.NOTIFICATIONS);
        }
        return statusObj;
      })
      .then((statusObj) => {
        if (statusObj.status !== "granted") {
          return;
        }
      });
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(stationActions.listener("station1"));
    dispatch(stationActions.listener("station2"));
    dispatch(stationActions.listener("station3"));
  }, [dispatch]);

  const stations = useSelector((state) => state);

  const station1pie = Math.ceil(stations.station1.highScores.totalUse / 60);
  const station2pie = Math.ceil(stations.station2.highScores.totalUse / 60);
  const station3pie = Math.ceil(stations.station3.highScores.totalUse / 60);

  const pieDate = moment().format("DD MMM YYYY");

  const total =
    stations.station1.highScores.totalUse +
    stations.station2.highScores.totalUse +
    stations.station3.highScores.totalUse;

  const highestTemp = [
    stations.station1.highScores.highTemp,
    stations.station2.highScores.highTemp,
    stations.station3.highScores.highTemp,
  ];
  highestTemp.sort((a, b) => b - a);

  const station1ScrollDate = convertTime(stations.station1.lastUsed);
  const station2ScrollDate = convertTime(stations.station2.lastUsed);
  const station3ScrollDate = convertTime(stations.station3.lastUsed);

  return (
    <View style={styles.screen}>
      <SafeAreaView mode="margin" edges={["bottom"]}>
        <ScrollView>
          <View style={styles.stationContainer}>
            <Station
              stationName={stations.station1.name}
              dailyUse={stations.station1.dailyUse}
              solution={stations.station1.solutionAmount}
              temp={stations.station1.averageTemp}
              dateUsed={stations.station1.lastUsed}
              loading={stations.station1.loading}
              dataArray={stations.station1.data}
            />
            <Station
              stationName={stations.station2.name}
              dailyUse={stations.station2.dailyUse}
              solution={stations.station2.solutionAmount}
              temp={stations.station2.averageTemp}
              dateUsed={stations.station2.lastUsed}
              loading={stations.station2.loading}
              dataArray={stations.station2.data}
            />
            <Station
              stationName={stations.station3.name}
              dailyUse={stations.station3.dailyUse}
              solution={stations.station3.solutionAmount}
              temp={stations.station3.averageTemp}
              dateUsed={stations.station3.lastUsed}
              loading={stations.station3.loading}
              dataArray={stations.station3.data}
            />
            <StatsCard
              title="Solution Per Hour"
              statValue={5 + " Mg/Hr"}
              iconArrow={"arrow-top-right"}
              arrowColor={"rgb(0, 210, 91)"}
              iconName={"soap"}
              analytics={3 + "% Increase"}
            />
            <StatsCard
              title="Total Usage"
              statValue={total + " Users"}
              iconArrow={"arrow-bottom-right"}
              arrowColor={"rgb(252, 66, 74)"}
              iconName={"person-outline"}
              analytics={1 + "% Decrease"}
            />
            <StatsCard
              title="Highest Temperature"
              statValue={highestTemp[0] + "\u00b0F"}
              iconArrow={"arrow-top-right"}
              arrowColor={"rgb(0, 210, 91)"}
              iconName={"temperature-high"}
              analytics={5 + "\u00b0F Increase"}
            />
            <PieChartCard
              lastUpdate={pieDate}
              s1={station1pie}
              s2={station2pie}
              s3={station3pie}
            />
            <CarouselCard />
          </View>
          <StatusBar
            barStyle="light-content"
            backgroundColor={Colors.primary}
          />
        </ScrollView>
        <ScrollingText
          dateS1={station1ScrollDate}
          dateS2={station2ScrollDate}
          dateS3={station3ScrollDate}
        />
      </SafeAreaView>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "Dashboard",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={MenuHeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerLeft: () => <ImageHeader />,
  };
};
const styles = StyleSheet.create({
  screen: {
    backgroundColor: "black",
    flex: 1,
  },
  stationContainer: {
    width: "100%",
    alignItems: "center",
    paddingTop: 40,
  },
});

export default StationsScreen;

import React from "react";
import { View, ScrollView, StyleSheet, StatusBar } from "react-native";
import { useSelector } from "react-redux";

import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MenuHeaderButton } from "../components/UI/HeaderButtons.js";
import ImageHeader from "../components/UI/ImageHeader";

import StationHighScores from "../components/StationNum/StationHighScores.js";
import StationLogs from "../components/StationNum/StationLogs.js";
import StationImage from "../components/StationNum/StationImage.js";

const Station2Screen = (props) => {
  const stations = useSelector((state) => state);

  return (
    <View style={styles.screen}>
      <SafeAreaView mode="margin" edges={["bottom"]}>
        <ScrollView
          nestedScrollEnabled={true}
          contentContainerStyle={styles.container}
        >
          <StationHighScores
            name={stations.station2.name}
            total={stations.station2.highScores.totalUse}
            highestTemp={stations.station2.highScores.highTemp}
          />
          <StationLogs
            name={stations.station2.name}
            logs={stations.station2.logs}
          />
          <StationImage
            name={stations.station2.name}
            imagePath={require("../assets/Images/coming-soon-2.png")}
          />
        </ScrollView>
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </View>
  );
};

export const S2Options = (navData) => {
  return {
    headerTitle: "Station 2",
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
    flex: 1,
    backgroundColor: "black",
    width: "100%",
  },
  container: {
    alignItems: "center",
    paddingTop: 40,
  },
});

export default Station2Screen;

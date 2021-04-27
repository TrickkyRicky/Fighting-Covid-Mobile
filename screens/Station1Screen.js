import React from "react";
import { ScrollView, View, StyleSheet, StatusBar } from "react-native";
import { useSelector } from "react-redux";

import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MenuHeaderButton } from "../components/UI/HeaderButtons.js";
import ImageHeader from "../components/UI/ImageHeader";

import StationHighScores from "../components/StationNum/StationHighScores.js";
import StationLogs from "../components/StationNum/StationLogs.js";
import StationImage from "../components/StationNum/StationImage.js";

const Station1Screen = (props) => {
  const stations = useSelector((state) => state);
  return (
    <View style={styles.screen}>
      <SafeAreaView mode="margin" edges={["bottom"]}>
        <ScrollView
          nestedScrollEnabled={true}
          contentContainerStyle={styles.container}
        >
          <StationHighScores
            name={stations.station1.name}
            total={stations.station1.highScores.totalUse}
            highestTemp={stations.station1.highScores.highTemp}
          />
          <StationLogs
            name={stations.station1.name}
            logs={stations.station1.logs}
          />
          <StationImage
            name={stations.station1.name}
            imagePath={require("../assets/Images/coming-soon-1.png")}
          />
        </ScrollView>
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </View>
  );
};

export const S1Options = (navData) => {
  return {
    headerTitle: "Station 1",
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

export default Station1Screen;

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

const Station3Screen = (props) => {
  const stations = useSelector((state) => state);

  return (
    <View style={styles.screen}>
      <SafeAreaView mode="margin" edges={["bottom"]}>
        <ScrollView
          nestedScrollEnabled={true}
          contentContainerStyle={styles.container}
        >
          <StationHighScores
            name={stations.station3.name}
            total={stations.station3.highScores.totalUse}
            highestTemp={stations.station3.highScores.highTemp}
          />
          <StationLogs
            name={stations.station3.name}
            logs={stations.station3.logs}
          />
          <StationImage
            name={stations.station3.name}
            imagePath={require("../assets/Images/coming-soon-4.png")}
          />
        </ScrollView>
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </View>
  );
};

export const S3Options = (navData) => {
  return {
    headerTitle: "Station 3",
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

export default Station3Screen;

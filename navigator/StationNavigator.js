import React from "react";
import { Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import LoadingScreen from "../screens/LoadingScreen.js";
import StationsScreen, { screenOptions } from "../screens/StationsScreen.js";
import Station1Screen, { S1Options } from "../screens/Station1Screen.js";
import Station2Screen, { S2Options } from "../screens/Station2Screen.js";
import Station3Screen, { S3Options } from "../screens/Station3Screen.js";

import DrawerHeader from "./DrawerHeader.js";
import Colors from "../constants/Colors.js";

const { width } = Dimensions.get("window");

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
    shadowColor: "transparent",
  },
  headerTitleStyle: {
    fontFamily: "rubik-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "rubik",
  },
  headerTintColor: Colors.tertiary,
};

const DashStack = createStackNavigator();
const S1Stack = createStackNavigator();
const S2Stack = createStackNavigator();
const S3Stack = createStackNavigator();

const Dashboard = ({ navigation }) => (
  <DashStack.Navigator screenOptions={defaultNavOptions}>
    <DashStack.Screen
      name="Loading"
      component={LoadingScreen}
      options={{ headerShown: false }}
    />
    <DashStack.Screen
      name="Dashboard"
      component={StationsScreen}
      options={screenOptions}
    />
  </DashStack.Navigator>
);

const Station1 = ({ navigation }) => (
  <S1Stack.Navigator screenOptions={defaultNavOptions}>
    <S1Stack.Screen
      name="Station 1"
      component={Station1Screen}
      options={S1Options}
    />
  </S1Stack.Navigator>
);

const Station2 = ({ navigation }) => (
  <S2Stack.Navigator screenOptions={defaultNavOptions}>
    <S2Stack.Screen
      name="Station 2"
      component={Station2Screen}
      options={S2Options}
    />
  </S2Stack.Navigator>
);

const Station3 = ({ navigation }) => (
  <S3Stack.Navigator screenOptions={defaultNavOptions}>
    <S3Stack.Screen
      name="Station 3"
      component={Station3Screen}
      options={S3Options}
    />
  </S3Stack.Navigator>
);

const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerBackgroundColor={Colors.primary}
      drawerPosition="right"
      drawerContentOptions={{
        activeTintColor: Colors.tertiary,
        inactiveTintColor: Colors.secondary,
        activeBackgroundColor: "rgba(0,255,255,.5)",
        itemStyle: {
          paddingVertical: 6,
          paddingLeft: 15,
          marginVertical: 1,
        },
        labelStyle: {
          fontFamily: "rubik-bold",
          fontSize: width < 375 ? 13.5 : 16,
        },
      }}
      drawerType="slide"
      drawerStyle={{
        width: "60%",
        backgroundColor: Colors.primary,
      }}
      drawerContent={(props) => <DrawerHeader {...props} />}
    >
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Station 1" component={Station1} />
      <Drawer.Screen name="Station 2" component={Station2} />
      <Drawer.Screen name="Station 3" component={Station3} />
    </Drawer.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

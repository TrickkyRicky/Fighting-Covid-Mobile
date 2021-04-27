import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors.js";
import { Platform } from "react-native";

export const MenuHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={32}
      color={Colors.tertiary}
    />
  );
};

export const AtomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={MaterialCommunityIcons}
      iconSize={28}
      color={Colors.tertiary}
    />
  );
};

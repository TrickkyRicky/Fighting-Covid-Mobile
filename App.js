import React, { useState } from "react";
import AllStationNavigator from "./navigator/StationNavigator.js";

import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import globalReducer from "./store/reducers/globalReducer.js";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

const store = createStore(globalReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    rubik: require("./assets/Fonts/Rubik-Regular.ttf"),
    "rubik-bold": require("./assets/Fonts/Rubik-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <AllStationNavigator />
    </Provider>
  );
}

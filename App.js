import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import MealsNavigator from './navigation/MealsNavigator';

const fetchFont = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoading, setFontLoading] = useState(true);

  if (fontLoading) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => setFontLoading(false)}
      />
    );
  }

  return <MealsNavigator />
}

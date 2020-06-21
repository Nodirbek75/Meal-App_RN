import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
} from "react-native";

const CategoryGridTile = (props) => {
  let TouchableCpm = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCpm = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableCpm onPress={props.onClick}>
        <View style={{ ...styles.container, backgroundColor: props.color }}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </TouchableCpm>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    shadowColor: "#ccc",
    shadowOpacity: 0.3,
    shadowOffset: { width: 3, height: 2 },
    shadowRadius: 10,
    elevation: 10,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "right",
  },
});

export default CategoryGridTile;

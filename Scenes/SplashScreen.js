import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";

const SplashScreen = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.navigate("LoginScreen");
    }, 3000);
  });
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Logo.jpg")}
        style={{ width: 300, height: 100, resizeMode: "contain", margin: 30 }}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};
export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4d96f4",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
});

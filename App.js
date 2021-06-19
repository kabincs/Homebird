import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, ThemeProvider } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AboutUs from "./Scenes/SplashScreen";
import RegisterScreen from "./Scenes/RegisterScreen";
import LoginScreen from "./Scenes/LoginScreen";
import SplashScreen from "./Scenes/SplashScreen";
import ProductScreen from "./Scenes/Productlist/ProductPage";
import store from "./Redux/store";

const Stack = createStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "#f9f9f9",
    card: "#4d96f4",
    text: "#f9f9f9",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

const style = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  content: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  contentItem: {
    flex: 1,
  },
});
/*
const IncreDecreApp = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <View style={{ flexDirection: "row" }}>
      <ThemeProvider>
        <Button
          onPress={() => dispatch({ type: "INCREMENT" })}
          style={{ fontSize: 1, display: "inline", padding: 10 }}
          title="Increment"
        />
        <Text style={(style, { fontSize: 40 })}>{counter}</Text>
        <Button
          onPress={() => dispatch({ type: "DECREMENT" })}
          titleStyle={{ color: "#FFFFFF", fontSize: 20 }}
          style={{ fontSize: 1, display: "inline", padding: 10 }}
          title="Decrement"
        />
      </ThemeProvider>
    </View>
  );
};
*/
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          screenOptions={{ headerTitleAlign: "center" }}
          style={{ position: "fixed" }}
          initialRouteName="SplashScreen"
        >
          <Stack.Screen
            options={{ headerShown: false }}
            name="LoginScreen"
            component={LoginScreen}
          />
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Welcome to the Family"
            component={RegisterScreen}
          />
          <Stack.Screen name="ProductScreen" component={ProductScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});*/

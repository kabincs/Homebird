import React from "react";
import { View, Text, ScrollView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductList from "./ProductList";

const Stack = createStackNavigator();

const First = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#4d96f4" }}>
        <ProductList></ProductList>
      </View>
    </ScrollView>
  );
};
export default First;

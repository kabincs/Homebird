import React from "react";
import { View, Text, ScrollView } from "react-native";
import Supplier from "./Component/Supplier";
import Second from "./Component/Second";
import { ButtonGroup } from "react-native-elements";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Carousel from "./Component/CustomCarousel";
const Tab = createMaterialTopTabNavigator();
const Home = () => {
  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Carousel></Carousel>
      </View>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Tab.Navigator
          initialRouteName="Feed"
          tabBarOptions={{
            activeTintColor: "#FFFFFF",
            inactiveTintColor: "#FFF",
            style: {
              backgroundColor: "#f7a048",
            },
            labelStyle: {
              textAlign: "center",
              fontWeight: "bold",
            },
            indicatorStyle: {
              borderBottomColor: "#fff",
              borderBottomWidth: 2,
            },
          }}
        >
          <Tab.Screen
            name="Supplier"
            component={Supplier}
            options={{
              tabBarLabel: "Picked for you",
            }}
          />
          <Tab.Screen
            name="Second"
            component={Second}
            options={{
              tabBarLabel: "Suplier",
            }}
          />
          <Tab.Screen
            name="Second1"
            component={Second}
            options={{
              tabBarLabel: "Rating",
            }}
          />
        </Tab.Navigator>
        <ButtonGroup
          buttons={["Hello", "World"]}
          buttonStyle={{
            padding: 0,
            margin: 0,
            color: "white",
          }}
          buttonContainerStyle={{
            padding: 0,
            margin: 0,
            width: 100,
            color: "#fff",
            backgroundColor: "red",
          }}
          containerStyle={{
            height: 30,
            margin: 0,
            backgroundColor: "green",
            color: "white",
          }}
        />
      </View>
    </ScrollView>
  );
};
export default Home;

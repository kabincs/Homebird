import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

const AddCartBtn = ({ handleClick, item }) => {
  return (
    <>
      {item.quantity ? (
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Button
            onPress={() => {
              handleClick.addProductToCart(item);
            }}
            buttonStyle={{ padding: 10 }}
            title="+"
          />
          <Text
            style={{ backgroundColor: "#fff", padding: 10, fontWeight: "bold" }}
          >
            {item.quantity}
          </Text>
          <Button
            onPress={() => {
              handleClick.removProductFromCart(item);
            }}
            buttonStyle={{ padding: 10 }}
            title="-"
          />
        </View>
      ) : (
        <Button
          onPress={() => {
            handleClick.addProductToCart(item);
          }}
          buttonStyle={{ padding: 10 }}
          title="ADD"
        />
      )}
    </>
  );
};
export default AddCartBtn;

import React from "react";
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Avatar, Icon } from "react-native-elements";
const RegisterScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Avatar
            size="large"
            style={{
              height: 80,
              width: 80,
              margin: 30,
            }}
            source={require("../assets/avatar.png")}
          ></Avatar>
        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <Icon
              color="#f7a048"
              name="account"
              size={30}
              type="material-community"
            />
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Enter Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
            />
          </View>
          <View style={styles.SectionStyle}>
            <Icon
              color="#f7a048"
              name="email"
              size={30}
              type="material-community"
            />
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Enter Email"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <Icon
              color="#f7a048"
              name="key"
              size={30}
              type="material-community"
            />
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              placeholderTextColor="#8b9cb5"
              returnKeyType="next"
              secureTextEntry={true}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <Icon
              color="#f7a048"
              name="cellphone"
              size={30}
              type="material-community"
            />
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Enter Phone No"
              placeholderTextColor="#8b9cb5"
              keyboardType="numeric"
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <Icon
              color="#f7a048"
              name="map-marker"
              size={30}
              type="material-community"
            />
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Enter Address"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>
          <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default RegisterScreen;
const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    borderWidth: 0.5,
    borderColor: "transparent",
    borderBottomColor: "#f7a048",
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: "#f7a048",
    borderWidth: 0,
    color: "#FFFFFF",
    height: 40,
    alignItems: "center",
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: "#000",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 0,
    borderColor: "transparent",
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
  successTextStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    padding: 30,
  },
});

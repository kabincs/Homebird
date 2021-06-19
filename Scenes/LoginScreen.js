import React from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { Avatar, Icon } from "react-native-elements";
import { Text } from "react-native";
const LoginScreen = ({ navigation }) => {
  const handleSubmitPress = () => {
    navigation.navigate("ProductScreen");
  };
  return (
    <View>
      <ScrollView>
        <KeyboardAvoidingView>
          <View style={styles.primaryBgColor}>
            <Image
              source={require("../assets/Logo.jpg")}
              style={{
                width: 300,
                height: 200,
                resizeMode: "contain",
                margin: 30,
              }}
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
              placeholder="Enter Email" //dummy@abc.com
              placeholderTextColor="#8b9cb5"
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              underlineColorAndroid="#f000"
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
              placeholder="Enter Password" //12345
              placeholderTextColor="#8b9cb5"
              keyboardType="default"
              blurOnSubmit={false}
              secureTextEntry={true}
              underlineColorAndroid="#f000"
              returnKeyType="next"
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={handleSubmitPress}
              style={styles.buttonStyle}
              activeOpacity={0.5}
            >
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate("Welcome to the Family")}
            >
              New Here ? Register
            </Text>

            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate("ProductScreen")}
            >
              Continue as Guest
            </Text>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;
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
  registerTextStyle: {
    color: "#f7bd83",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    padding: 10,
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
  primaryBgColor: {
    backgroundColor: "#4d96f4",
  },
});

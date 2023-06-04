import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { Input } from "react-native-elements";
import {
  CommonActions,
  NavigationActions,
  StackActions,
} from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";
import { BackgroundImage } from "react-native-elements/dist/config";

export default function PinScreen(props) {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });

  const [pinCode, setPinCode] = useState([null, null, null, null]);

  const [pinStatus, setPinStatus] = useState("");
  const [pinImg, setPinImg] = useState(null);

  checkLogin = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      const _username = await AsyncStorage.getItem("username");
      const _password = await AsyncStorage.getItem("password");
      setAccount({ username: _username, password: _password });
    }
  };

  useEffect(() => {
    setNavigationOption();
    checkLogin();
  }, []);

  const navigationNextPage = (page = 'Home') => {
    props.navigation.navigate(`${page}`);
  }

  onLogin = async () => {
    const _username = await AsyncStorage.getItem("username");
    const _password = await AsyncStorage.getItem("password");

    const { username, password } = account;
    if (_username == username && _password == password) {
      await AsyncStorage.setItem("token", "xxxx");
      // props.navigation.navigate('Success');
      props.navigation.dispatch(StackActions.replace("Success"));
    } else {
      await AsyncStorage.removeItem("token");
      alert(`Login failed`);
    }
  };

  setNavigationOption = () => {
    props.navigation.setOptions({
      headerShown: false,
      title: "Home",
      headerStyle: {
        backgroundColor: "#999CED",
      },
      headerTintColor: "#FFFFFF",
      headerTitleStyle: { color: "#fff" },
      headerBackTitle: " ",
      // headerRight: () => (
      //   <TouchableOpacity
      //     activeOpacity={0.1}
      //     onPress={() => alert("Please Login")}
      //     style={{ padding: 10 }}
      //   >
      //     <Icon
      //       name="address-card"
      //       size={20}
      //       color="#fff"
      //       style={{
      //         height: 24,
      //         width: 24,
      //       }}
      //     />
      //   </TouchableOpacity>
      // ),
    });
  };

  return (
    <BackgroundImage
      source={require("./assets/img/bg1.png")}
      style={{
        // backgroundColor: "#eee",
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-end",
          paddingTop: 30,
        }}
      >
        <Image
          style={{ height: 25 }}
          source={require("./assets/custome/logo-pin.png")}
        />
      </View>
      {/* Login section */}
      <View
        style={{
          flex: 1,
          borderRadius: 0,
          marginTop: 0,
          marginBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          flexDirection: "column",
          // backgroundColor: "#fff",
          paddingTop: 0,
          paddingLeft: 0,
          paddingRight: 0,
          paddingBottom: 0,
        }}
      >
        <View
          style={{ flex: 3, justifyContent: "center", alignContent: "center", paddingTop: 100 }}
        >
          {pinStatus != "confirm" ? (
            <Image
              style={{ width: 100, height: 100, alignSelf: "center" }}
              source={require("./assets/custome/people-pin.png")}
            />
          ) : (
            <TouchableOpacity
              onPress={() => {
                setPinStatus("");
              }}
            >
              <Image
                style={{ width: 100, height: 100, alignSelf: "center" }}
                source={require("./assets/custome/demo-profile.png")}
              />
            </TouchableOpacity>
          )}
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
            marginLeft: 40,
            marginRight: 40
          }}
        >
          {pinStatus == "setting" || pinStatus == "confirm" ? (
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              {[1, 2, 3, 4].map((item, index) => {
                return (
                  <>
                    <View
                      key={{index}}
                      style={{
                        width: 30,
                        height: 30,
                        borderWidth: 1,
                        borderRadius: "50%",
                        backgroundColor: pinStatus == 'setting' ? '#A9A9A9' : '#FFFFFF',
                      }}
                    ></View>
                  </>
                );
              })}
            </View>
          ) : (
            <></>
          )}
        </View>

        <View
          style={{
            justifyContent: "center",
            //backgroundColor: "red",
            alignContent: "center",
          }}
        >
          {pinStatus == "" ? (
            <>
              <TouchableOpacity
                style={{
                  alignSelf: "center",
                  width: 150,
                  height: 50,
                  borderColor: "#0004",
                  borderWidth: 1,
                  pading: 16,
                  marginBottom: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 15,
                  backgroundColor: "#D9D9D9",
                }}
                title="Register"
                onPress={() => {
                  setPinStatus("setting");
                }}
              >
                <Text style={{ color: "#000", fontWeight: "400" }}>
                  Setting Pin
                </Text>
              </TouchableOpacity>
              <Text style={{ color: "#000", alignSelf: "center" }}>
                Next {">"}
              </Text>
            </>
          ) : (
            <></>
          )}
        </View>

        <View
          style={{
            justifyContent: "center",
            //backgroundColor: "red",
            alignContent: "center",
          }}
        >
          {pinStatus == "setting" ? (
            <TouchableOpacity
              style={{
                alignSelf: "center",
                width: 150,
                height: 50,
                borderColor: "#0004",
                borderWidth: 1,
                pading: 16,
                marginBottom: 5,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 15,
                backgroundColor: "#D9D9D9",
              }}
              title="Register"
              onPress={() => {
                setPinStatus("confirm");
                setTimeout(() => {
                  navigationNextPage('Email');
                }, 3000);
              }}
            >
              <Text style={{ color: "#000", fontWeight: "400" }}>
                Confirm Pin
              </Text>
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
        <View
          style={{
            flex: 2,
            //backgroundColor: "green"
          }}
        ></View>
      </View>
    </BackgroundImage>
  );
}

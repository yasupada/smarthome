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
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';

import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";


export default function EmailScreen(props) {
  const [email, setEmail] = useState("");
  const [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });
  
  checkEmail = async () => {
    const token = await AsyncStorage.getItem("email");
    if (token) {
      const _username = await AsyncStorage.getItem("email");
      setEmail(`${_username}`);
    }
  };

  useEffect(() => {
    setNavigationOption();
    checkLogin();
  }, []);

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
      {/* Login section */}
      <View
        style={{
          flex: 1,
          borderRadius: 10,
          marginTop: 50,
          marginLeft: 30,
          marginRight: 30,
          marginBottom: 200,
          flexDirection: "column",
          backgroundColor: "#fff",
          paddingTop: 30,
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <View>
          <Image
            style={{
              borderRadius: 0,
              marginTop: "10%",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "15%",
              flexDirection: "row",
              backgroundColor: "#fff3",
            }}
            source={require("./assets/img/Banner.png")}
          />
        </View>

        {/* Username  */}
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 100,
          }}
        >
          {/* <View
            style={{
              width: 35,
              height: 35,
              backgroundColor: '#ddd',
              borderRadius: 35 / 2,
            }}
          /> */}
          <Input
            autoCapitalize="none"
            value={email}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            onChangeText={(text) => setAccount({ email: text })}
            placeholder="Phone"
            keyboardType="phone-pad"
            style={{
              // backgroundColor: "#0001",
              borderColor: "#C8C8C8",
              borderWidth: 1,
              flex: 1,
              marginLeft: 8,
              borderRadius: 8,
              marginRight: 8,
              paddingLeft: 16,
            }}
          />
        </View>

        {/* Login Button */}
        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 157,
              height: 35,
              borderColor: "#0004",
              borderWidth: 1,
              marginTop: 0,
              marginBottom: 20,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              backgroundColor: "#373737",
              borderRadius: 7,
            }}
            title="Login"
            onPress={async () => {
              await AsyncStorage.setItem("email", `${email}`);
              props.navigation.navigate("Otp");
            }}
          >
            <Text style={{ fontFamily: 'Inter_100Thin', color: "#FFF", fontWeight: "600" }}>Send OTP</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Banner Image */}
      {/* <Image
        style={{height: 100, width: '100%', marginTop: 30}}
        resizeMode="contain"
        source={require('./assets/img/banner_react_map.png')}
      /> */}
    </BackgroundImage>
  );
}

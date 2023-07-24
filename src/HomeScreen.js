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

export default function HomeScreen(props) {
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
  
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });

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
      source={require('./assets/img/bg1.png')}
      style={{
        // backgroundColor: "#eee",
        flex: 1,
      }}
    >
      {/* Login section */}
      <View
        style={{
          flex: 0.65,
          borderRadius: 10,
          marginTop: 50,
          marginLeft: 30,
          marginRight: 30,
          flexDirection: "column",
          backgroundColor: "#fff",
          paddingTop: 30,
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <View>
        <Image style={{
          borderRadius: 0,
          marginTop: '10%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '15%',
          flexDirection: 'row',
          backgroundColor: '#fff3'
        }} source={require('./assets/img/Banner.png')} />
        </View>
        {/* Username  */}
        <View style={{ flexDirection: "column", alignItems: "center" }}>
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
            value={account.username}
            inputContainerStyle={{borderBottomWidth:0}} 
            onChangeText={(text) => setAccount({ ...account, username: text })}
            placeholder="User"
            keyboardType="email-address"
            style={{
              // backgroundColor: "#0001",
              borderColor: '#C8C8C8',
              borderWidth: 1,
              flex: 1,
              marginLeft: 8,
              borderRadius: 8,
              marginRight: 8,
              paddingLeft: 16,
            }}
          />
        </View>

        {/* Password  */}
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}
        >
          {/* <View
            style={{
              width: 35,
              height: 35,
              backgroundColor: '#ddd',
              borderRadius: 35 / 2,
            }}
          /> */}
          <View style={{flex: 1,flexDirection: 'column'}}>
          <Input
            autoCapitalize="none"
            value={account.password}
            inputContainerStyle={{borderBottomWidth:0}} 
            onChangeText={(text) => setAccount({ ...account, password: text })}
            placeholder="Password"
            secureTextEntry
            style={{
              // backgroundColor: "#0001",
              borderColor: '#C8C8C8',
              borderWidth: 1,
              flex: 1,
              borderRadius: 8,
              marginLeft: 8,
              marginRight: 8,
              paddingLeft: 16,
              paddingBottom: 0
            }}
          />
          <View>
          <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Otp')
          }}
          style={{alignItems: 'flex-end'}}>
          <Text>forgot password</Text>
          </TouchableOpacity>
          </View>
          </View>
        </View>

        {/* Login Button */}
        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity style={{
            width: 70,
            height: 30,
            borderColor: "#0004",
            borderWidth: 1,
            marginTop: 8,
            marginBottom: 20,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            backgroundColor: '#373737', 
            borderRadius: 7}} title="Login" onPress={onLogin}>
            <Text style={{ fontFamily: 'Inter_100Thin',color: '#F1F1F1', fontWeight: '800'}}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* Register button */}
        <TouchableOpacity
          onPress={() => {
            // alert('Register');
            props.navigation.navigate("Register");
          }}
          style={{
            flexDirection: 'row',
            height: 35,
            marginTop: 8,
            marginBottom: 20,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text style={{ fontFamily: 'Inter_100Thin',color: '#800000'}}>Or </Text>
          <Text style={{ fontFamily: 'Inter_100Thin',color: '#800000'}}>Register</Text>
        </TouchableOpacity>
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

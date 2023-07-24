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


export default function OtpScreen(props) {
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
  
  const [otpCode, setOtpCode] = useState({
    pad1: null,
    pad2: null,
    pad3: null,
    pad4: null
  });


  useEffect(() => {
    setNavigationOption();
  }, []);


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

        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 50,
          }}
        >
          <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
          <Text style={{ fontFamily: 'Inter_100Thin',color: '#595959', textAlign: 'left', fontSize: 10}}>    Code is sent to email</Text>
          <Text style={{ fontFamily: 'Inter_100Thin',color: '#595959', fontSize: 10}}>You’ll receive 4 digit code to verify next.</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 10, marginVertical: 20}}>
            {[0,1,2,3].map((item, index) => {
              return (
                <TextInput 
                key={index.toString()}
                  autoCapitalize="none"
                  value={''}
                  inputContainerStyle={{ borderBottomWidth: 0 }}
                  onChangeText={(text) => setOtpCode({ ...otpCode, pad1: text })}
                  maxLength={1}
                  placeholder=""
                  keyboardType="phone-pad"
                  style={{
                    borderColor: "#C8C8C8",
                    backgroundColor: '#E8E8E8',
                    borderWidth: 0.5,
                    borderRadius: 8,
                    paddingHorizontal: 5,
                    marginHorizontal: 10,
                    flex: 1,
                    height: 37
                  }} />
              )
            })}
          </View>

          <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
            <Text style={{ fontFamily: 'Inter_100Thin',textAlign: 'left', color: '#595959',fontSize: 10}}>Didn’t you receive code? Request again.</Text>
          </View>
        </View>

        {/* Login Button */}
        <View
          style={{
            marginTop: 50,
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
              // await AsyncStorage.setItem("otp", `${email}`);
              props.navigation.navigate("UsernamePS");
            }}
          >
            <Text style={{ fontFamily: 'Inter_100Thin', color: "#FFF", fontWeight: "600" }}>Submit</Text>
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

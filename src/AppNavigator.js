import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./HomeScreen";
import HomeMenuScreen from './HomeMenuScreen'
import RegisterScreen from "./RegisterScreen";
import JSONFeedScreen from "./JSONFeedScreen";
import ProfileScreen from "./ProfileScreen";
import CameraScreen from "./CameraScreen";
import YoutubeScreen from "./YoutubeScreen";
import PinScreen from "./PinScreen";
import EmailScreen from './EmailScreen'
import AsyncStorage from "@react-native-async-storage/async-storage";
import OtpScreen from "./OtpScreen";
import SettingUsernamePSScreen from "./SettingUsernamePS";
import DashboardScreen from './DashboardScreen'
import JsonViewAllScreen from './JsonViewAllScreen'
import JsonViewOneScreen from './JsonViewOneScreen'
import JsonViewSettingScreen from './JsonViewSettingScreen'
import JsonViewScheduleScreen from './JsonViewScheduleScreen'
import FavoriteScreen from './FavoriteScreen'
import HomeSettingScreen from "./HomeSettingScreen"
import SettingMeterScreen from './SettingMeterScreen'
import SettingElectScreen from "./SettingElectScreen"
import SettingAccountScreen from "./SettingAccountScreen"
import AccountPasswordSettingScreen from "./AccountPasswordSettingScreen"
import AccountEmailSettingScreen from "./AccountEmailSettingScreen"
import AccountPINSettingScreen from "./AccountPINSettingScreen"
import AccountUsernameSettingScree from "./AccountUsernameSettingScreen"
import AccountPINValidationScreen from "./AccountPINValidationScreen"

const Stack = createStackNavigator();

const RootStack = (props) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      {props.showAuthen ? (
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Login" }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ title: "Register" }}
          />
          <Stack.Screen
            name="Pin"
            component={PinScreen}
            options={{ title: "Setting PIN" }}
          />
          <Stack.Screen
            name="Email"
            component={EmailScreen}
            options={{ title: "Setting Email" }}
          />
          <Stack.Screen
            name="Otp"
            component={OtpScreen}
            options={{ title: "Setting Otp" }}
          />
          <Stack.Screen
            name="UsernamePS"
            component={SettingUsernamePSScreen}
            options={{ title: "Setting Username&Password" }}
          />
          <Stack.Screen
            name="Success"
            component={SuccessTab}
            options={successOption(props)}
          />
        </>
      ) : (
        <Stack.Screen
          name="Success"
          component={SuccessTab}
          options={successOption(props)}
        />
      )}
    </Stack.Navigator>
  );
};

const successOption = (props) => {
  return {
    headerShown: false,
    title: "Energy System",
    headerStyle: {
      backgroundColor: "#999CED",
    },
    headerTintColor: "#FFFFFF",
    headerTitleStyle: { color: "#fff" },
    headerBackTitle: " ",
    headerRight: () => (
      <TouchableOpacity
        activeOpacity={0.1}
        onPress={async () => {
          try {
            await AsyncStorage.removeItem("token");
          } catch (e) {}
          props.setIsReady(false);
        }}
        style={{ padding: 10 }}
      >
        <Icon
          name="sign-out"
          size={20}
          color="#fff"
          style={{
            height: 24,
            width: 24,
          }}
        />
      </TouchableOpacity>
    ),
  };
};

const Tab = createBottomTabNavigator();

const tabFavorit = {
  tabBarLabel: "Favorit",
  tabBarIcon: ({ focused }) => (
    <Image
      style={{
        height: 28,
        width: 28,
      }}
      resizeMode="contain"
      source={
        focused
          ? require("./assets/custome/home-hart-light-on.png")
          : require("./assets/custome/home-hert-light-off.png")
      }
    />
  ),
};

const tabEnergy = {
  tabBarLabel: "Energy",
  tabBarIcon: ({ focused }) => (
    <Image
      style={{
        height: 28,
        width: 28,
      }}
      resizeMode="contain"
      source={
        focused
          ? require("./assets/custome/flash_on.png")
          : require("./assets/custome/flash-off.png")
      }
    />
  ),
};

const tabMember = {
  tabBarLabel: "Member",
  tabBarIcon: ({ focused }) => (
    <Image
      style={{
        height: 28,
        width: 28,
      }}
      resizeMode="contain"
      source={
        focused
          ? require("./assets/custome/menu-member-on.png")
          : require("./assets/custome/menu-member-off.png")
      }
    />
  ),
};

const tab1 = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <Image
      style={{
        height: 28,
        width: 28,
      }}
      resizeMode="contain"
      source={
        focused
          ? require("./assets/img/ic_profile_select.png")
          : require("./assets/img/ic_profile.png")
      }
    />
  ),
};

const tab2 = {
  tabBarLabel: "Camera",
  tabBarIcon: ({ focused }) => (
    <Image
      style={{
        height: 28,
        width: 28,
      }}
      resizeMode="contain"
      source={
        focused
          ? require("./assets/img/ic_card_select.png")
          : require("./assets/img/ic_card.png")
      }
    />
  ),
};

const tabHome = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <Image
      style={{
        height: 73,
        width: 73,
        marginBottom: 30
      }}
      resizeMode="contain"
      source={
        focused
          ? require("./assets/custome/underground-menu-home-on.png")
          : require("./assets/custome/underground-menu-home-off.png")
      }
    />
  ),
};

const tabSetting = {
  tabBarLabel: "Setting",
  tabBarIcon: ({ focused }) => (
    <Image
      style={{
        height: 30,
        width: 30,
      }}
      resizeMode="contain"
      source={
        focused
          ? require("./assets/custome/setting-on.png")
          : require("./assets/custome/menu-setting-off.png")
      }
    />
  ),
};

const JSONStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="JSON" screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen component={JSONFeedScreen} name="JSON" />
      <Stack.Screen component={YoutubeScreen} name="Youtube" />
    </Stack.Navigator>
  );
};

const HomeStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="HomeJson" screenOptions={{
      headerShown: false
    }}>
      {/* <Stack.Screen component={FavoriteScreen} name="Favorite" /> */}
      <Stack.Screen component={HomeMenuScreen} name="HomeJson" />
      <Stack.Screen component={JsonViewAllScreen} name="JsonViewAll" />
      <Stack.Screen component={JsonViewOneScreen} name="JsonViewOne" />
      <Stack.Screen component={JsonViewSettingScreen} name="JsonViewSetting" />
      <Stack.Screen component={JsonViewScheduleScreen} name="JsonViewScheduleScreen"/>
    </Stack.Navigator>
  );
};

const EmptyScreen = (props) => {
return (
  <></>
)
}

const SettingStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="HomeSetting" screenOptions={{
      headerShown: false
    }}>
      {/* <Stack.Screen component={FavoriteScreen} name="Favorite" /> */}
      <Stack.Screen component={HomeSettingScreen} name="HomeSetting" />
      <Stack.Screen component={SettingMeterScreen} name="MeterSetting" />
      <Stack.Screen component={SettingAccountScreen} name="AccountSetting" />
      <Stack.Screen component={AccountUsernameSettingScree} name="AccountUsernameSetting" />
      <Stack.Screen component={AccountPasswordSettingScreen} name="AccountPasswordSetting" />
      <Stack.Screen component={AccountPINSettingScreen} name="AccountPINSetting" />
      <Stack.Screen component={AccountPINValidationScreen} name="AccountPINValidationSetting" />
      <Stack.Screen component={AccountEmailSettingScreen} name="AccountEmailSetting" />
      <Stack.Screen component={SettingElectScreen} name="ElecSetting" />
      <Stack.Screen component={EmptyScreen} name="AppSetting"/>
    </Stack.Navigator>
  );
};

const SuccessTab = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{
      headerShown: false,
      tabBarStyle: { height: 100 },
    }}>
      <>
        <Tab.Screen name="Favorite" component={FavoriteScreen} options={tabFavorit} />
        <Tab.Screen name="Energy" component={DashboardScreen} options={tabEnergy} />
        <Tab.Screen name="Home" component={HomeStackScreen} options={tabHome} />
        <Tab.Screen name="Member" component={ProfileScreen} options={tabMember} />
        <Tab.Screen name="Setting" component={SettingStackScreen} options={tabSetting} />
      </>
    </Tab.Navigator>
  );
};

export default RootStack;

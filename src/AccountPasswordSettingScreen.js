import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button, Input } from "react-native-elements";
import Toggle from "react-native-toggle-element";
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

import { YouTubeStandaloneAndroid } from "react-native-youtube";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./actions/jsonfeedscreen.action";

export default function AccountPasswordSettingScreen(props) {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
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

  const pageName = "home" | "RenderMyListView" | "ListView" | "";

  const jsonReducer = useSelector((state) => state.jsonReducer);
  const loginReducer = useSelector((state) => state.loginReducer);

  const [backButton, setbackButton] = useState({
    show: false,
    useFunction: true,
  });
  const [toggleValue, setToggleValue] = useState(false);
  const [indexFocus, setIndexFocus] = useState(0);
  const [indexRenderFocus, setIndexRenderFocus] = useState(0); //0 is default home

  const [energyData, setEnergyData] = useState({
    msgCode: 200,
    msgText: "Ok",
    result: [
      {
        name: "Floor 1",
        data: [
          {
            id: 1,
            dataName: "Living Room 1",
            datText: "",
            img: null,
            cclor: "#fff",
            itemfavorite: true,
            detail: [
              // { id: 1, no: 1, cclor: "blue", dataText: "", enable: true },
            ],
            items: [
              {
                id: 1,
                name: "Light 1 FE",
                shortName: "L1",
                typeItem: "light",
                setValue: 65,
                valueName: "%",
                powerStatus: 0,
                detailSetting: { schedule: [] },
                citemColor: "",
                itemfavorite: false,
                trackingStatus: false,
                lastTime: "",
                enable: true,
              },
              {
                id: 2,
                name: "Light 2 CT",
                shortName: "L2",
                typeItem: "light",
                setValue: 57,
                valueName: "%",
                powerStatus: 1,
                detailSetting: { schedule: [] },
                citemColor: "",
                itemfavorite: false,
                trackingStatus: false,
                lastTime: "",
                enable: true,
              },
              {
                id: 3,
                name: "Light 3 BO",
                shortName: "L3",
                typeItem: "light",
                setValue: 60,
                valueName: "%",
                powerStatus: 1,
                detailSetting: { schedule: [] },
                citemColor: "",
                itemfavorite: false,
                trackingStatus: false,
                lastTime: "",
                enable: true,
              },
              {
                id: 4,
                name: "Air 1",
                shortName: "AR1",
                typeItem: "air",
                setValue: 25,
                valueName: "%",
                powerStatus: 1,
                detailSetting: { swingValue: 30, schedule: [] },
                citemColor: "",
                itemfavorite: false,
                trackingStatus: false,
                lastTime: "",
                enable: true,
              },
              {
                id: 4,
                name: "Air 1",
                shortName: "AR2",
                typeItem: "air",
                setValue: 27,
                valueName: "%",
                powerStatus: 0,
                detailSetting: { swingValue: 30, schedule: [] },
                citemColor: "",
                itemfavorite: false,
                trackingStatus: false,
                lastTime: "",
                enable: true,
              },
            ],
            enable: true,
          },
          {
            id: 2,
            dataName: "Work Space 1",
            datText: "",
            img: null,
            cclor: "#fff",
            itemfavorite: false,
            detail: [
              // { id: 1, no: 1, cclor: "blue", dataText: "", enable: true },
            ],
            enable: true,
          },
          {
            id: 4,
            dataName: "Bed Room2",
            datText: "",
            img: null,
            cclor: "#fff",
            itemfavorite: false,
            detail: [
              // { id: 1, no: 1, cclor: "blue", dataText: "", enable: true },
            ],
            enable: true,
          },
          {
            id: 4,
            dataName: "Bath Room1",
            datText: "",
            img: null,
            cclor: "#fff",
            itemfavorite: false,
            detail: [
              // { id: 1, no: 1, cclor: "blue", dataText: "", enable: true },
            ],
            enable: true,
          },
          {
            id: 5,
            dataName: "Bath Room2",
            datText: "",
            img: null,
            cclor: "#fff",
            itemfavorite: false,
            detail: [
              {
                id: 1,
                no: 1,
                cclor: "blue",
                dataText: " 15 °C ",
                enable: true,
              },
              {
                id: 2,
                no: 2,
                cclor: "lightblue",
                dataText: " 74% ",
                enable: true,
              },
            ],
            enable: true,
          },
          {
            id: 6,
            dataName: "Bath Room3",
            datText: "",
            img: null,
            cclor: "#fff",
            itemfavorite: false,
            detail: [
              {
                id: 1,
                no: 1,
                cclor: "green",
                dataText: " 20 °C ",
                enable: true,
              },
              {
                id: 2,
                no: 2,
                cclor: "lightblue",
                dataText: " 74% ",
                enable: true,
              },
            ],
            enable: true,
          },
        ],
      },
      {
        name: "Floor 2",
        data: [
          {
            id: 1,
            dataName: "Living Room 1",
            datText: "",
            img: null,
            cclor: "#fff",
            itemfavorite: false,
            detail: [
              // { id: 1, no: 1, cclor: "blue", dataText: "", enable: true },
            ],
            enable: true,
          },
          {
            id: 2,
            dataName: "Work Space 1",
            datText: "",
            img: null,
            cclor: "#fff",
            itemfavorite: false,
            detail: [
              // { id: 1, no: 1, cclor: "blue", dataText: "", enable: true },
            ],
            enable: true,
          },
          {
            id: 4,
            dataName: "Bed Room2",
            datText: "",
            img: null,
            cclor: "#fff",
            itemfavorite: false,
            detail: [
              // { id: 1, no: 1, cclor: "blue", dataText: "", enable: true },
            ],
            enable: true,
          },
          {
            id: 4,
            dataName: "Bath Room1",
            datText: "",
            img: null,
            cclor: "#fff",
            itemfavorite: false,
            detail: [
              // { id: 1, no: 1, cclor: "blue", dataText: "", enable: true },
            ],
            enable: true,
          },
        ],
      },
      {
        name: "Floor 3",
        data: [
          {
            id: 1,
            dataName: "Living Room 1",
            datText: "",
            img: null,
            cclor: "#fff",
            itemfavorite: false,
            detail: [
              // { id: 1, no: 1, cclor: "blue", dataText: "", enable: true },
            ],
            enable: true,
          },
          {
            id: 2,
            dataName: "Work Space 1",
            datText: "",
            img: null,
            cclor: "#fff",
            itemfavorite: false,
            detail: [
              // { id: 1, no: 1, cclor: "blue", dataText: "", enable: true },
            ],
            enable: true,
          },
          {
            id: 4,
            dataName: "Bed Room2",
            datText: "",
            img: null,
            cclor: "#fff",
            itemfavorite: false,
            detail: [
              {
                id: 1,
                no: 1,
                cclor: "orange",
                dataText: " 25 °C",
                enable: true,
              },
            ],
            enable: true,
          },
          {
            id: 4,
            dataName: "Bath Room1",
            datText: "",
            img: null,
            cclor: "#fff",
            itemfavorite: false,
            detail: [
              { id: 1, no: 1, cclor: "red", dataText: " 30 °C ", enable: true },
              {
                id: 2,
                no: 2,
                cclor: "lightblue",
                dataText: " 74% ",
                enable: true,
              },
            ],
            enable: true,
          },
        ],
      },
    ],
  });

  const dispatch = useDispatch();

  React.useEffect(() => {
    //dispatch(actions.feedJSON());
  }, []);

  return (
    <View
      style={[
        styles.container,
        { flexDirection: "column", justifyContent: "flex-start" },
      ]}
    >
      <ImageBackground
        resizeMode={"stretch"}
        resizeMethod={"scale"}
        style={{
          flex: 1,
          height: 150,
        }}
        source={require("./assets/custome/header-home.png")}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 25,
            paddingVertical: 25,
          }}
        >
          <View style={{ flex: 1, height: 50 }}>
            <View
              style={{
                width: 50,
                height: 50,
                // backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  if (backButton.useFunction) {
                    props.navigation.goBack();
                    console.log("back action! " + indexRenderFocus);
                  } else {
                    console.log("not allow back action!");
                  }
                }}
              >
                <Image
                  source={require("./assets/custome/home-menu-arrow-left.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              height: 50,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <Text style={{ fontFamily: 'Inter_100Thin', fontSize: 20, color: "#fff", fontWeight: "400" }}>
                Knight Prx
              </Text>
              <View
                style={{
                  width: 41,
                  height: 41,
                  marginLeft: 30,
                  borderRadius: 50,
                  backgroundColor: "#CAAAA8",
                }}
              ></View>
            </View>
          </View>
        </View>
      </ImageBackground>
      <ScrollView
        scrollsToTop={false}
        style={{
          height: screenHeight,
          position: "absolute",
          width: "100%",
          top: 120,
          // backgroundColor: "green",
        }}
      >
        {/* END */}
        <View
          style={{
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "green",
            // marginBottom: 700,
          }}
        >
          <Text style={{ fontFamily: 'Inter_100Thin', fontSize: 25, fontWeight: "700", color: "#fff" }}>
            Setting Password
          </Text>
        </View>

        {/* FLOR LIST RENDER */}
        <View
          style={{
            flex: 1,
            // paddingHorizontal: 10,
            marginTop: 50,
            // backgroundColor: "blue",
          }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontFamily: 'Inter_100Thin', color: "#AE0000", fontSize: 22 }}>Change Password</Text>
          </View>
          <View style={{ flex: 1, marginTop: 30, paddingHorizontal: 50, }}>
          <Input
              autoCapitalize="none"
              onChangeText={(text) => {
                console.log(text);
              }}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              placeholder={""}
              keyboardType={'default'}
              secureTextEntry={true}
              style={{
                backgroundColor: "#0001",
                flex: 1,
                marginLeft: 8,
                borderRadius: 8,
                marginRight: 8,
                paddingLeft: 16,
              }}
            />
            <Button
                  buttonStyle={{
                    marginTop: 50,
                    marginHorizontal: 100,
                    backgroundColor: "#B20D0D",
                  }}
                  title={"Confirm"}
                />
          </View>
        </View>
        {/* END-FLOR LIST RENDER */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  list_header: {
    width: "100%",
    height: 100,
  },
  listCard: {
    overflow: "hidden",
    flexDirection: "column",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 0,
  },
  listCardView: {
    flexDirection: "row",
    marginBottom: 16,
    height: 45,
    alignItems: "center",
  },
  listAvatar: {
    width: 45,
    height: "100%",
    marginRight: 16,
  },
  listTitleSubtitleContainer: {
    flexDirection: "column",
    marginRight: 16,
    flex: 1,
  },
  listTitle: {
    fontWeight: "700",
  },
  listSubTitle: {
    fontWeight: "100",
  },
  listYoutbeImage: {
    width: "100%",
    height: 190,
  },
});

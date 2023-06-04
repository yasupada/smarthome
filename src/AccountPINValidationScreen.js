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

import { YouTubeStandaloneAndroid } from "react-native-youtube";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./actions/jsonfeedscreen.action";

export default function AccountPINValidationScreen(props) {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;

  const jsonReducer = useSelector((state) => state.jsonReducer);
  const loginReducer = useSelector((state) => state.loginReducer);

  const [backButton, setbackButton] = useState({
    show: false,
    useFunction: true,
  });
  const [toggleValue, setToggleValue] = useState(false);
  const [indexFocus, setIndexFocus] = useState(0);
  const [indexRenderFocus, setIndexRenderFocus] = useState(0); //0 is default home

  const [pinCode, setPinCode] = useState([null, null, null, null]);
  const [pinStatus, setPinStatus] = useState("readme");

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
          height: 200,
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
              <Text style={{ fontSize: 20, color: "#fff", fontWeight: "400" }}>
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
          <Text style={{ fontSize: 25, fontWeight: "700", color: "#fff" }}>
            {/* Setting PIN CODE */}
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
            {/* <Text style={{ color: "#AE0000", fontSize: 22 }}>PIN CODE</Text> */}
          </View>
          <View style={{ flex: 1, marginTop: 30 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              {pinStatus == "readme" ? (
                <View
                  style={{
                    width: "100%",
                    alignItems: "center",
                    paddingHorizontal: 50,
                  }}
                >
                  <Text style={{ fontSize: 22, fontWeight: "400" }}>
                    Account Authentication
                  </Text>
                  <Text style={{ marginTop: 50 }}>
                    We need to check whether your Email is valid to verify your
                    identity. Send verification code to email name
                    Knight@prx.com
                  </Text>
                  <Button
                    onPress={() => {
                      setPinStatus("setting");
                    }}
                    buttonStyle={{
                      marginTop: 50,
                      marginHorizontal: 100,
                      backgroundColor: "#000",
                      padding: 10,
                    }}
                    title={"Sent"}
                  />
                </View>
              ) : (
                <></>
              )}

              {pinStatus == "setting" || pinStatus == "valid" ? (
                <View>
                  <View>
                    <Text style={{ textAlign: "center" }}>
                      You’ll receive 4 digit code to verify next.
                    </Text>
                  </View>
                  <View
                    style={{
                      marginTop: 50,
                      paddingHorizontal: 30,
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    {[1, 2, 3, 4].map((item, index) => {
                      return (
                        <View
                          key={{ index }}
                          style={{
                            width: 30,
                            height: 30,
                            borderWidth: 0.5,
                            borderRadius: "5%",
                            backgroundColor:
                              pinStatus == "setting" ? "#E8E8E8" : "#E8E8E8",
                          }}
                        ></View>
                      );
                    })}
                  </View>
                  <View style={{ paddingHorizontal: 65, marginTop: 16 }}>
                    <Text style={{ textAlign: "right" }}>59s</Text>
                  </View>
                  <View style={{ paddingHorizontal: 50, marginTop: 16 }}>
                    <Text style={{ paddingLeft: 16 }}>
                      Didn’t you receive code? Request again.
                    </Text>
                  </View>
                  <View>
                    <Button
                      onPress={() => {
                        setPinStatus("valid");
                        setTimeout(() => {
                          setPinStatus("new");
                        }, 1500);
                      }}
                      buttonStyle={{
                        marginTop: 50,
                        marginHorizontal: 100,
                        backgroundColor: "#000",
                        padding: 10,
                      }}
                      title={"Confirm"}
                    />
                  </View>
                  {pinStatus == "valid" ? (
                    <Image
                      source={require("./assets/custome/valid-complete.png")}
                      style={{
                        position: "absolute",
                        top: 30,
                        left: screenWidth / 6 + 10,
                        width: 300,
                        height: 300,
                        // backgroundColor: "yellow",
                      }}
                    ></Image>
                  ) : (
                    <></>
                  )}
                </View>
              ) : (
                <></>
              )}

              {pinStatus == "new" ? (
                <View>
                  <Input
                    autoCapitalize="none"
                    onChangeText={(text) => {
                      console.log(text);
                    }}
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                    placeholder={"Password"}
                    keyboardType={"default"}
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
                    onPress={() => {
                      setPinStatus("readme");
                      props.navigation.navigate("AccountSetting");
                    }}
                    buttonStyle={{
                      marginTop: 50,
                      marginHorizontal: 100,
                      backgroundColor: "#000",
                      padding: 10,
                    }}
                    title={"Confirm"}
                  />
                </View>
              ) : (
                <></>
              )}
            </View>
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

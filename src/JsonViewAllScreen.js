import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { YouTubeStandaloneAndroid } from "react-native-youtube";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./actions/jsonfeedscreen.action";
import { BackgroundImage } from "react-native-elements/dist/config";

export default function JsonViewAllScreen(props) {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const pageName = "home" | "RenderMyListView" | "ListView" | "";

  const jsonReducer = useSelector((state) => state.jsonReducer);
  const loginReducer = useSelector((state) => state.loginReducer);

  const [backButton, setbackButton] = useState({
    show: false,
    useFunction: true,
  });
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
          height: "100%",
          top: 100,
          // backgroundColor: 'green'
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
            Position
          </Text>
        </View>

        {/* FLOR LIST RENDER */}
        <View
          style={{
            flex: 1,
            // backgroundColor: 'red'
          }}
        >
          {energyData.result !== null ? (
            <View>
              {energyData.result.map((rootItem, rootIndex) => {
                return (
                  <View key={rootIndex.toString()}>
                    <View
                      style={{
                        marginBottom: 10,
                        paddingHorizontal: 50,
                        // backgroundColor: "#fff",
                      }}
                    >
                      <Text style={{fontSize: 20}}>{rootItem.name}</Text>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          justifyContent: "space-between",
                          // paddingHorizontal: 50,
                          paddingVertical: 10,
                          flexWrap: "wrap",
                          alignItems: "flex-start",
                          // marginBottom: 130,
                        }}
                      >
                        {rootItem.data.map((SubItem, SubIndex) => {
                          return (
                            <TouchableOpacity
                              onPress={() => {
                                props.navigation.navigate('JsonViewOne',{
                                  SubItem
                                });
                                console.log("onRender-sub-Touch: idx=", {rootIndex, SubIndex});
                              }}
                              key={`${rootIndex}-${SubIndex.toString()}`}
                              style={{
                                width: "50%",
                                flexDirection: "row",
                                padding: 5,
                                // borderWidth: 0.5,
                                //  borderRadius: 5,
                                margin: 0,
                                // borderColor: "red",
                                borderRadius: 0,
                              }}
                            >
                              <View
                                style={{
                                  flexDirection: "row",
                                  width: "100%",
                                  height: "100%",
                                  // backgroundColor: 'green',
                                  borderWidth: 1,
                                  borderColor: "#CB9696",
                                  borderRadius: 10,
                                }}
                              >
                                <View
                                  style={{
                                    width: 30,
                                    height: 30,
                                    backgroundColor: "#D9D9D9",
                                    marginVertical: 10,
                                    marginLeft: 5,
                                    borderRadius: "50%",
                                  }}
                                />
                                <Text
                                  style={{
                                    position: "absolute",
                                    top: SubItem.detail.length > 0 ? 3 : 15,
                                    left: 45,
                                    fontSize: 16,
                                    // paddingLeft: 10,
                                    // paddingTop: 16,
                                    color: "#826464",
                                  }}
                                >
                                  {SubItem.dataName}
                                </Text>
                              </View>
                              <View
                                style={{
                                  position: "absolute",
                                  left: 50,
                                  top: 30,
                                  width: "65%",
                                  flex: 1,
                                  flexDirection: "row",
                                  // backgroundColor: "yellow",
                                  justifyContent: "space-around",
                                }}
                              >
                                {SubItem.detail != null &&
                                SubItem.detail.length > 0 ? (
                                  <>
                                    {SubItem.detail.map(
                                      (Sub3Item, Sub3Index) => {
                                        return (
                                          <>
                                            <View
                                              key={`id-${Sub3Index}`}
                                              style={{
                                                flex: 1,
                                                flexDirection: "row",
                                                height: 20,
                                                // backgroundColor: "red",
                                              }}
                                            >
                                              <View
                                                style={{
                                                  width: 20,
                                                  height: 20,
                                                  backgroundColor:
                                                    Sub3Item.cclor,
                                                }}
                                              ></View>
                                              <Text style={{ color: "#999" }}>
                                                {Sub3Item.dataText}
                                              </Text>
                                            </View>
                                          </>
                                        );
                                      }
                                    )}
                                  </>
                                ) : (
                                  <></>
                                )}
                              </View>
                            </TouchableOpacity>
                          );
                        })}
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          ) : (
            <></>
          )}
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

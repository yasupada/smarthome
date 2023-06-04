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

export default function HomeMenuScreen(props) {
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

  const [headerData, setHeaderData] = useState({
    msgCode: 200,
    msgText: "Ok",
    result: [
      {
        name: "Sub1",
        data: [
          { id: 1, dataTemp: 23, datText: "Temp" },
          { id: 2, dataTemp: 45, datText: "PM 2.5 (ug/m3)" },
          { id: 3, dataTemp: 405, datText: "Co2 (ppm)" },
          { id: 4, dataTemp: 0.02, datText: "HCHO (mg/m3)" },
        ],
      },
      {
        name: "Sub2",
        data: [
          { id: 1, dataTemp: 1, datText: "Temp" },
          { id: 2, dataTemp: 50, datText: "PM 2.5 (ug/m3)" },
          { id: 3, dataTemp: 100, datText: "Co2 (ppm)" },
          { id: 4, dataTemp: 0.02, datText: "HCHO (mg/m3)" },
        ],
      },
      {
        name: "Sub3",
        data: [
          { id: 1, dataTemp: 34, datText: "Temp" },
          { id: 2, dataTemp: 36, datText: "PM 2.5 (ug/m3)" },
          { id: 3, dataTemp: 110, datText: "Co2 (ppm)" },
          { id: 4, dataTemp: 0.01, datText: "HCHO (mg/m3)" },
        ],
      },
      {
        name: "Sub4",
        data: [
          { id: 1, dataTemp: 28, datText: "Temp" },
          { id: 2, dataTemp: 100, datText: "PM 2.5 (ug/m3)" },
          { id: 3, dataTemp: 1000, datText: "Co2 (ppm)" },
          { id: 4, dataTemp: 0.03, datText: "HCHO (mg/m3)" },
        ],
      },
    ],
  });

  const [dashboardData, setDashboardData] = useState({
    status: "OK",
    data: [
      {
        plant_name_th: "บ้านคุณสิงห์โต",
        capacity: 10.9,
        irrSensor: 0,
        airSensor: 0,
        hmSensor: 0,
        pvSensor: 0,
        wsSensor: -1,
        production_power_now: 6.87,
        production_energy_today: 30.39,
        production_energy_month: 30.39,
        production_energy_total: 3048.5,
        production_saving_today: 122,
        production_saving_month: 122,
        production_saving_total: 12194,
        import_power_now: 0.38,
        used_power_now: 7.25,
        battery_status: "running",
        battery_status_charge: "discharging",
        battery_perc: 33,
        battery_power: 1732,
        last_update: "2023-05-30 13:30:11",
      },
    ],
  });

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

  const getSampleListFour = (index = 0) => {
    return energyData.result[index];
  };

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.feedJSON());
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode={"stretch"}
        resizeMethod={"scale"}
        style={{
          // flex: 1,
          height: 200,
          // backgroundColor: 'red'
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
              {indexRenderFocus != 0 ? (
                <TouchableOpacity
                  onPress={() => {
                    if (backButton.useFunction) {
                      if (indexRenderFocus > 0) {
                        const idx =
                          indexRenderFocus > 0 ? indexRenderFocus - 1 : 0;
                        setIndexRenderFocus(idx);
                      }
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
              ) : (
                <></>
              )}
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
        // scrollsToTop={false}
        contentOffset={{ x: 0, y: 150 }}
        style={{
          position: "absolute",
          top: 90,
          height: screenHeight,
          // flex: 1,
          // backgroundColor: 'green'
        }}
      >
        <View
          style={{
            flex: 1,
            marginTop: 30,
            marginBottom: 0,
            paddingHorizontal: 50,
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              height: 150,
              borderRadius: 20,
              borderWidth: 0.1,
            }}
          >
            <View
              style={{
                position: "absolute",
                height: 150 - 20,
                marginVertical: 10,
                left: (screenWidth - 100) / 2,
                borderRightWidth: 1,
                borderRightColor: "#F5F5F5",
              }}
            />
            <View
              style={{
                position: "absolute",
                top: 150 / 2,
                left: 0,
                right: 0,
                borderBottomColor: "#F5F5F5",
                borderBottomWidth: 1,
                marginHorizontal: 10,
              }}
            />
            {headerData.result.length > 0 ? (
              <TouchableOpacity
                onPress={() => {
                  const idx =
                    indexFocus < headerData.result.length - 1
                      ? indexFocus + 1
                      : 0;
                  setIndexFocus(idx);
                }}
              >
                <ImageBackground
                  source={require("./assets/custome/arrow-right-home.png")}
                  style={{
                    position: "absolute",
                    top: 150 / 2 - 15,
                    right: -15,
                    width: 30,
                    height: 30,
                    // backgroundColor: 'red'
                  }}
                />
              </TouchableOpacity>
            ) : (
              <></>
            )}

            {indexFocus > 0 ? (
              <TouchableOpacity
                onPress={() => {
                  const idx = indexFocus > 0 ? indexFocus - 1 : 0;
                  setIndexFocus(idx);
                }}
              >
                <ImageBackground
                  source={require("./assets/custome/arrow-left-home.png")}
                  style={{
                    position: "absolute",
                    top: 150 / 2 - 15,
                    left: -15,
                    width: 30,
                    height: 30,
                    // backgroundColor: 'red'
                  }}
                />
              </TouchableOpacity>
            ) : (
              <></>
            )}

            {indexFocus === 0 ? (
              <>
                <ImageBackground
                  imageStyle={{
                    borderRadius: 50,
                  }}
                  source={require("./assets/custome/home-buttom-header.png")}
                  style={{
                    position: "absolute",
                    top: -15,
                    left: 20,
                    width: 75,
                    height: 30,
                    // backgroundColor: 'red',
                  }}
                >
                  <Text
                    style={{
                      paddingLeft: 20,
                      paddingTop: 5,
                      fontSize: 12,
                      fontWeight: "700",
                      color: "#fff",
                    }}
                  >
                    {headerData.result[indexFocus].name}
                  </Text>
                </ImageBackground>
              </>
            ) : (
              <></>
            )}

            {indexFocus !== 0 ? (
              <>
                <ImageBackground
                  imageStyle={{
                    borderRadius: 50,
                  }}
                  source={require("./assets/custome/home-buttom-header.png")}
                  style={{
                    position: "absolute",
                    top: -15,
                    left: 230,
                    width: 75,
                    height: 30,
                    // backgroundColor: 'red',
                  }}
                >
                  <Text
                    style={{
                      paddingLeft: 20,
                      paddingTop: 5,
                      fontSize: 12,
                      fontWeight: "700",
                      color: "#fff",
                    }}
                  >
                    {headerData.result[indexFocus].name}
                  </Text>
                </ImageBackground>
              </>
            ) : (
              <></>
            )}

            <View
              style={{
                // backgroundColor: "red",
                flex: 1,
                margin: 10,
              }}
            >
              <View style={[styles.row, { flex: 1 }]}>
                <View
                  style={{
                    flex: 1,
                    // backgroundColor: "red",
                    height: 130 / 2,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#826464",
                      fontSize: 20,
                      fontWeight: "600",
                    }}
                  >
                    {headerData.result[indexFocus].data[0].dataTemp}
                  </Text>
                  <Text
                    style={{ color: "#000", fontSize: 13, fontWeight: "400" }}
                  >
                    {headerData.result[indexFocus].data[0].datText}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    // backgroundColor: "orange",
                    height: 130 / 2,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#826464",
                      fontSize: 20,
                      fontWeight: "600",
                    }}
                  >
                    {headerData.result[indexFocus].data[1].dataTemp}
                  </Text>
                  <Text
                    style={{ color: "#000", fontSize: 13, fontWeight: "400" }}
                  >
                    {headerData.result[indexFocus].data[2].datText}
                  </Text>
                </View>
              </View>
              <View style={[styles.row, { flex: 1 }]}>
                <View
                  style={{
                    flex: 1,
                    // backgroundColor: "blue",
                    height: 130 / 2,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#826464",
                      fontSize: 20,
                      fontWeight: "600",
                    }}
                  >
                    {headerData.result[indexFocus].data[2].dataTemp}
                  </Text>
                  <Text
                    style={{ color: "#000", fontSize: 13, fontWeight: "400" }}
                  >
                    {headerData.result[indexFocus].data[2].datText}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    // backgroundColor: "pink",
                    height: 130 / 2,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#826464",
                      fontSize: 20,
                      fontWeight: "600",
                    }}
                  >
                    {headerData.result[indexFocus].data[3].dataTemp}
                  </Text>
                  <Text
                    style={{ color: "#000", fontSize: 13, fontWeight: "400" }}
                  >
                    {headerData.result[indexFocus].data[3].datText}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 7,
            marginTop: 0,
            // backgroundColor: "red",
            height: 50,
          }}
        >
          <View
            style={{
              height: 20,
              justifyContent: "center",
              alignItems: "flex-end",
              width: "100%",
              // backgroundColor: "#fff",
              marginTop: 30,
              marginBottom: 0,
              paddingHorizontal: 50,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("JsonViewAll");
                console.log("onViewAll Press!");
              }}
              style={{ flexDirection: "row" }}
            >
              <Text style={{ textDecorationLine: "underline" }}>View all</Text>
              <Text>{" > "}</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 50,
              paddingVertical: 10,
              flexWrap: "wrap",
              alignItems: "flex-start",
              marginBottom: 130,
            }}
          >
            {getSampleListFour(0)
              .data.filter((itm, idx) => {
                return idx < 4;
              })
              .map((item, index) => {
                return (
                  <TouchableOpacity
                    key={`id-${index}`}
                    onPress={() => {
                      props.navigation.navigate("JsonViewOne", {
                        SubItem: item,
                      });
                    }}
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
                          paddingLeft: 10,
                          paddingTop: 16,
                          color: "#826464",
                        }}
                      >
                        {item.dataName}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
          </View>

          <View
            style={{
              height: 25,
              justifyContent: "center",
              alignItems: "flex-start",
              // width: "100%",
              // backgroundColor: "#fff",
              // marginTop: 20,
              marginBottom: 10,
              paddingLeft: 50,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("Favorite");
                console.log("onFavorite Press!");
              }}
              style={{ flexDirection: "row", paddingLeft: 10 }}
            >
              <Image
                style={{ width: 20, height: 20, marginRight: 5 }}
                source={require("./assets/custome/home-hart-light-on.png")}
              />
              <Text style={{ textDecorationLine: "underline" }}>Favorite</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              height: 76,
              // backgroundColor: 'orange',
              paddingHorizontal: 50,
            }}
          >
            {getSampleListFour(0)
              .data.filter((itm, idx) => {
                return idx < 3;
              })
              .map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate("JsonViewOne", {
                        SubItem: item,
                      });
                    }}
                    key={index.toString()}
                    style={{
                      flex: 1,
                      height: "100%",
                      borderRadius: 15,
                      backgroundColor: "#fff",
                      marginLeft: 5,
                      borderWidth: 0.1,
                      borderColor: "#ddd",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 16, fontWeight: "600" }}>
                      {item.dataName}
                    </Text>
                    <Text style={{ fontSize: 14 }}>Floor {index + 1}</Text>
                  </TouchableOpacity>
                );
              })}
          </View>

          <View style={{
            // backgroundColor: '#999', 
            // marginHorizontal: 10,
            // marginVertical: 10,
            height: 250,
            justifyContent: 'center',
            alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#000',
                height: 200,
                borderRadius: 25,
                paddingRight: 10, 
                paddingTop: 10,
                paddingBottom: 10
              }}
            >
              <Image
                imageStyle={{ height: "100%", width: "100%" }}
                source={require("./assets/custome/dashboard-energy-home.png")}
              />
              <View style={{ position: "absolute", top: 45, left: 55 }}>
                <Text style={{ color: "#fff", textAlign: "center" }}>
                  9.00 Kw
                </Text>
              </View>
              <View style={{ position: "absolute", top: 133, left: 70 }}>
                <Text
                  style={{
                    color: "#05FF00",
                    textAlign: "center",
                    fontSize: 10,
                  }}
                >
                  80%
                </Text>
              </View>

              <View style={{ position: "absolute", top: 165, left: 60 }}>
                <Text style={{ color: "#fff", textAlign: "center" }}>
                  9.00 Kw
                </Text>
              </View>

              <View style={{ position: "absolute", top: 170, left: 190 }}>
                <Text style={{ color: "#fff", textAlign: "center" }}>
                  9.00 Kw
                </Text>
              </View>
              <View style={{ position: "absolute", top: 45, right: 0 }}>
                <Text style={{ color: "#fff", textAlign: "center" }}>
                  0.333 Kw
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 100 }} />
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

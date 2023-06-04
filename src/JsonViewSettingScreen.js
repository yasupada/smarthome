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
  Animated,
} from "react-native";
import { Slider, Icon } from "react-native-elements";
import { YouTubeStandaloneAndroid } from "react-native-youtube";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./actions/jsonfeedscreen.action";
import { BackgroundImage } from "react-native-elements/dist/config";
const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const getImageNameByType = (item) => {
  const imageName1 = require("./assets/custome/light-off.png");
  const imageName2 = require("./assets/custome/light-on.png");
  const imageName3 = require("./assets/custome/view-one-air-off.png");
  const imageName4 = require("./assets/custome/view-one-air-on.png");

  if (item.typeItem === "light") {
    if (item.powerStatus === 0) {
      return imageName1;
    } else {
      return imageName2;
    }
  } else if (item.typeItem === "air") {
    if (item.powerStatus === 0) {
      return imageName3;
    } else {
      return imageName4;
    }
  } else {
    //tudo...
  }
  return null;
};

function JsonSettingAir(props) {
  const { SubItem } = props.route.params;
  const [backButton, setbackButton] = useState({
    show: false,
    useFunction: true,
  });
  const [value, setValue] = useState(50);
  const [itemTemp, setItemTemp] = useState({});
  const [itemTempMode, setItemTempMode] = useState(1);
  const [currenTempData, setCurrentTempData] = useState(1);
  const [indexTempFocus, setIndexTempFocus] = useState(25);
  const [levelTempFocus, setLevelTempFocus] = useState(3);
  const [swingTempStatus, setSwingTempStatus] = useState(0);

  React.useEffect(() => {
    setValue(SubItem.setValue);
    setItemTemp(SubItem);
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
                Knight Prx.A
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

        {/* <Text>A:: {JSON.stringify(itemTemp)}</Text> */}
        <View
          style={{
            flexDirection: "row",
            // backgroundColor: "red",
            height: 150,
          }}
        >
          <View
            style={{ 
                flex: 3, 
                // backgroundColor: "green", 
                alignItems: "center" }}
          >
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => {
                setItemTemp({
                  ...itemTemp,
                  powerStatus: itemTemp.powerStatus == 1 ? 0 : 1,
                });
              }}
            >
              <Image
                source={getImageNameByType(itemTemp)}
                style={{
                  // backgroundColor: "#D9D9D9",
                  marginVertical: 10,
                  marginLeft: 150,
                  // borderRadius: "50%",
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 50,
            //   backgroundColor: "brown",
            }}
          >
            <View style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 30 }}>27</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                const dataSetMode = itemTempMode < 3 ? itemTempMode + 1 : 1;
                setItemTempMode(dataSetMode);
              }}
            >
              {itemTempMode === 1 ? (
                <Image source={require("./assets/custome/air1.png")} />
              ) : (
                <></>
              )}
              {itemTempMode === 2 ? (
                <Image source={require("./assets/custome/air2.png")} />
              ) : (
                <></>
              )}
              {itemTempMode === 3 ? (
                <Image source={require("./assets/custome/air3.png")} />
              ) : (
                <></>
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "space-around",
            flexDirection: "row",
            height: 90,
            // backgroundColor: "yellow",
            paddingHorizontal: 30,
          }}
        >
          {[12, 22, 23, 24, 25, 27, 28, 29].map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setIndexTempFocus(item);
                }}
                key={index}
                style={{ alignContent: "center", justifyContent: "center" }}
              >
                <View style={{ height: 50 }}>
                  <View
                    style={{
                      width: 30,
                      height: 30,
                    //   backgroundColor: "red",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 27, color: indexTempFocus === item ? "#39ACFF": "#826464" }}>{item}</Text>
                  </View>
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      paddingTop: 10,
                      // backgroundColor: "blue"
                    }}
                  >
                    {indexTempFocus === item ? (
                      <Image
                        style={{ width: 30, height: 30 }}
                        source={require("./assets/custome/air-focus.png")}
                      />
                    ) : (
                      <></>
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <View
          style={{
            flex: 1,
            height: 250,
            marginHorizontal: 50,
            // backgroundColor: "pink",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: 'flex-end',
            paddingVertical: 20,
          }}
        >
          {[1,2,3,4,5].map((item, index) => {
            return (
              <TouchableOpacity
              onPress={() => {
                setLevelTempFocus(item)
              }}
                style={{
                  backgroundColor: levelTempFocus >= item ? "#0075FF" : "#D3D3D3",
                  width: 30,
                  height: item * 40
                }}
              >
                {/* <Text>{item}</Text> */}
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={{
            height: 200, 
            // backgroundColor: 'red'
            }}>
            <TouchableOpacity
            onPress={() => {
                const statusTemp = swingTempStatus == 1 ? 0 : 1;
                setSwingTempStatus(statusTemp)
            }}
            style={{position: 'absolute', left: 10, top: 20}}>
                {swingTempStatus == 1 ? (
                    <Image source={require('./assets/custome/swing-on.png')} />
                ): (
                    <Image source={require('./assets/custome/swing-off.png')} />
                )}
            </TouchableOpacity>
            <View>
            <View style={{position: 'absolute', top: -35, left: 90}}>
            {swingTempStatus == 0 ? (
                    <Image style={{width: 200, height: 200}} source={require('./assets/custome/swing-less.png')} />
                ): (
                    <Image style={{width: 200, height: 200}} source={require('./assets/custome/swing-more.png')} />
                )}
            </View>
            </View>
        </View>
      </ScrollView>
    </View>
  );
}

function JsonSettingLight(props) {
  const { SubItem } = props.route.params;
  const [backButton, setbackButton] = useState({
    show: false,
    useFunction: true,
  });
  const [value, setValue] = useState(50);
  const [itemTemp, setItemTemp] = useState({});

  React.useEffect(() => {
    setValue(SubItem.setValue);
    setItemTemp(SubItem);
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
                Knight Prx.L
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

        {/* <Text>L::{JSON.stringify(itemTemp)}</Text> */}
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              setItemTemp({
                ...itemTemp,
                powerStatus: itemTemp.powerStatus == 1 ? 0 : 1,
              });
            }}
          >
            <Image
              source={getImageNameByType(itemTemp)}
              style={{
                // backgroundColor: "#D9D9D9",
                marginVertical: 10,
                marginLeft: 5,
                // borderRadius: "50%",
              }}
            />
          </TouchableOpacity>
        </View>
        <Slider
          value={value}
          style={{ backgroundColor: "#fff", marginTop: 100 }}
          onValueChange={setValue}
          maximumValue={100}
          minimumValue={0}
          step={1}
          trackStyle={{ height: 50, backgroundColor: "transparent" }}
          thumbStyle={{ height: 50, width: 50, backgroundColor: "transparent" }}
          thumbProps={{
            children: (
              <View style={{ flexDirection: "row", width: 50 }}>
                <Text
                  style={{
                    color: "#fff",
                    position: "absolute",
                    fontSize: 30,
                    left: -75,
                    top: 6,
                  }}
                >
                  {value}%
                </Text>
                <Image
                  style={{ position: "absolute", right: 0, top: -50 }}
                  source={require("./assets/custome/slideIcon.png")}
                />
              </View>
            ),
          }}
        />
      </ScrollView>
    </View>
  );
}

export default function JsonViewAllScreen(props) {
  const pageName = "home" | "RenderMyListView" | "ListView" | "";

  const { SubItem } = props.route.params;

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
    result: [],
  });

  const dispatch = useDispatch();

  React.useEffect(() => {
    //dispatch(actions.feedJSON());
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* <Text>{JSON.stringify(SubItem)}</Text> */}
      {SubItem.typeItem === "light" ? <JsonSettingLight {...props} /> : <></>}
      {SubItem.typeItem === "air" ? <JsonSettingAir {...props} /> : <></>}
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

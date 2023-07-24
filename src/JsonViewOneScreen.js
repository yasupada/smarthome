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

export default function JsonViewOneScreen(props) {
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
  const { SubItem } = props.route.params;
  const jsonReducer = useSelector((state) => state.jsonReducer);
  const loginReducer = useSelector((state) => state.loginReducer);

  const [backButton, setbackButton] = useState({
    show: false,
    useFunction: true,
  });
  const [activePage, setActivePage] = useState(false);

  const [dataPage, setDataPage] = useState({
    id: 0,
    dataName: "",
    datText: "",
    img: null,
    cclor: "#fff",
    itemfavorite: true,
    detail: [
    ],
    items: [],
    enable: true,
  });

  const dispatch = useDispatch();

  const updateMenu = () => {
    const newItems = dataPage.items.filter((item, index) => {
      item.activeMenu = false;
      return item;
    });
    console.log('items filter:: ', newItems);
    //setDataPage({ ...dataPage, items: newItems });
    console.log("finish update ativeMenu!");
  };

  React.useEffect(() => {
    setDataPage(SubItem);
    
    console.log("data setting page:", dataPage);
    setTimeout(() => {
      //updateMenu();
      setActivePage(true);
    }, 1);
    console.log("recive setting data one:");
    //dispatch(actions.feedJSON());
  }, []);

  const getImageNameByType = (item) => {
    const imageName1 = require("./assets/custome/view-one-light-off.png");
    const imageName2 = require("./assets/custome/view-one-light-on.png");
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

  return (
    <>
      {activePage === true ? (
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
                        console.log("back action! ");
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
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ fontSize: 20, color: "#fff", fontWeight: "400" }}
                  >
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
            Position
          </Text>
        </View>

            {/* END */}
            <View
              style={{
                height: 50,
                alignItems: "flex-end",
                // backgroundColor: "green",
                marginRight: 15,
                marginTop: 30,
              }}
            >
              {dataPage.itemfavorite != null ? (
                <>
                  {dataPage.itemfavorite !== false ? (
                    <TouchableOpacity
                      onPress={() => {
                        setDataPage({
                          ...dataPage,
                          itemfavorite: !dataPage.itemfavorite,
                        });
                      }}
                    >
                      <Image
                        style={{ width: 30, height: 30 }}
                        source={require("./assets/custome/view-one-favorite-on.png")}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        setDataPage({
                          ...dataPage,
                          itemfavorite: !dataPage.itemfavorite,
                        });
                      }}
                    >
                      <Image
                        style={{ width: 30, height: 30 }}
                        source={require("./assets/custome/view-one-favorite-off.png")}
                      />
                    </TouchableOpacity>
                  )}
                </>
              ) : (
                <></>
              )}
            </View>

            {/* FLOR LIST RENDER */}
            <View
              style={{
                flex: 1,
                // backgroundColor: 'red'
              }}
            >
              {/* <Text>{JSON.stringify(SubItem.items)}</Text> */}
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                // paddingHorizontal: 50,
                paddingVertical: 10,
                paddingHorizontal: 10,
                flexWrap: "wrap",
                alignItems: "flex-start",
                // marginBottom: 130,
              }}
            >
              {dataPage.items != null ? (
                <>
                  {dataPage.items.map((SubItemData, SubIndexData) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          props.navigation.navigate("JsonViewSetting", {
                            SubItem: SubItemData
                          });
                          console.log("onRender-sub-Touch: idx");
                        }}
                        key={SubIndexData.toString()}
                        style={{
                          width: "50%",
                          flexDirection: "row",
                          padding: 5,
                          // borderWidth: 0.5,
                          //  borderRadius: 5,
                          paddingHorizontal: 25,
                          paddingVertical: 10,
                          // borderColor: "red",
                          borderRadius: 0,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "column",
                            width: "100%",
                            height: "100%",
                            alignItems: "center",
                            // backgroundColor: 'green',
                            borderWidth: 1,
                            borderColor: "#CB9696",
                            borderRadius: 10,
                          }}
                        >
                          <Image
                            source={getImageNameByType(SubItemData)}
                            style={{
                              width: '60%',
                              height: 70,
                              // backgroundColor: "#D9D9D9",
                              marginVertical: 10,
                              marginLeft: 5,
                              // borderRadius: "50%",
                            }}
                          />
                          <Text
                          numberOfLines={1} 
                          ellipsizeMode={'tail'}
                            style={{
                              // position: "absolute",
                              // top: 15,
                              // left: 45,
                              fontSize: 16,
                              // paddingLeft: 10,
                              // paddingTop: 16,
                              color: "#826464",
                              marginBottom: 16,
                            }}
                          >
                            {SubItemData.name}
                          </Text>
                          <TouchableOpacity
                            onPress={() => {
                              console.log("more-Press!");
                              const newItems = dataPage.items.filter(
                                (itm, idx) => {
                                  if (SubIndexData === idx) {
                                    itm.activeMenu = !itm.activeMenu;
                                  }
                                  return itm;
                                }
                              );
                              setDataPage({
                                ...dataPage,
                                items: newItems,
                              });
                            }}
                            style={{ position: "absolute", top: 6, right: 5 }}
                          >
                            <Image
                              source={require("./assets/custome/view-one-more.png")}
                            />
                          </TouchableOpacity>
                          <Text
                            style={{ position: "absolute", top: 6, left: 5 }}
                          >
                            {`${SubItemData.setValue}${SubItemData.valueName}`}
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
                        ></View>

                        {/* activeMenu */}
                        {SubItemData.activeMenu === true ? (
                          <View
                          style={{
                            position: "absolute",
                            top: 35,
                            right: -5,
                            width: 50,
                            height: 70,
                            borderRadius: 6,
                            backgroundColor: "#fff",
                            flex: 1,
                            flexDirection: "row",
                            // backgroundColor: "yellow",
                            justifyContent: "space-around",
                            borderWidth: 1,
                            borderColor: "#ddd",
                          }}
                        >
                          <View
                            style={{
                              position: "absolute",
                              top: 20,
                              left: 0,
                              width: "100%",
                              borderBottomWidth: 1,
                              borderBottomColor: "#ddd",
                            }}
                          />
                          <View
                            style={{
                              position: "absolute",
                              top: 40,
                              left: 0,
                              width: "100%",
                              borderBottomWidth: 1,
                              borderBottomColor: "#ddd",
                            }}
                          />

                          <View style={{ flex: 1, paddingHorizontal: 5 }}>
                            <TouchableOpacity
                              style={{ flex: 1 }}
                              onPress={() => {
                                const newItems = dataPage.items.filter(
                                  (itm, idx) => {
                                    if (SubIndexData === idx) {
                                      itm.powerStatus = 1;
                                    }
                                    return itm;
                                  }
                                );
                                setDataPage({
                                  ...dataPage,
                                  items: newItems,
                                });
                                console.log("on-Press!");
                              }}
                            >
                              <Text
                                style={{
                                  flex: 1,
                                  fontSize: 10,
                                  color: "#6C6C6C",
                                }}
                              >
                                On
                              </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={{ flex: 1 }}
                              onPress={() => {
                                const newItems = dataPage.items.filter(
                                  (itm, idx) => {
                                    if (SubIndexData === idx) {
                                      itm.powerStatus = 0;
                                    }
                                    return itm;
                                  }
                                );
                                setDataPage({
                                  ...dataPage,
                                  items: newItems,
                                });
                                console.log("off-Press!");
                              }}
                            >
                              <Text
                                style={{
                                  flex: 1,
                                  fontSize: 10,
                                  color: "#6C6C6C",
                                }}
                              >
                                Off
                              </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={{ flex: 1 }}
                              onPress={() => {
                                props.navigation.navigate("JsonViewScheduleScreen", {
                                  SubItem: SubItemData
                                });
                                console.log("Schedule-Press!", SubItemData);
                              }}
                            >
                              <Text
                                style={{
                                  flex: 1,
                                  fontSize: 10,
                                  color: "#6C6C6C",
                                }}
                              >
                                Schedule
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                        ) : (
                          <></>
                        )}
                        {/* END-ActiveMenu */}
                      </TouchableOpacity>
                    );
                  })}
                </>
              ) : (
                <></>
              )}
            </View>
            {/* END-FLOR LIST RENDER */}
          </ScrollView>
        </View>
      ) : (
        <></>
      )}
    </>
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

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
  Platform,
} from "react-native";
import { Slider, Icon, CheckBox, Divider } from "react-native-elements";
import { YouTubeStandaloneAndroid } from "react-native-youtube";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./actions/jsonfeedscreen.action";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from "@react-native-community/datetimepicker";

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
              alignItems: "center",
            }}
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
                    <Text
                      style={{
                        fontSize: 27,
                        color: indexTempFocus === item ? "#39ACFF" : "#826464",
                      }}
                    >
                      {item}
                    </Text>
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
            alignItems: "flex-end",
            paddingVertical: 20,
          }}
        >
          {[1, 2, 3, 4, 5].map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setLevelTempFocus(item);
                }}
                style={{
                  backgroundColor:
                    levelTempFocus >= item ? "#0075FF" : "#D3D3D3",
                  width: 30,
                  height: item * 40,
                }}
              >
                {/* <Text>{item}</Text> */}
              </TouchableOpacity>
            );
          })}
        </View>

        <View
          style={{
            height: 200,
            // backgroundColor: 'red'
          }}
        >
          <TouchableOpacity
            onPress={() => {
              const statusTemp = swingTempStatus == 1 ? 0 : 1;
              setSwingTempStatus(statusTemp);
            }}
            style={{ position: "absolute", left: 10, top: 20 }}
          >
            {swingTempStatus == 1 ? (
              <Image source={require("./assets/custome/swing-on.png")} />
            ) : (
              <Image source={require("./assets/custome/swing-off.png")} />
            )}
          </TouchableOpacity>
          <View>
            <View style={{ position: "absolute", top: -35, left: 90 }}>
              {swingTempStatus == 0 ? (
                <Image
                  style={{ width: 200, height: 200 }}
                  source={require("./assets/custome/swing-less.png")}
                />
              ) : (
                <Image
                  style={{ width: 200, height: 200 }}
                  source={require("./assets/custome/swing-more.png")}
                />
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
  const [actionMode, setActionMode] = useState("list");
  const [dateStart, setDateStart] = useState(new Date(Date.now()));
  const [dateEnd, setDateEnd] = useState(new Date(Date.now()));
  const [showDateSelect, setShowDateSelect] = useState(false);
  const [dateAdd, setdateAdd] = useState([]);
  const [dateDay, setDateDay] = useState([
    { id: 1, name: "Sunday", checked: false },
    { id: 2, name: "Monday", checked: false },
    { id: 3, name: "Tuesday", checked: false },
    { id: 4, name: "Wednesday", checked: false },
    { id: 5, name: "Thursday", checked: false },
    { id: 6, name: "Friday", checked: false },
    { id: 7, name: "Saturday", checked: false },
  ]);

  React.useEffect(() => {
    setActionMode("new"); //default = list
    setdateAdd([
      {
        id: 1,
        no: 1,
        date: new Date().getDate(),
        time: "09:00 - 18:00",
      },
      {
        id: 4,
        no: 2,
        date: new Date().getDate(),
        time: "09:00 - 18:00",
      },
      {
        id: 4,
        no: 3,
        date: new Date().getDate(),
        time: "09:00 - 18:00",
      },
      {
        id: 4,
        no: 4,
        date: new Date().getDate(),
        time: "09:00 - 18:00",
      },
    ]);
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
      {actionMode === "list" ? (
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
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                height: 30,
                //   backgroundColor: "red",
                marginTop: 50,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "baseline",
                  paddingLeft: 30,
                }}
              >
                <Text style={{ color: "#6C6C6C" }}>Schedule</Text>
                <Text style={{ color: "#826464", fontSize: 20 }}>
                  {" "}
                  {itemTemp.name}
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setActionMode("new");
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 90,
                      height: 30,
                      marginRight: 10,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    source={require("./assets/custome/home-buttom-header.png")}
                  >
                    <Text style={{ color: "#fff", fontWeight: "700" }}>
                      + Add
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
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
                  width: 120,
                  height: 120,
                  marginVertical: 10,
                  marginLeft: 5,
                  // borderRadius: "50%",
                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "column",
              // justifyContent: "flex-start",
              // alignContent: 'flex-start',
              // backgroundColor: "red",
              height: screenHeight / 2,
              marginHorizontal: 50,
            }}
          >
            {[1, 2, 3, 4, 5].map((item, index) => {
              return (
                <View
                  style={{
                    height: 50,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 10,
                    //   backgroundColor: "green",
                    marginBottom: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "#DFDFDF",
                  }}
                >
                  <Text>Mon, Fri</Text>
                  <Text>09:00 - 18:00</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <></>
      )}

      {actionMode === "new" ? (
        <ScrollView
          scrollsToTop={false}
          style={{
            height: "70%",
            top: 0,
            backgroundColor: "#C8C8C8",
            marginHorizontal: 10,
            marginVertical: 10,
            borderRadius: 15,
            borderWidth: 0.1,
            borderColor: "#000",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              height: 50,
              // backgroundColor: "green",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setActionMode("list");
              }}
            >
              <Text style={{ color: "#000", fontSize: 20, fontWeight: "400" }}>
                Cancel
              </Text>
            </TouchableOpacity>
            <Text style={{ color: "#AE0000", fontSize: 20, fontWeight: "400" }}>
              Create Schedule
            </Text>
            <TouchableOpacity
              onPress={() => {
                setActionMode("list");
              }}
            >
              <Text style={{ color: "#000", fontSize: 20, fontWeight: "400" }}>
                Save
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: 200,
              // backgroundColor: "pink",
              marginHorizontal: 20,
              marginVertical: 30,
              paddingLeft: 50,
            }}
          >
            <View
              style={{
                flex: 1,
                // backgroundColor: "red",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1,
                  // backgroundColor: "#ddd",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>START</Text>
              </View>
              <View
                style={{
                  flex: 4,
                  // backgroundColor: "#999",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <DateTimePicker
                  value={dateStart}
                  mode={"time"}
                  display={Platform.OS === "ios" ? "spinner" : "default"}
                  is24Hour={true}
                  onChange={(event, value) => {
                    setDateStart(value);
                    console.log(value);
                  }}
                  style={styles.datePicker}
                />
              </View>
            </View>
            <View
              style={{
                flex: 1,
                // backgroundColor: "blue",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1,
                  // backgroundColor: "#999",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>END</Text>
              </View>
              <View
                style={{
                  flex: 4,
                  // backgroundColor: "#ddd",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <DateTimePicker
                  value={dateEnd}
                  mode={"time"}
                  display={Platform.OS === "ios" ? "spinner" : "default"}
                  is24Hour={true}
                  onChange={(event, value) => {
                    setDateEnd(value);
                    console.log(value);
                  }}
                  style={styles.datePicker}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              height: 100,
              // backgroundColor: "red",
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
              flexWrap: "nowrap",
            }}
          >
            <Text
              style={{
                flex: 1,
                alignSelf: "center",
                textAlign: "right",
                paddingRight: 50,
                fontSize: 22,
              }}
            >
              Repeat
            </Text>
            <TouchableOpacity
              onPress={() => {
                setShowDateSelect(!showDateSelect);
              }}
              style={{
                flex: 1,
                // backgroundColor: "green",
                padding: 6,
                overflow: "visible",
              }}
            >
              <Text
                style={{
                  width: "100%",
                  // backgroundColor: "red",
                }}
              >
                {/* Sub, Friday */}
                {dateDay.filter((item, index) => {
                  return item.checked === true;
                }).length > 0 ? (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignContent: "flex-start",
                      flexWrap: "wrap",
                    }}
                  >
                    {dateDay
                      .filter((item, index) => {
                        return item.checked === true;
                      })
                      .map((item, idx) => {
                        return (
                          <Text>
                            {item.name}
                            {idx <
                            dateDay.filter((item, index) => {
                              return item.checked === true;
                            }).length -
                              1 ? (
                              <Text>,</Text>
                            ) : (
                              <></>
                            )}
                          </Text>
                        );
                      })}
                  </View>
                ) : (
                  <TouchableOpacity
                    style={{
                      // width: "100%",
                      alignSelf: 'center',
                      height: 100,
                      // backgroundColor: 'blue',
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onPress={() => {
                      setShowDateSelect(!showDateSelect);
                    }}
                  >
                    <Text style={{textAlign: 'center'}}>Please Select Day</Text>
                  </TouchableOpacity>
                )}
              </Text>

              {showDateSelect ? (
                <ScrollView
                  style={{
                    flex: 1,
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingHorizontal: 2,
                    position: "absolute",
                    top: 50,
                    width: "100%",
                    backgroundColor: "#D9D9D9",
                    borderRadius: 10,
                  }}
                >
                  {dateDay.map((itemDay, indexDay) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          const items = dateDay.filter((itm, idx) => {
                            if (indexDay === idx) {
                              itm.checked = !itm.checked;
                            }
                            return itm;
                          });
                          setDateDay(items);
                        }}
                        key={indexDay.toString()}
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-around",
                          marginBottom: 5,
                          // backgroundColor: "#999",
                          height: 35,
                        }}
                      >
                        <View
                          style={{
                            width: 40,
                            height: 40,
                            // backgroundColor: "red",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {itemDay.checked ? (
                            <Image
                              style={{}}
                              source={require("./assets/custome/arrow-right-red.png")}
                            />
                          ) : (
                            <></>
                          )}
                        </View>
                        <Text
                          style={{
                            flex: 6,
                            alignSelf: "center",
                            fontSize: 16,
                            // backgroundColor: "red",
                          }}
                        >
                          {itemDay.name}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              ) : (
                <></>
              )}
            </TouchableOpacity>
            {dateDay.filter((item, index) => {
              return item.checked === true;
            }).length > 0 ? (
              <View style={{ width: 40, justifyContent: "center" }}>
                <Image
                  style={{}}
                  source={require("./assets/custome/arrow-right-schedule.png")}
                />
              </View>
            ) : (
              <></>
            )}
          </View>
        </ScrollView>
      ) : (
        <></>
      )}
    </View>
  );
}

export default function JsonViewScheduleScreen(props) {
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

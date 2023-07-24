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
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

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

import axios from 'axios';

export default function DashboardScreen(props) {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;

  const jsonReducer = useSelector((state) => state.jsonReducer);
  const loginReducer = useSelector((state) => state.loginReducer);
  /* 

*/
  const [pOne, setPOne] = useState(55);
  const [pTwo, setPTwo] = useState({ line1: 28, line2: 105 });
  const [pThree, setPThree] = useState(27);
  const [pFour, setPFour] = useState(105);

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

  const [backButton, setbackButton] = useState({
    show: false,
    useFunction: false,
  });

  const dispatch = useDispatch();

  const loadJsonData = async () => {
    try {
      const response = await axios.get(
        `https://api.primexcloud.com/home_automation/dashboard`
      );
      const { data } = response;
      if (data != null) {
        api_data = data;
        setDashboardData(data);
        //console.log('load api complete! '+ new Date().getTime());
      }
      console.log("/api - GET: ", data);
    } catch (e) {
      console.log("api error:", e);
    } finally {
      console.log("finally api! " + new Date().getTime());
    }
  };

  const delay = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };

  const loadAnimate4 = async () => {
    //animate4 - two
    setPTwo({ line1: 28, line2: 105 });
    for (let i = 105; i <= 205; i += 3) {
      await delay(5);
      setPTwo({ line1: 28, line2: i });
    }
    for (let i = 40; i <= 120; i += 3) {
      await delay(5);
      setPTwo({ ...pTwo, line1: i, line2: 210 });
    }
    await delay(5);
    setPTwo({ line1: 28, line2: 105 });
  };

  const loadAnimate3 = async () => {
    //animate3
    for (let i = 105; i <= 325; i += 5) {
      await delay(5);
      setPFour(i);
      if (i === 325) {
        await delay(5);
        setPFour(105);
      }
      console.log(i);
    }
  };

  const loadAnimate2 = async () => {
    //animate2
    for (let i = 27; i <= 125; i += 5) {
      await delay(5);
      setPThree(i);
      if (i > 120) {
        await delay(5);
        setPThree(27);
      }
      console.log(i);
    }
  };

  const loadAnimate1 = async () => {
    //animate 1
    for (let i = 54; i <= 120; i += 5) {
      await delay(5);
      setPOne(i);
      if (i == 120) {
        await delay(5);
        setPOne(54);
      }
      console.log(i);
    }
  };

  React.useEffect(() => {
    // dispatch(actions.feedJSON());
    // loadJsonData();
    loadAnimate1();
    loadAnimate2();
    loadAnimate3();
    loadAnimate4();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        // paddingLeft: 8,
      }}
    >
      <ImageBackground
        imageStyle={{}}
        resizeMode={"stretch"}
        resizeMethod={"scale"}
        source={require("./assets/custome/dashboard-bg.png")}
        style={{
          flex: 1,
          // backgroundColor: '#000',
          padding: 5,
          width: "100%",
        }}
      >
        <ScrollView
          style={{
            flex: 1,
            flexDirection: "column",
            width: "100%",
          }}
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        >
          <View style={{ position: "absolute", top: 280, left: 0 }}>
          <Text>Bezier Line Chart</Text>
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  data: [
                   1,
                    70,
                    30,
                    20,
                   10,
                    350,
                  ],
                },
              ],
            }}
            width={Dimensions.get("window").width - 50} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#000",
              backgroundGradientFrom: "#3F3F3E",
              backgroundGradientTo: "#B0A89C",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#333231",
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>

          <View style={{ marginTop: 100 }}></View>

          <View
            style={{
              justifyContent: "flex-start",
              alignContent: "flex-start",
            }}
          >
            <Image
              imageStyle={{ height: screenHeight, with: "100%" }}
              resizeMode={"stretch"}
              resizeMethod={"resize"}
              style={{ flex: 1 }}
              source={require("./assets/custome/dashboard-energy-temp.png")}
            />
            {/* LINES */}
            {/* LINE-TOP-1 */}
            {/* <View
              style={{
                position: "absolute",
                top: 20,
                left: 100,
                marginLeft: 8,
              }}
            >
              <View
                style={{ borderColor: "#fff", borderWidth: 1, width: 220 }}
              ></View>
            </View> */}
            {/* LINE-TOP-2 */}
            <View
              style={{
                position: "absolute",
                top: 25,
                left: 100,
                marginLeft: 8,
              }}
            >
              <View
                style={{ borderColor: "lightblue", borderWidth: 1, width: 220 }}
              ></View>
            </View>
            {/* LEFT-CORNER-3 */}
            <View
              style={{
                position: "absolute",
                top: 29,
                left: 100,
                marginLeft: 8,
              }}
            >
              <View
                style={{
                  borderTopColor: "lightgreen",
                  borderTopWidth: 1,
                  borderRightColor: "lightblue",
                  borderRightWidth: 1,
                  borderTopRightRadius: 10,
                  width: 105,
                  height: 90,
                }}
              ></View>
            </View>
            {/* LINE-HIGHT-4 */}
            <View
              style={{
                position: "absolute",
                top: 26,
                left: 210,
                marginLeft: 8,
              }}
            >
              <View
                style={{
                  borderColor: "#fff",
                  borderWidth: 1,
                  width: 1,
                  height: 100,
                }}
              ></View>
            </View>
            {/* LINE-LEFT-5 */}
            <View
              style={{ position: "absolute", top: 55, left: 73, marginLeft: 8 }}
            >
              <View
                style={{
                  borderColor: "lightgreen",
                  borderWidth: 1,
                  width: 1,
                  height: 70,
                }}
              ></View>
            </View>
            {/* DOTS [min=27, max=125]*/}
            <View
              style={{
                position: "absolute",
                top: pThree,
                left: 216,
                width: 5,
                height: 5,
                borderRadius: 5,
                backgroundColor: "orange",
              }}
            />
            {/* min=: 28 */}
            <View
              style={{
                position: "absolute",
                top: pTwo.line1,
                left: pTwo.line2,
                width: 5,
                height: 5,
                borderRadius: 5,
                backgroundColor: "blue",
              }}
            />
            {/* min=: 23, max=:  */}
            <View
              style={{
                position: "absolute",
                top: 23,
                left: pFour,
                width: 5,
                height: 5,
                borderRadius: 5,
                backgroundColor: "#fff",
              }}
            />
            {/* top: 55, max=: 120 */}
            <View
              style={{
                position: "absolute",
                top: pOne,
                left: 79,
                width: 5,
                height: 5,
                borderRadius: 5,
                backgroundColor: "green",
              }}
            />
            {/* END_LINES */}
            <View style={{ position: "absolute", top: 35, left: 55 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                9.00 Kw
              </Text>
            </View>

            <View style={{ position: "absolute", top: 133, left: 70 }}>
              <Text
                style={{ color: "#05FF00", textAlign: "center", fontSize: 10 }}
              >
                80%
              </Text>
            </View>

            <View style={{ position: "absolute", top: 155, left: 60 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                9.00 Kw
              </Text>
            </View>

            <View style={{ position: "absolute", top: 160, left: 190 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                9.00 Kw
              </Text>
            </View>

            <View style={{ position: "absolute", top: 35, right: 0 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                0.333 Kw
              </Text>
            </View>

            <View style={{ position: "absolute", top: 505, left: 50 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                9.00 Kw
              </Text>
            </View>
            <View style={{ position: "absolute", top: 530, left: 50 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                9.00 Kw
              </Text>
            </View>

            <View style={{ position: "absolute", top: 505, left: 275 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                9.00 Kw
              </Text>
            </View>
            <View style={{ position: "absolute", top: 530, left: 275 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                9.00 Kw
              </Text>
            </View>

            <View style={{ position: "absolute", top: 615, left: 165 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                9.00 Kw
              </Text>
            </View>
            <View style={{ position: "absolute", top: 645, left: 165 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                9.00 Kw
              </Text>
            </View>

            <View style={{ position: "absolute", top: 755, left: 70 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                9.00 Kw
              </Text>
            </View>
            <View style={{ position: "absolute", top: 775, left: 70 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                9.00 Kw
              </Text>
            </View>

            <View style={{ position: "absolute", top: 755, left: 255 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                9.00 Kw
              </Text>
            </View>
            <View style={{ position: "absolute", top: 775, left: 255 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                9.00 Kw
              </Text>
            </View>

            <View style={{ position: "absolute", top: 830, left: 70 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                9.00 Kw
              </Text>
            </View>
            <View style={{ position: "absolute", top: 850, left: 70 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                9.00 Kw
              </Text>
            </View>

            <View style={{ position: "absolute", top: 830, left: 255 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                9.00 Kw
              </Text>
            </View>
            <View style={{ position: "absolute", top: 850, left: 255 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                9.00 Kw
              </Text>
            </View>

            <View style={{ position: "absolute", top: 910, left: 70 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                9.00 Kw
              </Text>
            </View>
            <View style={{ position: "absolute", top: 930, left: 70 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                9.00 Kw
              </Text>
            </View>

            <View style={{ position: "absolute", top: 910, left: 255 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                9.00 Kw
              </Text>
            </View>
            <View style={{ position: "absolute", top: 930, left: 255 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                9.00 Kw
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 100 }}></View>

          <View>
            {[].map((item, index) => {
              return (
                <>
                  <View
                    key={index.toString()}
                    style={{
                      width: screenWidth,
                      height: 200,
                      borderRadius: 10,
                      backgroundColor: "#fff",
                      marginTop: 10,
                    }}
                  ></View>
                </>
              );
            })}
          </View>
        </ScrollView>
      </ImageBackground>
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

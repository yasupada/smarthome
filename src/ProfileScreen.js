import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Button } from "react-native-elements";
import * as loginActions from "./actions/login.action";
import Svg, { Circle, SvgUri, SvgXml } from "react-native-svg";

import * as profileBg from "./assets/svg/profile-bg.svg";

const ProfileScreen = (props) => {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const loginReducer = useSelector(({ loginReducer }) => loginReducer);
  const dispatch = useDispatch();

  const [userList, setUserList] = React.useState([]);

  const [modalData, setModalData] = useState(null);
  const [modalInviteVisible, setModalInviteVisible] = useState(false);
  const [modalRejectVisible, setModalRejectVisible] = useState(false);

  const setuserPorfileList = () => {
    setUserList([
      {
        id: 1,
        userName: "Username",
        Lastname: "",
        userImage: "",
        regDate: new Date().getTime(),
        regStatus: "Y",
        showDelete: false,
      },
      {
        id: 2,
        userName: "Username",
        Lastname: "",
        userImage: "",
        regDate: new Date().getTime(),
        regStatus: "Y",
        showDelete: false,
      },
      {
        id: 3,
        userName: "Username",
        Lastname: "",
        userImage: "",
        regDate: new Date().getTime(),
        regStatus: "Y",
        showDelete: false,
      },
      {
        id: 4,
        userName: "Username",
        Lastname: "",
        userImage: "",
        regDate: new Date().getTime(),
        regStatus: "Y",
        showDelete: false,
      },
      {
        id: 5,
        userName: "Username",
        Lastname: "",
        userImage: "",
        regDate: new Date().getTime(),
        regStatus: "Y",
        showDelete: false,
      },
      {
        id: 6,
        userName: "Username",
        Lastname: "",
        userImage: "",
        regDate: new Date().getTime(),
        regStatus: "N",
        showDelete: false,
      },
    ]);
  };

  const getUserListNew = () => {
    return userList.filter((item, index) => {
      return item.regStatus === "N";
    });
  };

  const getUserListMember = () => {
    return userList.filter((item, index) => {
      return item.regStatus === "Y";
    });
  };

  const onTouchNewUser = (item, action) => {
    const newState = userList.map((itemX, indexX) => {
      if (itemX.id === item.id) {
        console.log(itemX.id);
        return {
          ...itemX,
          showDelete: !itemX.showDelete,
        };
      }
      return itemX;
    });

    if (action == 1) {
      //press
    }
    if (action == 2) {
      //long press
    }
    if (action == 3) {
      //auto close
    }
    setUserList(newState);
  };

  const onTouchOldMember = (item, action) => {
    const newState = userList.map((itemX, indexX) => {
      if (itemX.id === item.id) {
        console.log(itemX.id);
        return {
          ...itemX,
          showDelete: !itemX.showDelete,
        };
      }
      return itemX;
    });
    if (action == 1) {
      //press
    }
    if (action == 2) {
      //long press
    }
    if (action == 3) {
      //auto close
    }
    setUserList(newState);
  };

  const onItemUserPressCheck = (item) => {
    const newState = userList.map((itemX, indexX) => {
      if (itemX.id === item.id && item.showDelete === true) {
        console.log("reset item press! ", itemX.id);
        return {
          ...itemX,
          showDelete: !itemX.showDelete,
        };
      }
      return itemX;
    });

    if (item.showDelete) {
      setUserList(newState);
    }
  };

  const onAcceptUserInvite = (item) => {
    const newState = userList.map((itemX, indexX) => {
      if (itemX.id === item.id && item.showDelete === true) {
        console.log("reset item press! ", itemX.id);
        return {
          ...itemX,
          regStatus: "Y",
        };
      }
      return itemX;
    });

    if (item.showDelete) {
      setUserList(newState);
    }
  };

  const onItemUserDeletePressItem = (item) => {
    console.log("del id=", item.id);
    let indexRemove = -1;
    const newState = userList.map((itemX, indexX) => {
      if (itemX.id === item.id) {
        indexRemove = indexX;
      }
      return itemX;
    });
    userList.splice(indexRemove, 1);
    //clear state ui
    onItemUserPressCheck(item);
    console.log("delete dat: ", newState);
  };

  React.useEffect(() => {
    setuserPorfileList();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ImageBackground
        resizeMethod={"resize"}
        source={require("./assets/custome/profile-header.png")}
        style={{
          flex: 1,
          flexDirection: "row",
          paddingVertical: 10,
          paddingHorizontal: 10,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flex: 1 }}></View>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 20, color: "#fff" }}>Knight Prx</Text>
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
      </ImageBackground>

      <View
        style={{
          flex: 2,
          justifyContent: "center",
          alignContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            color: "#000",
            alignSelf: "center",
          }}
        >
          Member
        </Text>
      </View>

      <ImageBackground
        resizeMethod={"scale"}
        source={require("./assets/custome/profile-bg.png")}
        style={{
          flex: 12,
          // paddingHorizontal: 50,
          marginTop: 30,
          borderRadius: 100,
        }}
        imageStyle={{ borderTopLeftRadius: 80 }}
      >
        <ScrollView style={{ flex: 1, paddingTop: 30}}>
          {getUserListNew().length > 0 ? (
            <>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "700",
                    color: "#fff",
                    marginBottom: 25,
                    paddingLeft: 50,
                  }}
                >
                  New member
                </Text>
                <View style={{ flex: 1, paddingHorizontal: 50 }}>
                  {getUserListNew().length > 0 ? (
                    <>
                      {getUserListNew().map((item, index) => {
                        return (
                          <View
                            // onPress={()=>onItemUserPressCheck(item)}
                            key={item.id.toString()}
                            style={{
                              flexDirection: "row",
                              justifyContent: "space-between",
                              backgroundColor: "#ddd",
                              borderRadius: 8,
                              padding: 13,
                              marginBottom: 25,
                            }}
                          >
                            <View
                              style={{
                                position: "absolute",
                                left: 10,
                                top: -10,
                                width: 41,
                                height: 41,
                                zIndex: 10,
                                elevation: 10,
                                borderRadius: "50%",
                                backgroundColor: "#D9D9D9",
                                borderWidth: 0.2,
                                borderColor: "#000",
                                overflow: "hidden",
                              }}
                            ></View>
                            <Text style={{ flex: 1, marginLeft: 50 }}>
                              {" "}
                              Name LastName
                            </Text>
                            <TouchableOpacity
                              onPress={() => {
                                onTouchNewUser(item, 1);
                              }}
                              onLongPress={() => {
                                onTouchNewUser(item, 2);
                              }}
                              style={{ paddingTop: 3 }}
                            >
                              <Image
                                source={require("./assets/custome/more.png")}
                              />
                            </TouchableOpacity>
                            {item.showDelete ? (
                              <>
                                <View
                                  style={{
                                    position: "absolute",
                                    bottom: 0,
                                    right: -50,
                                    top: 15,
                                  }}
                                >
                                  <View>
                                    <TouchableOpacity
                                      onPress={() => {
                                        setModalData(item);
                                        setModalInviteVisible(true);
                                        onTouchNewUser(item, 3); //auto close
                                        console.log("- Invite Press!");
                                      }}
                                      style={{
                                        backgroundColor: "#fff",
                                        padding: 3,
                                        borderTopLeftRadius: 3,
                                        borderTopRightRadius: 3,
                                      }}
                                    >
                                      <Text style={{ color: "#565656" }}>
                                        + Invite
                                      </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                      onPress={() => {
                                        setModalData(item);
                                        setModalRejectVisible(true);
                                        onTouchOldMember(item, 3); //auto close
                                        console.log("- Reject Press!");
                                      }}
                                      style={{
                                        backgroundColor: "#fff",
                                        padding: 3,
                                        borderTopWidth: 1,
                                        borderTopColor: "#ddd",
                                        borderBottomLeftRadius: 3,
                                        borderBottomEndRadius: 3,
                                      }}
                                    >
                                      <Text style={{ color: "#565656" }}>
                                        - Reject
                                      </Text>
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </>
                            ) : (
                              <></>
                            )}
                          </View>
                        );
                      })}
                    </>
                  ) : (
                    <></>
                  )}
                </View>
              </View>

              <View
                style={{
                  borderColor: "red",
                  borderWidth: 1,
                  marginVertical: 20,
                  marginHorizontal: 50,
                }}
              ></View>
            </>
          ) : (
            <></>
          )}

          <View style={{ flex: 1, paddingHorizontal: 50 }}>
            {getUserListMember().map((item, index) => {
              return (
                <View
                  // onPress={()=>onItemUserPressCheck(item)}
                  key={index.toString()}
                  style={{ marginBottom: 15 }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      backgroundColor: "#ddd",
                      borderRadius: 8,
                      padding: 13,
                    }}
                  >
                    <View
                      style={{
                        position: "absolute",
                        left: 10,
                        top: -10,
                        width: 41,
                        height: 41,
                        borderRadius: "50%",
                        backgroundColor: "#D9D9D9",
                        borderWidth: 0.2,
                        borderColor: "#000",
                      }}
                    ></View>
                    <Text style={{ flex: 1, marginLeft: 50 }}>
                      {" "}
                      Name LastName
                    </Text>
                    <TouchableOpacity
                      onLongPress={() => {
                        onTouchOldMember(item, 1);
                      }}
                      onPress={() => {
                        onTouchOldMember(item, 2);
                      }}
                      style={{ paddingTop: 3 }}
                    >
                      <Image source={require("./assets/custome/more.png")} />
                    </TouchableOpacity>
                    {item.showDelete ? (
                      <>
                        <View
                          style={{
                            position: "absolute",
                            bottom: 0,
                            right: -60,
                            top: 20,
                          }}
                        >
                          <TouchableOpacity
                            onPress={() => {
                              onItemUserDeletePressItem(item);
                              console.log("- Delete Press!");
                            }}
                          >
                            <View
                              style={{
                                backgroundColor: "#fff",
                                padding: 3,
                                borderRadius: 8,
                              }}
                            >
                              <Text style={{ color: "#565656" }}>
                                <Image
                                  style={{ width: 15, height: 15 }}
                                  source={require("./assets/custome/binRed.png")}
                                />{" "}
                                Delete
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      </>
                    ) : (
                      <></>
                    )}
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </ImageBackground>

      {/* Section-Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalInviteVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalInviteVisible(!modalInviteVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Invite ?</Text>
            <Image
              style={{ marginVertical: 10 }}
              source={require("./assets/custome/inside-add.png")}
            />
            <Pressable
              style={{
                justifyContent: "center",
                backgroundColor: "green",
                borderRadius: 8,
                width: 50,
                height: 25,
              }}
              onPress={() => {
                onAcceptUserInvite(modalData);
                setModalInviteVisible(!modalInviteVisible);
              }}
            >
              <Text style={styles.textStyle}>Yes</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalRejectVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalRejectVisible(!modalRejectVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Reject ?</Text>
            <Image
              style={{ width: 30, height: 30, marginVertical: 10 }}
              source={require("./assets/custome/binRed.png")}
            />
            <Pressable
              style={{
                justifyContent: "center",
                backgroundColor: "red",
                borderRadius: 8,
                width: 50,
                height: 25,
              }}
              onPress={() => {
                onItemUserDeletePressItem(modalData);
                setModalRejectVisible(!modalRejectVisible);
              }}
            >
              <Text style={styles.textStyle}>Yes</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "#BABABA54",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 250,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ProfileScreen;

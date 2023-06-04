import { name as appName } from "./app.json";
import React, { useState, useEffect } from "react";
import { SafeAreaView, StatusBar, AppRegistry, View, StyleSheet, Text } from "react-native";
import AppNavigator from "./src/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Redux Begin
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./src/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default function App() {
  console.disableYellowBox = true;

  const [showLogin, setShowLogin] = useState(false);
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem("token").then((token) => {
      setShowLogin(token == null ? true : false);
      setIsReady(true);
    });
  }, [isReady]);

  return (
    <Provider store={store}>
      <NavigationContainer>
        {isReady ? (
          <View style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView />
            <AppNavigator showAuthen={showLogin} setIsReady={setIsReady} />
          </View>
        ) : null}
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SmsScreen from "./screens/smsScreen";
import ContactScreen from "./screens/contactsScreen";
import SmsHistoryScreen from "./screens/smsHistoryScreen";
import ParametersScreen from "./screens/parametersScreen";

const { width } = Dimensions.get("screen");

const Tab = createBottomTabNavigator();

const CustomTab = ({ tab, onPress, activeTab }) => {
  // console.log(tab, "ttttttt");

  return (
    <TouchableOpacity onPress={onPress} style={styles.tab}>
      {tab.name === "ახლი sms!" ? (
        <Image
          // style={{ width: 30, height: 30 }} 1
          source={
            activeTab === "ახლი sms!"
              ? require("./assets/sms2.png")
              : require("./assets/sms.png")
          }
        />
      ) : tab.name === "კონტაქტი" ? (
        <Image
          // style={{ width: 30, height: 30 }}
          source={
            activeTab === "კონტაქტი"
              ? require("./assets/contact2.png")
              : require("./assets/conatact.png")
          }
        />
      ) : tab.name === "ისტორია" ? (
        <Image
          // style={{ width: 30, height: 30 }}

          source={
            activeTab === "ისტორია"
              ? require("./assets/history2.png")
              : require("./assets/history.png")
          }
        />
      ) : (
        <Image
          // style={{ width: 30, height: 30 }}

          source={
            activeTab === "პარამეტრები"
              ? require("./assets/params.png")
              : require("./assets/settings1.png")
          }
        />
      )}
      <Text
        style={{ color: "#fff", fontSize: 10, color: "#AFB1B3", marginTop: 5 }}
      >
        {tab.name}
      </Text>
    </TouchableOpacity>
  );
};

const TabBar = ({ state, navigation }) => {
  const [activeTab, setActiveTab] = React.useState("");

  console.log(state, navigation);

  const handlePress = (activeTab) => {
    setActiveTab(activeTab);
    navigation.navigate(activeTab);
  };

  const { routes } = state;
  return (
    <View style={styles.wrapper}>
      {/* <View
        style={{
          position: "absolute",
          width,
          height: 20,
          top: -20,
        }}
      ></View> */}
      <View style={styles.container}>
        {routes.map((route) => {
          return (
            <CustomTab
              onPress={() => handlePress(route.name)}
              activeTab={activeTab}
              tab={route}
              key={route.key}
            />
          );
        })}
      </View>
    </View>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      sceneContainerStyle={{ backgroundColor: "#17191A" }}
    >
      <Tab.Screen name="ახლი sms!" component={SmsScreen} />
      <Tab.Screen name="კონტაქტი" component={ContactScreen} />
      <Tab.Screen name="ისტორია" component={SmsHistoryScreen} />
      <Tab.Screen name="პარამეტრები" component={ParametersScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width,
    height: 100,
    backgroundColor: "#000",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",

    // width: "100%",
  },
  tab: {
    // flexDirection: "row",
    // alignItems: "center",
    // backgroundColor: "red",
    alignItems: "center",
    flex: 1,
    // height: 10,
    // width: 100,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

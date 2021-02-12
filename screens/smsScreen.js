import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import HeaderText from "../components/headerTitle";

function smsScreen({ navigation, route }) {
  console.log("------------------------");
  const [msgText, setMsgText] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  // console.log(route, "navigationnavigation");
  console.log("+++++++++++++");

  const phone = route.params?.phone;
  useEffect(() => {
    return setPhoneNumber(null);
  }, []);
  useEffect(() => {
    // if (phoneNumber === null) {
    console.log("xxxxxxxxxxxxx");
    setPhoneNumber(phone);
    // }
  }, [phone]);
  return (
    <View style={{ flex: 1, paddingHorizontal: 15 }}>
      <HeaderText />
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(val) => setPhoneNumber(val)}
        value={phoneNumber}
        placeholder="მობილურის ნომერი"
      />

      <TextInput
        style={styles.textarea}
        value={msgText}
        onChangeText={(val) => {
          if (val.length > 150) return;
          setMsgText(val);
        }}
        multiline={true}
        numberOfLines={8}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="ტექსტი (მაქსიმუმ 150 სიმბოლო)"
      />
      <View
        style={{
          marginVertical: 8,
          flexDirection: "row",
        }}
      >
        <Text style={{ color: "#797C80" }}> დარჩენილია </Text>
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          {150 - msgText.length}
        </Text>
        <Text style={{ color: "#797C80" }}> სიმბოლო</Text>
      </View>
      <TouchableOpacity style={{ color: "red" }}>
        <Text style={styles.button}>Ok</Text>
      </TouchableOpacity>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#AFB1B3",
    borderRadius: 10,
    color: "#797C80",
    height: 50,
    paddingHorizontal: 10,
    fontSize: 18,
  },

  button: {
    borderRadius: 20,
    height: 50,
    color: "#fff",
    fontSize: 18,
    backgroundColor: "#1579BA",

    textAlign: "center",
    textAlignVertical: "center",
  },

  textarea: {
    backgroundColor: "#AFB1B3",
    display: "flex",
    borderRadius: 10,
    textAlignVertical: "top",
    // alignItems: "flex-start",
    color: "#797C80",
    marginTop: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
    fontSize: 18,
  },
});
export default smsScreen;

import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Button,
} from "react-native";
import HeaderText from "../components/headerTitle";

// import { Contacts } from "expo";
// import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as Contacts from "expo-contacts";
// import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

function contactsScreen({ navigation }) {
  console.log(navigation, "mnnnnnnnnnnn");
  const [contactsList, setContactsList] = useState([]);
  const [activeList, setActiveList] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  const loadContacts = async () => {
    const permission = await Permissions.askAsync(Permissions.CONTACTS);

    if (permission.status !== "granted") {
      return;
    }

    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.PHONE_NUMBERS, Contacts.Fields.Emails],
    });

    setContactsList(data);
    // console.log(data);
  };

  useEffect(() => {
    loadContacts();
  }, []);
  return (
    <View style={{ marginHorizontal: 10 }}>
      <HeaderText />
      <View style={{ position: "relative" }}>
        <Image
          style={{
            position: "absolute",
            zIndex: 12,
            top: 11,
            left: 10,
          }}
          // style={{ width: 30, height: 30 }}
          source={require("../assets/Vector.png")}
        />

        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onChangeText={(val) => {
            console.log(val);
            setSearchVal(val.toLowerCase());
          }}
          autoCorrect={false}
          placeholder="მობილურის ნომერი"
        />
      </View>
      <FlatList
        data={contactsList.filter((el) =>
          el.name.toLowerCase().includes(searchVal)
        )}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                console.log(item.id);
                setActiveList(item.id);
              }}
            >
              {item.id === activeList ? (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text
                      style={{
                        marginVertical: 10,
                        fontSize: 16,
                        color: "#fff",
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        marginVertical: 3,
                        fontSize: 16,
                        color: "#797C80",
                      }}
                    >
                      {item.phoneNumbers && item.phoneNumbers[0].number}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("ახლი sms!", {
                        phone: item.phoneNumbers
                          ? item.phoneNumbers[0].number
                          : "",
                      });
                    }}
                  >
                    <Text
                      style={{
                        ...styles.button,
                        height: 30,
                        fontSize: 14,
                        paddingHorizontal: 10,
                      }}
                    >
                      გაგზავნა
                    </Text>
                    {/* <Button title="გაგზავნა" /> */}
                  </TouchableOpacity>
                </View>
              ) : (
                <Text
                  style={{ marginVertical: 10, fontSize: 16, color: "#fff" }}
                >
                  {item.name}
                </Text>
              )}
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#AFB1B3",
    borderRadius: 10,
    color: "#797C80",
    height: 40,
    paddingHorizontal: 10,
    fontSize: 18,
    paddingLeft: 40,
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
});

export default contactsScreen;

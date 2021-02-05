import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Constants } from "expo";
// import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

function contactsScreen() {
  const [contactsList, setContactsList] = useState([]);
  const loadContacts = async () => {
    console.log(Expo);
    // const permission = await Expo.Permissions.askAsync(
    //   Expo.Permissions.CONTACTS
    // );

    // if (permission.status !== "granted") {
    //   return;
    // }

    // const { data } = await Constants.getContactsAsync({
    //   fields: [contacts.Fields.PhoneNumber, Contacts.Fields.Emails],
    // });

    // setContactsList(data);
    // console.log(data);
  };

  useEffect(() => {
    loadContacts();
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "green" }}>connjnnjtact!</Text>
    </View>
  );
}

export default contactsScreen;

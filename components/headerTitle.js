import React from "react";
import { Text, View } from "react-native";

function headerTitle() {
  return (
    <View>
      <Text
        style={{
          color: "#1579BA",
          fontSize: 44,
          textAlign: "center",
          paddingVertical: 20,
          marginTop: 30,
        }}
      >
        Free SMS Sender
      </Text>
    </View>
  );
}

export default headerTitle;

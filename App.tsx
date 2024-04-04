import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import SonnyModal from "./components/SonnyModal";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Open Modal" onPress={openModal} />
      <SonnyModal
        visible={modalVisible}
        onClose={closeModal}
        title="Modal Title"
        message="
           Explore our collection of tutorial videos available in multiple
          languages. Please choose your preferred video language version.
          Discover step-by-step instructions to enhance your app experience.
        "
        animationType="slide"
        presentationStyle="pageSheet"
        onDismiss={() => console.log("Modal dismissed")}
        onShow={() => console.log("Modal shown")}
        backdropColor="black"
        backdropOpacity={0.5}
        swipeDirection="down"
        onSwipeComplete={() => console.log("Swipe complete")}
        keyboardAvoiding={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

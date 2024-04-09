# React Native Sonny Modal Component 🚀

##### Sonny React Native Modal Component is a customizable modal component for React Native applications. It provides various props for controlling the appearance and behavior of the modal.

### Installation

#### Install the package via npm:

`npm install react-native-sonny-modal`

#### or

#### Install the package via yarn:

`yarn add react-native-sonny-modal`

### Usage

#### Import the `SonnyModal` in your React Native application and use it like so:

```
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { SonnyModal } from "react-native-sonny-modal/App"


const App = () => {
const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Open Modal" onPress={openModal} />
            <SonnyModal
                visible={modalVisible}
                onClose={closeModal}
                title="Modal Title"
                message="this is some sample text"
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
};

export default App;

```

### Props

#### - visible (boolean): Controls the visibility of the modal.

#### - onClose (function): Callback function invoked when the modal is closed.

#### - title (string): Title text displayed in the modal.

#### - message (string): Message text displayed in the modal.

#### - animationType (optional, string): Type of animation for opening and closing the modal (default: 'slide').

`Options: 'none', 'slide', 'fade'.`

#### - presentationStyle (optional, string): Style of the modal presentation (default: 'fullScreen').

`Options:'pageSheet', 'formSheet', 'overFullScreen'.`

#### - onDismiss (optional, function): Callback function invoked when the modal is dismissed.

#### - onShow (optional, function): Callback function invoked when the modal is shown.

#### - backdropColor (optional, string): Color of the backdrop behind the modal.

#### - backdropOpacity (optional, number): Opacity of the backdrop behind the modal.

#### - swipeDirection (optional, string): Direction(s) from which the modal can be swiped to close.

`Options: 'up', 'down', 'left', 'right'.`

#### - onSwipeComplete (optional, function): Callback function invoked when the modal is swiped to close.

#### - keyboardAvoiding (optional, boolean): Specifies whether the modal should adjust its position to avoid the keyboard (default: false).

Thank you for your contribution to the Sonny Modal Component! 🎉

### License

#### This package is licensed under the MIT License. See the LICENSE file for details.

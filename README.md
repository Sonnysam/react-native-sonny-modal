# Sonny React Native Modal Component 🚀
##### Sonny React Native Modal Component is a customizable modal component for React Native applications. It provides various props for controlling the appearance and behavior of the modal.

### Installation
#### Install the package via npm:
`npm install sonny-react-native-modal`

### Usage
#### Import the `SonnyModal` in your React Native application and use it like so:
```
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import SonnyModal from 'sonny-modal-react-native';

const App = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Open Modal" onPress={() => setModalVisible(true)} />
            <SonnyModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                title="Welcome!"
                message="This is a custom modal component."
            />
        </View>
    );
};

export default App;

```

### Props
####  - visible (boolean): Controls the visibility of the modal.
#### - onClose (function): Callback function invoked when the modal is closed.
#### - title (string): Title text displayed in the modal.
#### - message (string): Message text displayed in the modal.
#### - animationType (optional, string): Type of animation for opening and closing the modal (default: 'slide').
 `Options: 'none', 'slide', 'fade'.`
#### - presentationStyle (optional, string): Style of the modal presentation (default: 'fullScreen').
`Options: 'fullScreen', 'pageSheet', 'formSheet', 'overFullScreen'.`
#### - transparent (optional, boolean): Specifies whether the modal is transparent (default: false).
#### - onDismiss (optional, function): Callback function invoked when the modal is dismissed.
#### - onShow (optional, function): Callback function invoked when the modal is shown.
#### - backdropColor (optional, string): Color of the backdrop behind the modal.
#### - backdropOpacity (optional, number): Opacity of the backdrop behind the modal.
#### - swipeDirection (optional, string): Direction(s) from which the modal can be swiped to close.
`Options: 'up', 'down', 'left', 'right'.`
#### - onSwipeComplete (optional, function): Callback function invoked when the modal is swiped to close.
#### - keyboardAvoiding (optional, boolean): Specifies whether the modal should adjust its position to avoid the keyboard (default: false).


### License
#### This package is licensed under the MIT License. See the LICENSE file for details. 

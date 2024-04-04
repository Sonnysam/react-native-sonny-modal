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
import SonnyModal from 'sonny-react-native-modal';

const App = () => {
const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Open Modal" onPress={() => setModalVisible(true)} />
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
####  - visible (boolean): Controls the visibility of the modal.
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

### How to contribute to this package
1. **Fork the Repository**: Fork the repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine.

    ```bash
    git clone https://github.com/Sonnysam/sonny-react-native-modal.git
    ```

3. **Create a Branch**: Create a new branch for your contribution.

    ```bash
    git checkout -b feature/my-new-feature
    ```

   Replace `feature/my-new-feature` with a descriptive branch name.

4. **Make Changes**: Make your desired changes to the codebase.

5. **Commit Changes**: Commit your changes with a descriptive commit message.

    ```bash
    git commit -am "Add feature: Description of your changes"
    ```

6. **Push Changes**: Push your changes to your forked repository.

    ```bash
    git push origin feature/my-new-feature
    ```

7. **Submit a Pull Request**: Go to the original repository on GitHub and create a new pull request. Provide a descriptive title and description for your pull request, detailing the changes you've made.

8. **Code Review**: Your pull request will undergo code review. Make any necessary changes based on feedback from maintainers.

9. **Merge Pull Request**: Once approved, your pull request will be merged into the main branch.

Thank you for your contribution to the Sonny Modal Component! 🎉

### License
#### This package is licensed under the MIT License. See the LICENSE file for details. 

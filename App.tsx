import React from 'react';
import { HelloWorld } from "./src/screens";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App() {
  return (
    <View>
    <HelloWorld />
      <Text>Hello World</Text>
    </View>
  );
}

export default App;

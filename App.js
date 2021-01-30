import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppNavigator from './src/screen/AppNavigator';

const App: () => React$Node = () => {
  return (
    <View style={styles.page}>
      <AppNavigator/>
    </View>  
  );
};

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});


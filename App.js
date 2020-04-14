import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { AppbarContent } from 'react-native-paper/lib/typescript/src/components/Appbar/AppbarContent';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <AppbarContent
          title="TODO List"
          />
        </Appbar.Header>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

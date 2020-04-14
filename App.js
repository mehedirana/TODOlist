import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
        <Appbar.Content
          title="ToDo List"
          subtitle="Subtitle"
        />
      </Appbar.Header>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
